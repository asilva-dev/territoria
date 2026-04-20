import React, { useState, useEffect } from "react";
import styles from "./Nav.module.css";

export default function Nav(): React.ReactElement {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Bloqueia o scroll do body quando o menu mobile está aberto
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [menuOpen]);

  const scrollTo = (id: string): void => {
    const element = document.getElementById(id);
    if (element) {
      setMenuOpen(false);

      setTimeout(() => {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }, 300);
    }
  };

  return (
    <nav
      className={`${styles.nav} ${scrolled ? styles.scrolled : ""} ${
        menuOpen ? styles.navActive : ""
      }`}
    >
      <div className={styles.navContainer}>
        <div className={styles.logo} onClick={() => scrollTo("home")}>
          Territor<span className={styles.logoAccent}>IA</span>
        </div>

        <button
          className={`${styles.menuToggle} ${
            menuOpen ? styles.toggleActive : ""
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
          aria-expanded={menuOpen}
        >
          <span className={styles.hamburger}></span>
        </button>

        <div
          className={`${styles.links} ${menuOpen ? styles.linksActive : ""}`}
        >
          <div className={styles.linksInner}>
            {["sobre", "para-quem", "workshop", "brasil"].map((id) => (
              <button
                key={id}
                className={styles.link}
                onClick={() => scrollTo(id)}
              >
                {id.replace("-", " ")}
              </button>
            ))}
            <button className={styles.cta} onClick={() => scrollTo("contato")}>
              contato
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
