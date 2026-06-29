import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useLang } from "@/lib/lang-context";

export function Header() {
  const { lang, setLang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Top phone bar */}
      <div className="hidden md:block border-b border-[color:var(--border)] text-xs tracking-wider text-[color:var(--steel)]">
        <div className="mx-auto max-w-[1400px] px-8 h-9 flex items-center justify-between">
          <span>KAIYI.UZ — {lang === "uz" ? "rasmiy diler" : "официальный дилер"}</span>
          <a href="tel:+998712000000" className="hover:text-[color:var(--pearl)] transition-colors">
            {t("topbar.phone")}
          </a>
        </div>
      </div>

      <header
        className={`fixed top-0 md:top-9 left-0 right-0 z-50 transition-colors duration-300 ${
          scrolled ? "bg-[color:var(--graphite)] border-b border-[color:var(--border)]" : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-[1400px] px-6 md:px-8 h-16 flex items-center justify-between gap-6">
          <Link to="/" className="font-display font-black text-lg tracking-tight">
            KAIYI
          </Link>

          <nav className="hidden lg:flex items-center gap-9 text-[11px] font-semibold tracking-[0.15em] text-[color:var(--pearl)]">
            <Link to="/" className="hover:text-[color:var(--ember)] transition-colors">
              {t("nav.model")}
            </Link>
            <Link to="/" className="hover:text-[color:var(--ember)] transition-colors">
              {t("nav.finance")}
            </Link>
            <Link to="/" className="hover:text-[color:var(--ember)] transition-colors">
              {t("nav.branches")}
            </Link>
            <Link to="/" className="hover:text-[color:var(--ember)] transition-colors">
              {t("nav.contacts")}
            </Link>
          </nav>

          <div className="flex items-center gap-5">
            <div className="flex items-center text-[11px] font-semibold tracking-wider">
              <button
                onClick={() => setLang("uz")}
                className={`px-1.5 transition-colors ${lang === "uz" ? "text-[color:var(--pearl)]" : "text-[color:var(--steel)]"}`}
              >
                UZ
              </button>
              <span className="text-[color:var(--steel)]">/</span>
              <button
                onClick={() => setLang("ru")}
                className={`px-1.5 transition-colors ${lang === "ru" ? "text-[color:var(--pearl)]" : "text-[color:var(--steel)]"}`}
              >
                RU
              </button>
            </div>
            <button className="btn-outline hidden sm:inline-flex">{t("cta.testdrive")}</button>
          </div>
        </div>
      </header>
    </>
  );
}
