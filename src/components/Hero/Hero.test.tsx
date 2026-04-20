import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi, describe, it, expect, beforeEach } from "vitest";
import Hero from "./Hero";

describe("Componente Hero", () => {
  beforeEach(() => {
    // Mock de API do Browser (Fronteira)
    window.HTMLElement.prototype.scrollIntoView = vi.fn();
  });

  it("deve rolar para a seção de contato ao clicar no botão primário", async () => {
    const user = userEvent.setup();

    // ARRANGE
    document.body.innerHTML = '<div id="contato"></div>';
    render(<Hero />);

    // ACT
    const btn = screen.getByRole("button", { name: /vamos conversar/i });
    await user.click(btn);

    // ASSERT
    expect(window.HTMLElement.prototype.scrollIntoView).toHaveBeenCalledWith({
      behavior: "smooth",
    });
  });
});
