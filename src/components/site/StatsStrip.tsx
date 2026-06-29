import { useLang } from "@/lib/lang-context";
import { engineSpecs, type Engine } from "./engine-data";

export function StatsStrip({ engine }: { engine: Engine }) {
  const { t, lang } = useLang();
  const spec = engineSpecs[engine];

  const items = [
    { label: t("stat.power"), value: spec.power, unit: t("unit.hp") },
    { label: t("stat.accel"), value: spec.accel, unit: t("unit.sec") },
    { label: t("stat.consumption"), value: spec.consumption, unit: t("unit.l100") },
    {
      label: t("stat.price"),
      value: spec.priceFrom,
      unit: lang === "uz" ? "so'm" : "сум",
    },
  ];

  return (
    <section className="border-t border-b border-[color:var(--border)] bg-[color:var(--graphite)]">
      <div className="mx-auto max-w-[1400px] grid grid-cols-2 md:grid-cols-4">
        {items.map((it, i) => (
          <div
            key={it.label}
            className={`px-6 md:px-10 py-10 md:py-14 ${
              i < items.length - 1 ? "md:border-r border-[color:var(--border)]" : ""
            } ${i < 2 ? "border-b md:border-b-0 border-[color:var(--border)]" : ""} ${
              i % 2 === 0 ? "border-r md:border-r" : ""
            }`}
          >
            <div className="text-[10px] tracking-[0.22em] uppercase text-[color:var(--steel)] mb-4">
              {it.label}
            </div>
            <div className="font-display font-black text-[color:var(--pearl)] text-4xl md:text-5xl tabular leading-none transition-all duration-500">
              {it.value}
            </div>
            <div className="mt-2 text-xs text-[color:var(--steel)]">{it.unit}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
