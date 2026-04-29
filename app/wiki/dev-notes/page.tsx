import Link from "next/link";
import { TopNavBar } from "../../components/TopNavBar";
import { SiteFooter } from "../../components/SiteFooter";
import { AnimatedSection } from "../../components/AnimatedSection";
import { fetchRepos, fetchRepoReadme, formatRepoDate, type GitHubRepo } from "../../lib/github";

interface RepoCardProps {
  repo: GitHubRepo;
  readme: string | null;
}

function RepoCard({ repo, readme }: RepoCardProps) {
  const summary = readme ?? repo.description;

  return (
    <div className="p-8 bg-surface-container-low border-l-2 border-tertiary flex flex-col gap-6 h-full">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 flex items-center justify-center bg-primary-container/30 text-tertiary rounded-sm shrink-0 mt-0.5">
            <span className="material-symbols-outlined text-lg">terminal</span>
          </div>
          <div>
            <h3 className="font-headline text-xl font-bold text-on-surface leading-tight">
              {repo.name}
            </h3>
            <span className="font-mono text-[10px] tracking-widest text-on-surface-variant/40 uppercase">
              {formatRepoDate(repo.pushed_at)}
            </span>
          </div>
        </div>
        <a
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 px-3 py-1.5 bg-surface-container-high hover:bg-surface-container-highest hover:-translate-y-[1px] transition-all shrink-0"
          aria-label={`${repo.name} auf GitHub öffnen`}
        >
          <span className="material-symbols-outlined text-sm text-on-surface-variant">open_in_new</span>
          <span className="font-headline text-[10px] tracking-[0.1em] text-on-surface-variant uppercase hidden sm:inline">
            GitHub
          </span>
        </a>
      </div>

      <p className="text-sm text-on-surface-variant leading-relaxed flex-1">
        {summary ?? (
          <span className="italic text-on-surface-variant/40">Keine Beschreibung vorhanden.</span>
        )}
      </p>

      {(repo.language || repo.topics.length > 0) && (
        <div className="flex flex-wrap gap-2">
          {repo.language && (
            <span className="px-3 py-1 bg-tertiary-container text-on-tertiary-container rounded-full font-headline text-[10px] tracking-[0.1em] uppercase">
              {repo.language}
            </span>
          )}
          {repo.topics.map((topic) => (
            <span
              key={topic}
              className="px-3 py-1 bg-surface-container-high text-on-surface-variant rounded-full font-headline text-[10px] tracking-[0.1em] uppercase"
            >
              {topic}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export default async function DevNotesPage() {
  const repos = await fetchRepos(10);
  const readmes = await Promise.all(repos.map((r) => fetchRepoReadme(r.name)));

  return (
    <>
      <TopNavBar />
      <main className="bg-surface min-h-screen">
        <section className="px-10 pt-48 pb-20">
          <div className="max-w-screen-xl mx-auto">
            <span className="animate-fade-up-1 inline-block font-headline text-xs font-bold tracking-[0.2em] text-tertiary uppercase mb-4">
              Wiki / Kategorie
            </span>
            <div className="flex items-start gap-6 mb-6 animate-fade-up-1">
              <div className="w-14 h-14 flex items-center justify-center bg-primary-container/30 text-tertiary rounded-sm shrink-0 mt-1">
                <span className="material-symbols-outlined text-2xl">terminal</span>
              </div>
              <div>
                <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter text-on-surface mb-2">
                  Dev Notes
                </h1>
                <span className="font-mono text-[10px] tracking-widest text-on-surface-variant/50 uppercase">
                  GitHub Aktivität · live
                </span>
              </div>
            </div>
            <p className="animate-fade-up-2 text-lg text-on-surface-variant max-w-2xl leading-relaxed">
              Aktuelle Repositories von GitHub — zuletzt aktualisierte Projekte,
              automatisch synchronisiert.
            </p>
          </div>
        </section>

        <section className="px-10 pb-32">
          <div className="max-w-screen-xl mx-auto">
            <AnimatedSection className="flex items-baseline justify-between mb-10">
              <h2 className="font-headline text-xs font-bold tracking-[0.2em] text-primary uppercase">
                Repositories
              </h2>
              <span className="font-mono text-[10px] tracking-widest text-on-surface-variant/50 uppercase">
                {repos.length > 0 ? `${repos.length} repos` : "—"}
              </span>
            </AnimatedSection>

            {repos.length === 0 ? (
              <AnimatedSection delay={80}>
                <div className="p-10 bg-surface-container-low border-l-2 border-outline text-on-surface-variant/60 text-sm font-headline tracking-wide">
                  GitHub momentan nicht erreichbar — bitte später erneut versuchen.
                </div>
              </AnimatedSection>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
                {repos.map((repo, i) => (
                  <AnimatedSection key={repo.id} delay={i * 60}>
                    <RepoCard repo={repo} readme={readmes[i]} />
                  </AnimatedSection>
                ))}
              </div>
            )}

            <div className="mt-12">
              <Link
                href="/wiki"
                className="font-headline text-xs font-bold tracking-[0.2em] text-secondary uppercase hover:underline hover:-translate-y-[1px] transition-transform inline-block"
              >
                ← Zurück zum Wiki
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
