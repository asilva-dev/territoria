import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Home from "./Home";

describe("Página Home", () => {
  it("deve renderizar todas as seções principais do território", () => {
    render(<Home />);

    // Valida se os pontos de ancoragem (IDs) e títulos existem
    expect(screen.getByRole("navigation")).toBeInTheDocument();
    expect(
      screen.getByText(/Tecnologia que entende o seu/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/A consultoria serve/i)).toBeInTheDocument();
    expect(screen.getByText(/Workshop TerritorIA/i)).toBeInTheDocument();
  });

  it("deve conter a Bio da Amanda Silva na página", () => {
    render(<Home />);

    // 1. Encontramos a seção da Bio pelo papel de heading (h2)
    const bioHeading = screen.getByRole("heading", {
      name: /Amanda Silva/i,
      level: 2,
    });
    expect(bioHeading).toBeInTheDocument();

    // 2. Para a imagem, como ela é única com esse Alt, o getByAltText deve funcionar
    // Se houver mais de uma imagem com o mesmo Alt, o erro persistirá
    expect(screen.getByAltText(/Amanda Silva/i)).toBeInTheDocument();

    // 3. Se quiser garantir que existe o texto de especialista (que é único da Bio/Sobre)
    expect(
      screen.getByText(/Especialista em Front-end e IA/i)
    ).toBeInTheDocument();
  });
});
