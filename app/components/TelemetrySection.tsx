"use client";

import { useEffect, useState } from "react";

type Metric = {
  icon: string;
  iconTone: string;
  code: string;
  value: string;
  unit: string;
  unitTone: string;
  barTone: string;
  fill: string;
  caption: string;
};

type PerformanceWithMemory = Performance & {
  memory?: {
    usedJSHeapSize: number;
    jsHeapSizeLimit: number;
  };
};

function formatLoadTime(ms: number): { value: string; unit: string } {
  if (ms >= 1000) return { value: (ms / 1000).toFixed(2), unit: "sec" };
  return { value: Math.round(ms).toString(), unit: "ms" };
}

function clampPercent(n: number) {
  return Math.max(0, Math.min(100, n));
}

export function TelemetrySection() {
  const [loadTime, setLoadTime] = useState<number | null>(null);
  const [ping, setPing] = useState<number | null>(null);
  const [memory, setMemory] = useState<{ used: number; limit: number } | null>(
    null,
  );

  useEffect(() => {
    const nav = performance.getEntriesByType(
      "navigation",
    )[0] as PerformanceNavigationTiming | undefined;
    if (nav) {
      const total = nav.loadEventEnd
        ? nav.loadEventEnd - nav.startTime
        : nav.domContentLoadedEventEnd - nav.startTime;
      setLoadTime(total);
    }

    let cancelled = false;

    const measurePing = async () => {
      try {
        const start = performance.now();
        await fetch(`/favicon.ico?_=${Date.now()}`, { cache: "no-store" });
        const delta = performance.now() - start;
        if (!cancelled) setPing(delta);
      } catch {
        if (!cancelled) setPing(null);
      }
    };

    const sampleMemory = () => {
      const perf = performance as PerformanceWithMemory;
      if (perf.memory) {
        setMemory({
          used: perf.memory.usedJSHeapSize,
          limit: perf.memory.jsHeapSizeLimit,
        });
      }
    };

    measurePing();
    sampleMemory();

    const pingInterval = setInterval(measurePing, 5000);
    const memInterval = setInterval(sampleMemory, 2000);

    return () => {
      cancelled = true;
      clearInterval(pingInterval);
      clearInterval(memInterval);
    };
  }, []);

  const metrics: Metric[] = [
    (() => {
      if (loadTime == null) {
        return {
          icon: "speed",
          iconTone: "text-primary",
          code: "PAGE_LOAD",
          value: "—",
          unit: "",
          unitTone: "text-primary/60",
          barTone: "bg-primary",
          fill: "0%",
          caption: "Page Load Time",
        };
      }
      const { value, unit } = formatLoadTime(loadTime);
      const fill = clampPercent(100 - (loadTime / 3000) * 100);
      return {
        icon: "speed",
        iconTone: "text-primary",
        code: "PAGE_LOAD",
        value,
        unit,
        unitTone: "text-primary/60",
        barTone: "bg-primary",
        fill: `${fill.toFixed(0)}%`,
        caption: "Page Load Time",
      };
    })(),
    (() => {
      if (ping == null) {
        return {
          icon: "settings_input_antenna",
          iconTone: "text-secondary",
          code: "PING",
          value: "—",
          unit: "",
          unitTone: "text-secondary/60",
          barTone: "bg-secondary",
          fill: "0%",
          caption: "Round Trip Latency",
        };
      }
      const fill = clampPercent(100 - (ping / 500) * 100);
      return {
        icon: "settings_input_antenna",
        iconTone: "text-secondary",
        code: "PING",
        value: Math.round(ping).toString(),
        unit: "ms",
        unitTone: "text-secondary/60",
        barTone: "bg-secondary",
        fill: `${fill.toFixed(0)}%`,
        caption: "Round Trip Latency",
      };
    })(),
    (() => {
      if (!memory) {
        return {
          icon: "memory",
          iconTone: "text-tertiary",
          code: "TAB_MEMORY",
          value: "N/A",
          unit: "",
          unitTone: "text-tertiary/60",
          barTone: "bg-tertiary",
          fill: "0%",
          caption: "Tab Memory Usage",
        };
      }
      const pct = (memory.used / memory.limit) * 100;
      return {
        icon: "memory",
        iconTone: "text-tertiary",
        code: "TAB_MEMORY",
        value: pct.toFixed(1),
        unit: "%",
        unitTone: "text-tertiary/60",
        barTone: "bg-tertiary",
        fill: `${clampPercent(pct).toFixed(1)}%`,
        caption: "Tab Memory Usage",
      };
    })(),
  ];

  return (
    <section className="py-32 px-10 bg-surface">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 gap-4">
          <div>
            <h2 className="font-headline text-xl font-bold tracking-[0.2em] text-primary uppercase mb-2">
              Real-Time Stats
            </h2>
          </div>
          <div className="flex items-center gap-2 bg-primary-container/20 border border-primary/10 px-4 py-2 rounded-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary" />
            </span>
            <span className="font-mono text-[10px] tracking-[0.2em] text-secondary uppercase font-bold">
              SERVER STATUS: ONLINE
            </span>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {metrics.map((metric) => (
            <div
              key={metric.code}
              className="bg-primary-container/10 border border-primary/10 p-6 backdrop-blur-sm group hover:border-primary/30 transition-all"
            >
              <div className="flex items-center justify-between mb-8">
                <span
                  className={`material-symbols-outlined ${metric.iconTone} text-xl`}
                >
                  {metric.icon}
                </span>
                <span className="text-[10px] font-mono text-on-surface-variant/50">
                  {metric.code}
                </span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-headline font-bold text-on-surface tabular-nums">
                  {metric.value}
                </span>
                <span
                  className={`text-sm font-label ${metric.unitTone} font-bold uppercase`}
                >
                  {metric.unit}
                </span>
              </div>
              <div className="mt-6 w-full h-1 bg-surface-container-highest rounded-full overflow-hidden">
                <div
                  className={`h-full ${metric.barTone} transition-all duration-500`}
                  style={{ width: metric.fill }}
                />
              </div>
              <p className="mt-4 text-[10px] font-label text-on-surface-variant uppercase tracking-widest font-bold">
                {metric.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
