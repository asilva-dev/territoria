import { renderHook, act } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { useForm } from "./useForm";

describe("useForm Hook", () => {
  const initialValues = { nome: "", email: "" };

  it("deve processar o envio e gerenciar o estado de loading", async () => {
    const onSubmit = vi
      .fn()
      .mockImplementation(() => new Promise((res) => setTimeout(res, 20)));

    const { result } = renderHook(() => useForm({ initialValues, onSubmit }));

    let submission: Promise<void>;
    act(() => {
      submission = result.current.handleSubmit({
        preventDefault: vi.fn(),
      } as any);
    });

    expect(result.current.loading).toBe(true);
    await act(async () => await submission);
    expect(result.current.loading).toBe(false);
    expect(onSubmit).toHaveBeenCalledWith(initialValues);
  });
});
