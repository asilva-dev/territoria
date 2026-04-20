import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi, beforeEach } from "vitest";
import Nav from "./Nav";

describe("Componente Nav", () => {
  beforeEach(() => {
    // Moca o scrollTo que o JSDOM não possui
    window.scrollTo = vi.fn();

    // Simula o elemento alvo do scroll no DOM
    document.body.innerHTML = '<div id="sobre"></div>';
  });

  it("deve renderizar o logo e os links de navegação", () => {
    render(<Nav />);
    expect(screen.getByText(/Territor/i)).toBeInTheDocument();
    expect(screen.getByText(/IA/i)).toBeInTheDocument();
  });

  it("deve disparar o scroll ao clicar em um link de navegação", async () => {
    const user = userEvent.setup();
    render(<Nav />);

    const linkSobre = screen.getByText(/sobre/i);
    await user.click(linkSobre);

    // Aguarda o setTimeout de 300ms definido no componente Nav
    await waitFor(
      () => {
        expect(window.scrollTo).toHaveBeenCalled();
      },
      { timeout: 1000 }
    );
  });
});
