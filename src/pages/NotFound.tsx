import React, { CSSProperties } from "react";
import { LogoFull } from "../components/Logo/Logo";

const s: Record<string, CSSProperties> = {
  page: {
    background: "#1a0a00",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
  },
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1.1rem 2.5rem",
    borderBottom: "1px solid rgba(193,123,78,0.2)",
  },
  navBack: {
    fontSize: "13px",
    color: "#c9a882",
    background: "none",
    border: "none",
    cursor: "pointer",
    fontFamily: "'DM Sans', sans-serif",
  },
  main: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "4rem 2rem",
    position: "relative",
    overflow: "hidden",
  },
  inner: {
    position: "relative",
    zIndex: 1,
    textAlign: "center",
    maxWidth: "520px",
  },
  bigNum: {
    fontFamily: "'Playfair Display', serif",
    fontSize: "clamp(96px, 18vw, 160px)",
    fontWeight: 900,
    color: "rgba(193,123,78,0.12)",
    lineHeight: 1,
    marginBottom: "-2rem",
  },
  h1: {
    fontFamily: "'Playfair Display', serif",
    fontSize: "clamp(28px, 5vw, 40px)",
    fontWeight: 900,
    color: "#fff",
    lineHeight: 1.2,
    marginBottom: "1rem",
  },
  sub: {
    fontSize: "14px",
    fontWeight: 300,
    color: "#c9a882",
    lineHeight: 1.75,
    marginBottom: "2.5rem",
    fontFamily: "'DM Sans', sans-serif",
  },
  btns: {
    display: "flex",
    gap: "0.875rem",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  btnPrimary: {
    padding: "12px 28px",
    background: "#C17B4E",
    color: "#fff",
    fontSize: "13px",
    border: "none",
    cursor: "pointer",
  },
  btnSec: {
    padding: "12px 28px",
    background: "transparent",
    color: "#c9a882",
    fontSize: "13px",
    border: "1px solid rgba(193,123,78,0.3)",
    cursor: "pointer",
  },
};

const NotFound: React.FC = () => {
  const goHome = () => (window.location.href = "/");

  const goWorkshop = () => {
    window.location.href = "/#workshop";
  };

  return (
    <div style={s.page}>
      <nav style={s.nav}>
        <LogoFull width={160} />
        <button style={s.navBack} onClick={() => window.history.back()}>
          ← voltar
        </button>
      </nav>

      <main style={s.main}>
        <div style={s.inner}>
          <p style={s.bigNum}>404</p>
          <h1 style={s.h1}>Esse território ainda não foi mapeado.</h1>
          <p style={s.sub}>
            A página que você procura não existe ou foi movida.
          </p>
          <div style={s.btns}>
            <button style={s.btnPrimary} onClick={goHome}>
              Ir para o início
            </button>
            <button
              style={s.btnSec}
              onClick={goWorkshop}
              aria-label="Navegar para seção de Workshop"
            >
              Ver o workshop
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NotFound;
