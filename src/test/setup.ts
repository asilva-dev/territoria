import "@testing-library/jest-dom";
import { cleanup } from "@testing-library/react";
import { afterEach, vi } from "vitest";

/**
 *  Mock de Fronteira: APIs do Browser
 * O JSDOM não implementa APIs de layout como scrollIntoView.
 * Seguimos a prática de mockar apenas o que o ambiente não suporta[cite: 131].
 */
window.HTMLElement.prototype.scrollIntoView = vi.fn();

// Limpa o DOM e os mocks após cada teste para evitar interferências[cite: 48].
afterEach(() => {
  cleanup();
  vi.clearAllMocks();
});
