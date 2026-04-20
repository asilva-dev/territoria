import { http, HttpResponse } from "msw";

export const handlers = [
  http.post("*/api/contact", async ({ request }) => {
    const newContact = (await request.json()) as {
      nome: string;
      email: string;
      mensagem: string;
    };

    console.log("MSW: Recebido novo contato:", newContact);

    return HttpResponse.json(
      { message: "Mensagem enviada com sucesso ao TerritorIA!" },
      { status: 201 }
    );
  }),
];
