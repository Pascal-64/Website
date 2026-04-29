export type WikiCategory =
  | "ai-llm"
  | "dev-notes"
  | "workflow"
  | "systeme"
  | "web";

export interface PageMeta {
  title: string;
  date: string; // ISO: "YYYY-MM-DD"
  href: string;
  category?: WikiCategory;
}

export const CATEGORY_PREFIX: Record<string, string> = {
  "ai-llm":    "WIKI",
  "dev-notes": "DEV",
  "workflow":  "FLOW",
  "systeme":   "SYS",
  "web":       "WEB",
};

export function getPageCode(href: string): string {
  return getPagesWithCodes().find((p) => p.href === href)?.code ?? "";
}

export function getPagesWithCodes() {
  const counters: Record<string, number> = {};
  return [...WIKI_PAGES]
    .sort((a, b) => a.date.localeCompare(b.date))
    .map((m) => {
      const prefix = CATEGORY_PREFIX[m.category ?? ""] ?? "WIKI";
      counters[prefix] = (counters[prefix] ?? 0) + 1;
      return { ...m, code: `${prefix}.${String(counters[prefix]).padStart(4, "0")}` };
    });
}

export const WIKI_PAGES: PageMeta[] = [
  {
    title: "Obsidian Vault Wiki",
    date: "2026-04-18",
    href: "/wiki/obsidian-vault-wiki",
    category: "dev-notes",
  },
  {
    title: "Ollama GUI Projekt",
    date: "2026-04-05",
    href: "/wiki/ollama-gui-projekt",
    category: "ai-llm",
  },
  {
    title: "Prompt Engineering",
    date: "2026-03-20",
    href: "/wiki/prompt-engineering",
    category: "ai-llm",
  },
  {
    title: "Lokale Ollama Modelle als Agents",
    date: "2026-03-28",
    href: "/wiki/lokale-ollama-modelle-als-agents",
    category: "ai-llm",
  },
];
