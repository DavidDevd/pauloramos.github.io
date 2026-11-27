import type { Locale } from "@/types";

/** Whole months between an ISO year-month ("2024-09") and `now`. */
export function monthsSince(startYearMonth: string, now: Date): number {
  const match = /^(\d{4})-(\d{2})$/.exec(startYearMonth);
  if (!match) {
    throw new Error(`Invalid year-month: ${startYearMonth}`);
  }
  const startYear = Number(match[1]);
  const startMonth = Number(match[2]) - 1;
  const months =
    (now.getFullYear() - startYear) * 12 + (now.getMonth() - startMonth);
  return Math.max(0, months);
}

const units = {
  "pt-BR": {
    year: ["ano", "anos"],
    month: ["mês", "meses"],
    and: " e ",
    lessThanMonth: "menos de 1 mês",
  },
  "en-US": {
    year: ["yr", "yrs"],
    month: ["mo", "mos"],
    and: " ",
    lessThanMonth: "under 1 mo",
  },
} as const;

/** "2 anos e 2 meses" / "2 yrs 2 mos". */
export function formatTenure(totalMonths: number, locale: Locale): string {
  const unit = units[locale];
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  const parts: string[] = [];
  if (years > 0) {
    parts.push(`${years} ${unit.year[years === 1 ? 0 : 1]}`);
  }
  if (months > 0) {
    parts.push(`${months} ${unit.month[months === 1 ? 0 : 1]}`);
  }
  return parts.length ? parts.join(unit.and) : unit.lessThanMonth;
}

/** "09/2024" for display. */
export function formatYearMonth(yearMonth: string): string {
  const [year, month] = yearMonth.split("-");
  return `${month}/${year}`;
}
