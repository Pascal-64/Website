export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  topics: string[];
  pushed_at: string;
  stargazers_count: number;
}

const GITHUB_USER = "Pascal-64";

function buildHeaders(): Record<string, string> {
  const headers: Record<string, string> = {
    Accept: "application/vnd.github.v3+json",
  };
  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }
  return headers;
}

export async function fetchRepos(count = 10): Promise<GitHubRepo[]> {
  try {
    const res = await fetch(
      `https://api.github.com/users/${GITHUB_USER}/repos?sort=updated&per_page=${count}&type=public`,
      { headers: buildHeaders(), next: { revalidate: 3600 } }
    );
    if (!res.ok) return [];
    return res.json();
  } catch {
    return [];
  }
}

export async function fetchRepoReadme(repoName: string): Promise<string | null> {
  try {
    const res = await fetch(
      `https://api.github.com/repos/${GITHUB_USER}/${repoName}/readme`,
      {
        headers: { ...buildHeaders(), Accept: "application/vnd.github.v3.raw" },
        next: { revalidate: 3600 },
      }
    );
    if (!res.ok) return null;
    return extractSummary(await res.text());
  } catch {
    return null;
  }
}

function extractSummary(markdown: string): string {
  const lines = markdown.split("\n");
  let text = "";

  for (const line of lines) {
    const t = line.trim();
    if (
      !t ||
      t.startsWith("#") ||
      t.startsWith("```") ||
      t.startsWith("- ") ||
      t.startsWith("* ") ||
      t.startsWith("|") ||
      t.startsWith(">")
    ) {
      if (text) break;
      continue;
    }
    text += (text ? " " : "") + t;
  }

  return text.length > 280 ? text.slice(0, 277) + "..." : text;
}

export function formatRepoDate(iso: string): string {
  return iso.slice(0, 10).replace(/-/g, ".");
}
