import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import ParaQuem from "./ParaQuem";

describe("Componente ParaQuem", () => {
  it("deve renderizar os cards de serviços para os diferentes perfis", () => {
    render(<ParaQuem />);

    // Verifica o título principal (usando RegEx para ser flexível com o span)
    expect(screen.getByText(/A consultoria serve/i)).toBeInTheDocument();
    expect(screen.getByText(/para quem:/i)).toBeInTheDocument();

    // Verifica se os títulos dos cards estão presentes
    expect(
      screen.getByRole("heading", { name: /Líderes Corporativos/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /Empreendedores Solo/i })
    ).toBeInTheDocument();

    // Verifica se a descrição dos cards foi renderizada
    expect(
      screen.getByText(/implementar IA com segurança/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/ganhar escala e produtividade/i)
    ).toBeInTheDocument();
  });
});
