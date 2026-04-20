import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi, describe, it, expect } from "vitest";
import Contato from "./Contato";

describe("Componente Contato", () => {
  it("deve enviar o formulário com sucesso e mostrar mensagem de agradecimento", async () => {
    const user = userEvent.setup();

    const mockFetch = vi.spyOn(window, "fetch").mockResolvedValue({
      ok: true,
    } as Response);

    render(<Contato />);

    // Agora que adicionamos id e htmlFor, o Testing Library encontra os campos pelo Label!
    await user.type(screen.getByLabelText(/nome ou empresa/i), "Amanda Silva");
    await user.type(screen.getByLabelText(/e-mail/i), "amanda@exemplo.com");
    await user.type(
      screen.getByLabelText(/mensagem/i),
      "Olá, gostaria de um workshop."
    );

    await user.click(screen.getByRole("button", { name: /enviar mensagem/i }));

    // Verifica a mensagem de sucesso
    expect(await screen.findByText(/mensagem enviada!/i)).toBeInTheDocument();
    expect(screen.getByText(/obrigada pelo contato/i)).toBeInTheDocument();

    expect(mockFetch).toHaveBeenCalledTimes(1);

    mockFetch.mockRestore();
  });
});
