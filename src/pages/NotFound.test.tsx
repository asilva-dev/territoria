import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import NotFound from "./NotFound";

describe("Componente NotFound (404)", () => {
  // Mock das funções de navegação
  const mockBack = vi.fn();

  // No ambiente de teste, precisamos mockar o window.location e window.history
  Object.defineProperty(window, "history", {
    value: { back: mockBack },
    configurable: true,
  });

  it("deve renderizar a mensagem de erro 404 e textos de apoio", () => {
    render(<NotFound />);

    expect(screen.getByText("404")).toBeInTheDocument();
    expect(
      screen.getByText(/Esse território ainda não foi mapeado/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/A página que você procura não existe/i)
    ).toBeInTheDocument();
  });

  it("deve chamar history.back() ao clicar no botão voltar", () => {
    render(<NotFound />);

    const backBtn = screen.getByText(/voltar/i);
    fireEvent.click(backBtn);

    expect(mockBack).toHaveBeenCalledTimes(1);
  });

  it("deve conter links funcionais para Início e Workshop", () => {
    // Mock do location.href
    const locationSpy = vi.spyOn(window, "location", "get").mockReturnValue({
      ...window.location,
      href: "",
    } as any);

    render(<NotFound />);

    const homeBtn = screen.getByText(/Ir para o início/i);
    fireEvent.click(homeBtn);
    expect(window.location.href).toBe("/");

    const workshopBtn = screen.getByLabelText(
      /Navegar para seção de Workshop/i
    );
    fireEvent.click(workshopBtn);
    expect(window.location.href).toBe("/#workshop");

    locationSpy.mockRestore();
  });

  it("deve aplicar a cor de fundo dark da marca", () => {
    const { container } = render(<NotFound />);
    const pageDiv = container.firstChild as HTMLElement;

    // #1a0a00 em RGB para o JSDOM
    expect(pageDiv.style.background).toBe("rgb(26, 10, 0)");
  });
});
