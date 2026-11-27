import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { caseStudies, getCaseStudyBySlug } from "@/data/case-studies";
import { caseMetadata } from "@/lib/metadata";
import { CaseStudyPage } from "@/sections/case-study";

type PageProps = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudies.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const caseStudy = getCaseStudyBySlug((await params).slug);
  return caseStudy ? caseMetadata(caseStudy, "pt-BR") : {};
}

export default async function Page({ params }: PageProps) {
  const caseStudy = getCaseStudyBySlug((await params).slug);
  if (!caseStudy) notFound();
  return <CaseStudyPage caseStudy={caseStudy} locale="pt-BR" />;
}
