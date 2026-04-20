import React from "react";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ErrorPage from "./pages/ErrorPage";

// Tipagem simples para o estado de rota
type PageRoute = "home" | "notfound" | "error";

function getPage(): PageRoute {
  const path = window.location.pathname;
  if (path === "/404" || path === "/not-found") return "notfound";
  if (path === "/500" || path === "/error") return "error";
  return "home";
}

export default function App(): React.ReactElement {
  const page = getPage();

  // Renderização condicional baseada na rota
  switch (page) {
    case "notfound":
      return <NotFound />;
    case "error":
      return <ErrorPage />;
    default:
      return <Home />;
  }
}
