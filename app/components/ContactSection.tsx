const LINKS = [
  { icon: "mail", label: "EMAIL", href: "mailto:contact@pascalpeters.info" },
  { icon: "link", label: "LINKEDIN", href: "https://www.linkedin.com/in/pascal-peters-662a87218/" },
  { icon: "code", label: "GITHUB", href: "https://github.com/Pascal-64/" },
];

export function ContactSection() {
  return (
    <section id="contact" className="py-32 px-10 bg-surface">
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter mb-12">
          Bereit für neue
          <br />
          <span className="text-[#00B4D8]">System-Optimierungen?</span>
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="flex items-center gap-3 text-on-surface-variant hover:text-primary transition-colors"
            >
              <span className="material-symbols-outlined">{link.icon}</span>
              <span className="font-headline font-bold text-sm tracking-widest uppercase">
                {link.label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
