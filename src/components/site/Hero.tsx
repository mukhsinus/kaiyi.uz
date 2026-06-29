import { useLang } from "@/lib/lang-context";
import type { Engine } from "./engine-data";

export function Hero({ engine, onEngineChange }: { engine: Engine; onEngineChange: (e: Engine) => void }) {
  const { t, lang } = useLang();

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[color:var(--obsidian)]">
      {/* PLACEHOLDER: full-bleed studio photo of Kaiyi X7, 3/4 front, dark background.
          Replace gas/hybrid variants below with two real press photos. */}
      <div className="absolute inset-0">
        <div
          className={`absolute inset-0 transition-opacity duration-700 ${engine === "gas" ? "opacity-100" : "opacity-0"}`}
          style={{
            background:
              "radial-gradient(ellipse at 60% 55%, #2a2c30 0%, #14161a 45%, #0E0F11 80%)",
          }}
          aria-label="Kaiyi X7 — gas variant photo placeholder"
        />
        <div
          className={`absolute inset-0 transition-opacity duration-700 ${engine === "hybrid" ? "opacity-100" : "opacity-0"}`}
          style={{
            background:
              "radial-gradient(ellipse at 40% 60%, #1d2630 0%, #11171c 45%, #0E0F11 80%)",
          }}
          aria-label="Kaiyi X7 — hybrid variant photo placeholder"
        />
        {/* bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent to-[color:var(--obsidian)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-8 pt-40 md:pt-44 pb-20 min-h-screen flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-3 text-[11px] tracking-[0.25em] text-[color:var(--steel)] mb-6">
            <span className="h-px w-10 chrome-line" />
            {t("hero.label")}
          </div>

          <h1 className="text-display-xl text-[color:var(--pearl)] text-[clamp(3.5rem,12vw,11rem)]">
            {t("hero.title")}
          </h1>

          <p className="mt-6 max-w-md text-[color:var(--steel)] text-sm md:text-base leading-relaxed">
            {engine === "gas" ? t("hero.sub.gas") : t("hero.sub.hybrid")}
          </p>
        </div>

        <div className="mt-12 flex flex-col gap-8">
          {/* Engine toggle */}
          <div className="inline-flex items-center self-start border border-[color:var(--border)]">
            {(["gas", "hybrid"] as Engine[]).map((e) => (
              <button
                key={e}
                onClick={() => onEngineChange(e)}
                className={`px-6 py-2.5 text-[11px] font-semibold tracking-[0.18em] uppercase transition-colors ${
                  engine === e
                    ? "bg-[color:var(--ember)] text-[color:var(--obsidian)]"
                    : "text-[color:var(--steel)] hover:text-[color:var(--pearl)]"
                }`}
              >
                {lang === "uz" ? (e === "gas" ? "Benzin" : "Gibrid") : e === "gas" ? "Бензин" : "Гибрид"}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <button className="btn-ember btn-ember-hover">{t("cta.testdrive")}</button>
            <button className="btn-outline">{t("cta.prices")}</button>
          </div>
        </div>
      </div>
    </section>
  );
}
