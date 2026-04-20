import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Brasil, Bio } from "./BrasilBio";

describe("Seções Informativas", () => {
  it("deve renderizar a foto da consultora com alt text correto (Acessibilidade)", () => {
    // ARRANGE
    render(<Bio />);

    // ACT
    const img = screen.getByRole("img", { name: /amanda silva/i });

    // ASSERT
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", "/Mandy.jpeg");
  });

  it("deve listar as regiões de atendimento corretamente", () => {
    render(<Brasil />);

    // Verifica se o título principal está lá
    expect(screen.getByText(/Brasil além do/i)).toBeInTheDocument();

    // Verifica se algum estado da sua constante aparece na tela
    // (Pode ser mais genérico para não quebrar se mudar a constante)
    const cards = screen.getAllByText(/Presencial|Remoto/i);
    expect(cards.length).toBeGreaterThan(0);
  });
});
