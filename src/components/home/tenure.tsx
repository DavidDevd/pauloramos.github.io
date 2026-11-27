"use client";

import { useEffect, useState } from "react";

import { formatTenure, monthsSince } from "@/lib/tenure";
import type { Locale } from "@/types";

type TenureProps = {
  start: string;
  locale: Locale;
  /** Months at build time, so the static HTML is already meaningful. */
  initialMonths: number;
};

/** Time in the role, recomputed in the visitor's browser so it never ages. */
export function Tenure({ start, locale, initialMonths }: TenureProps) {
  const [months, setMonths] = useState(initialMonths);

  useEffect(() => {
    setMonths(monthsSince(start, new Date()));
  }, [start]);

  return <>{formatTenure(months, locale)}</>;
}
