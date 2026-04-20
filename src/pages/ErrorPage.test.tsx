import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import ErrorPage from "./ErrorPage";
import { s } from "./ErrorPage.styles"; // Importamos os estilos para validar cores se quiser

describe("Componente ErrorPage (500)", () => {
  it("deve renderizar as mensagens de erro inesperado", () => {
    render(<ErrorPage />);

    expect(screen.getByText("500")).toBeInTheDocument();
    expect(screen.getByText(/O sinal saiu do território/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Algo inesperado aconteceu do nosso lado/i)
    ).toBeInTheDocument();
  });

  it("deve exibir o logo da TerritorIA", () => {
    render(<ErrorPage />);
    // Como o LogoFull é um SVG, verificamos se o container do logo existe
    // ou se há um texto/alt se você tiver configurado no componente Logo
    const nav = screen.getByRole("navigation");
    expect(nav).toBeInTheDocument();
  });

  it("deve recarregar a página ao clicar no botão 'Tentar novamente'", () => {
    // Mock da função de reload do navegador
    const reloadSpy = vi.fn();

    // No ambiente de teste (JSDOM), o window.location.reload precisa ser mockado assim:
    Object.defineProperty(window, "location", {
      configurable: true,
      value: { reload: reloadSpy },
    });

    render(<ErrorPage />);

    const button = screen.getByRole("button", { name: /tentar novamente/i });
    fireEvent.click(button);

    expect(reloadSpy).toHaveBeenCalledTimes(1);
  });

  it("deve aplicar o estilo de background correto vindo do objeto de estilos", () => {
    const { container } = render(<ErrorPage />);
    const mainDiv = container.firstChild as HTMLElement;

    // Verifica se a cor de fundo injetada no inline style bate com o que exportamos
    expect(mainDiv.style.background).toBe("rgb(253, 246, 239)"); // #fdf6ef em RGB
  });
});
