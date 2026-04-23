export function SiteFooter() {
  return (
    <footer className="w-full px-10 py-12 flex flex-col md:flex-row justify-between items-center gap-6 border-t border-white/5 bg-surface">
      <div className="flex items-center gap-4">
        <div className="w-2 h-2 rounded-full bg-tertiary animate-pulse shadow-[0_0_8px_rgba(98,220,175,0.8)]" />
        <div className="font-label text-[10px] tracking-widest uppercase text-secondary">
          SYSTEM_STATUS: OPERATIONAL
        </div>
      </div>
      <div className="font-label text-[10px] tracking-widest uppercase text-on-surface-variant">
        © 2026 PASCAL PETERS // DEVELOPED FOR PERFORMANCE
      </div>
      <div className="flex gap-8">
        <a
          href="/impressum"
          className="font-label text-[10px] tracking-widest uppercase text-on-surface-variant hover:text-on-surface transition-colors"
        >
          IMPRESSUM & DATENSCHUTZERKLÄRUNG
        </a>
      </div>
    </footer>
  );
}
