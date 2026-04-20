import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Workshop from "./Workshop";

describe("Componente Workshop", () => {
  it("deve renderizar a seção de workshop com sucesso", () => {
    render(<Workshop />);

    // Procura o título principal. Usamos regex para ignorar case sensitive e quebras de linha
    const titulo = screen.getByRole("heading", { name: /workshop/i });
    expect(titulo).toBeInTheDocument();
  });

  it("deve exibir as informações da ementa ou metodologia", () => {
    render(<Workshop />);

    // Como a TerritorIA foca em educação, vamos garantir que o texto de suporte apareça
    // Se você tiver uma frase específica como "Mão na massa" ou "Ementa", pode trocar aqui
    const textoMetodologia =
      screen.queryByText(/ementa/i) ||
      screen.queryByText(/módulos/i) ||
      screen.queryByText(/prática/i);

    expect(textoMetodologia).toBeInTheDocument();
  });
});
