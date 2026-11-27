import { describe, expect, it } from "vitest";

import { formatTenure, formatYearMonth, monthsSince } from "@/lib/tenure";

describe("monthsSince", () => {
  it("counts whole months from the start month", () => {
    expect(monthsSince("2024-09", new Date(2026, 10, 26))).toBe(26);
    expect(monthsSince("2024-09", new Date(2024, 8, 1))).toBe(0);
  });

  it("never returns a negative duration", () => {
    expect(monthsSince("2030-01", new Date(2026, 0, 1))).toBe(0);
  });

  it("rejects malformed input", () => {
    expect(() => monthsSince("09/2024", new Date())).toThrow();
  });
});

describe("formatTenure", () => {
  it("formats Portuguese with correct plurals", () => {
    expect(formatTenure(26, "pt-BR")).toBe("2 anos e 2 meses");
    expect(formatTenure(13, "pt-BR")).toBe("1 ano e 1 mês");
    expect(formatTenure(24, "pt-BR")).toBe("2 anos");
    expect(formatTenure(5, "pt-BR")).toBe("5 meses");
    expect(formatTenure(0, "pt-BR")).toBe("menos de 1 mês");
  });

  it("formats English compactly", () => {
    expect(formatTenure(26, "en-US")).toBe("2 yrs 2 mos");
    expect(formatTenure(12, "en-US")).toBe("1 yr");
  });
});

describe("formatYearMonth", () => {
  it("renders MM/YYYY", () => {
    expect(formatYearMonth("2024-09")).toBe("09/2024");
  });
});
