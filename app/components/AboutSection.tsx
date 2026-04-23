const CAPABILITIES = [
  {
    icon: "point_of_sale",
    title: "POS Systeme",
    body: [
            "Fiskal- & Länderanforderungen",
            "Kassensysteme Tagesgeschäft",
            "Deployment & Rollouts"
          ],
    accent: "border-secondary-container",
    iconTone: "text-secondary",
  },
  {
    icon: "terminal",
    title: "Backend",
        body: [
            "Java",
            "Spring Boot",
            "Fehlerhandling & Stabilität"
          ],
    accent: "border-tertiary",
    iconTone: "text-tertiary",
    id: "automation",
  },
  {
    icon: "analytics",
    title: "Datenbanken",
        body: [
            "Schnittstellen SAP",
            "SQL",
            "Buchungsdaten"
          ],
    accent: "border-outline",
    iconTone: "text-outline",
  },
  {
    icon: "api",
    title: "API",
        body: [
            "REST API Integration",
            "POS ↔ Backend",
            "Monitoring & Logging von Schnittstellen"
          ],
    accent: "border-primary",
    iconTone: "text-primary",
  },
];

export function AboutSection() {
  return (
    <section id="systems" className="relative py-32 px-10 bg-surface">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="md:col-span-4">
            <h2 className="font-headline text-xs font-bold tracking-[0.2em] text-tertiary uppercase mb-8">
              Überblick
            </h2>
            <div className="text-4xl font-headline font-medium text-on-surface leading-tight">
              Build. Fix. Improve
            </div>
          </div>
          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-1">
            {CAPABILITIES.map((item) => (
              <div
                key={item.title}
                id={item.id}
                className={`p-8 bg-surface-container border-l-2 ${item.accent}`}
              >
                <span
                  className={`material-symbols-outlined ${item.iconTone} mb-4`}
                >
                  {item.icon}
                </span>
                <h3 className="font-headline font-bold text-lg mb-2">
                  {item.title}
                </h3>
                {Array.isArray(item.body) ? (
                  <ul className="text-sm text-on-surface-variant leading-relaxed space-y-1">
                    {item.body.map((line) => (
                      <li key={line} className="flex items-start gap-2">
                        <span
                          className={`mt-[0.55rem] h-1 w-1 shrink-0 rounded-full bg-current ${item.iconTone}`}
                        />
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    {item.body}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
