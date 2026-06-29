import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { StatsStrip } from "@/components/site/StatsStrip";
import type { Engine } from "@/components/site/engine-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kaiyi X7 — Rasmiy diler O'zbekistonda | Kaiyi.uz" },
      {
        name: "description",
        content:
          "Kaiyi X7 benzin va gibrid (Kunpeng iHD). Test-drayv, kredit, bo'lib to'lash. 6 ta filial: Toshkent, Farg'ona, Jizzax, Xorazm.",
      },
      { property: "og:title", content: "Kaiyi X7 — Kaiyi.uz" },
      {
        property: "og:description",
        content: "Benzin va gibrid kross-over. Rasmiy diler O'zbekistonda.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const [engine, setEngine] = useState<Engine>("gas");

  return (
    <div className="min-h-screen bg-[color:var(--obsidian)] text-[color:var(--pearl)]">
      <Header />
      <main>
        <Hero engine={engine} onEngineChange={setEngine} />
        <StatsStrip engine={engine} />
      </main>
    </div>
  );
}
