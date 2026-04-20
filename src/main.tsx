import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

async function deferRender(): Promise<unknown> {
  if (!import.meta.env.DEV) {
    return Promise.resolve();
  }

  const { worker } = await import("./mocks/browser");

  return worker.start({
    onUnhandledRequest: "bypass",
  });
}

deferRender().then(() => {
  const rootElement = document.getElementById("root");
  if (!rootElement) throw new Error("Falha ao encontrar o elemento root");

  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
});
