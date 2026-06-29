import { useLang } from "@/lib/lang-context";

export function MobileStickyBar() {
  const { lang } = useLang();
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 grid grid-cols-3 bg-[color:var(--graphite)] border-t border-[color:var(--border)]">
      <a href="tel:+998712000000" className="py-3.5 text-center text-[11px] font-semibold tracking-[0.15em] uppercase text-[color:var(--pearl)] border-r border-[color:var(--border)]">
        {lang === "uz" ? "Qo'ng'iroq" : "Звонок"}
      </a>
      <a href="https://t.me/kaiyiuz" className="py-3.5 text-center text-[11px] font-semibold tracking-[0.15em] uppercase text-[color:var(--pearl)] border-r border-[color:var(--border)]">
        Telegram
      </a>
      <button className="py-3.5 text-[11px] font-semibold tracking-[0.15em] uppercase bg-[color:var(--ember)] text-[color:var(--obsidian)]">
        {lang === "uz" ? "Test-drayv" : "Тест-драйв"}
      </button>
    </div>
  );
}
