const TIMELINE = [
  {
    title: "POS Software & Onlineshop",
    level: "2025 - heute",
    body: "KiK Textilien und Non-Food GmbH.",
    tags: ["Administrator", "Testing", "SQL"],
  },
  {
    title: "Fachinformatiker für Anwendungsentwicklung",
    level: "Sep - Dez 2024",
    body: "Christliches Klinikum Unna gGmbH",
    tags: ["3rd Lvl Support", "Java", "Backend"],
  },
  {
    title: "Auszubildender Fachinformatiker Anwendungsentwicklung",
    level: "2021 - Juni 2024",
    body: "Finanz Informatik GmbH & Co. KG.",
    tags: ["Java", "JUnit", "Backend", "Spring Boot", "Mockito"],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="relative py-32 px-10 bg-surface">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="font-headline text-center text-4xl font-bold tracking-tight text-on-surface mb-24">
          Profil
        </h2>
        <div className="space-y-24 max-w-5xl mx-auto">
          {TIMELINE.map((entry, index) => (
            <div
              key={entry.title}
              className="relative flex items-start group"
            >
              {index < TIMELINE.length - 1 && (
                <div className="absolute left-[7px] top-2 bottom-[-96px] w-[2px] bg-secondary/20" />
              )}
              <div className="relative z-10 w-4 h-4 rounded-full bg-secondary border-4 border-background mt-2 mr-10 shadow-[0_0_10px_rgba(76,214,251,0.4)]" />
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <h3 className="font-headline text-2xl font-bold text-on-surface">
                    {entry.title}
                  </h3>
                  <span className="text-[14px] font-mono tracking-widest text-on-surface-variant/40 uppercase mt-2 md:mt-0">
                    {entry.level}
                  </span>
                </div>
                <p className="text-on-surface-variant leading-relaxed mb-6 max-w-2xl">
                  {entry.body}
                </p>
                <div className="flex flex-wrap gap-2">
                  {entry.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-secondary/5 border border-secondary/20 text-[9px] font-bold text-secondary rounded-sm uppercase tracking-widest"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
