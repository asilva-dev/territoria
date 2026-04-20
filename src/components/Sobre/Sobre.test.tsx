import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Sobre from "./Sobre";

describe("Componente Sobre", () => {
  it("deve exibir o título da metodologia e o nome da consultora", () => {
    render(<Sobre />);

    expect(screen.getByText(/Não é só/i)).toBeInTheDocument();
    expect(screen.getByText(/Amanda Silva/i)).toBeInTheDocument();
  });

  it("deve renderizar os pilares da metodologia", () => {
    render(<Sobre />);

    // Verifica se a estrutura de pilares (números 01, 02...) aparece
    const pilarUm = screen.getByText("01");
    expect(pilarUm).toBeInTheDocument();

    // Verifica se os títulos dos pilares estão presentes via papel semântico
    const headings = screen.getAllByRole("heading", { level: 3 });
    expect(headings.length).toBeGreaterThan(0);
  });
});
