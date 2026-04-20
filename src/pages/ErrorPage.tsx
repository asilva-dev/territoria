import React from "react";
import { LogoFull } from "../components/Logo/Logo";
import { s } from "./ErrorPage.styles";

const ErrorPage: React.FC = () => {
  return (
    <div style={s.page}>
      <nav style={s.nav}>
        <LogoFull width={160} />
      </nav>

      <main style={s.main}>
        <div style={s.inner}>
          <p style={s.bigNum}>500</p>
          <h1 style={s.h1}>O sinal saiu do território.</h1>
          <p style={s.sub}>
            Algo inesperado aconteceu do nosso lado. Tente novamente em
            instantes.
          </p>
          <button style={s.btnPrimary} onClick={() => window.location.reload()}>
            Tentar novamente
          </button>
        </div>
      </main>
    </div>
  );
};

export default ErrorPage;
