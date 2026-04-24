import Link from "next/link";

const PROJECTS = [
  {
    icon: "query_stats",
    iconBg: "bg-primary-container",
    iconColor: "text-primary",
    date: "2026.04",
    title: "Ollama GUI",
    body: "Streamlit-Oberfläche für lokale Ollama-Modelle mit flexiblen Profilen und Modi, integriertem Token-Tracking, strukturierter Profilverwaltung sowie erweiterten Funktionen zur Steuerung, Ausführung und Analyse",
    href: "/projects/ollama-gui",
  },
  {
    icon: "dashboard",
    iconBg: "bg-tertiary-container",
    iconColor: "text-tertiary",
    date: "2026.03",
    title: "LLM's",
    body: "Individuelle Anwendungen rund um den Einsatz von Large Language Models. Fokus auf lokale Verarbeitung, strukturierte Workflows und praxisnahe Integration in bestehende Systeme und Abläufe.",
    href: "/projects/llms",
  },
  {
    icon: "settings_suggest",
    iconBg: "bg-secondary-container",
    iconColor: "text-on-secondary",
    date: "2026.01",
    title: "Prompt-Engineering",
    body: "Konzeption und Optimierung von Prompts für reproduzierbare Ergebnisse. Klare Strukturen, definierte Abläufe und gezielte Steuerung von Modellverhalten für konkrete Anwendungsfälle.",
    href: "/projects/prompt-engineering",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="bg-surface py-32 px-10">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="font-headline text-xs font-bold tracking-[0.2em] text-secondary uppercase mb-16">
          Selected Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
          {PROJECTS.map((project) => (
            <Link
              key={project.title}
              href={project.href}
              className="group block bg-surface-container-low p-10 hover:bg-surface-container-high transition-all"
            >
              <div className="flex justify-between items-start mb-12">
                <div
                  className={`w-12 h-12 flex items-center justify-center ${project.iconBg} ${project.iconColor} rounded-sm`}
                >
                  <span className="material-symbols-outlined">
                    {project.icon}
                  </span>
                </div>
                <span className="font-label text-[10px] tracking-widest text-on-surface-variant">
                  {project.date}
                </span>
              </div>
              <h3 className="font-headline text-2xl font-bold mb-4">
                {project.title}
              </h3>
              <p className="text-on-surface-variant text-sm mb-8 leading-relaxed">
                {project.body}
              </p>
              <span className="text-secondary font-headline font-bold text-xs tracking-widest uppercase group-hover:underline">
                Details_
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
