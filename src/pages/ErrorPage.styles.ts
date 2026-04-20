import { CSSProperties } from "react";

// Exportamos o objeto para que o teste ou outros componentes possam ler
export const s: Record<string, CSSProperties> = {
  page: {
    background: "#fdf6ef",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
  },
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1.1rem 2.5rem",
    background: "#1a0a00",
  },
  main: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "4rem 2rem",
  },
  inner: { textAlign: "center", maxWidth: "520px" },
  bigNum: {
    fontFamily: "'Playfair Display', serif",
    fontSize: "clamp(96px, 18vw, 160px)",
    fontWeight: 900,
    color: "rgba(193,123,78,0.1)",
    marginBottom: "-2rem",
  },
  h1: {
    fontFamily: "'Playfair Display', serif",
    fontSize: "clamp(28px, 5vw, 40px)",
    fontWeight: 900,
    color: "#1a0a00",
    marginBottom: "1rem",
  },
  sub: {
    fontSize: "14px",
    color: "#7a5530",
    marginBottom: "2.5rem",
    fontFamily: "'DM Sans', sans-serif",
  },
  btnPrimary: {
    padding: "12px 28px",
    background: "#1a0a00",
    color: "#fff",
    border: "none",
    cursor: "pointer",
  },
};
