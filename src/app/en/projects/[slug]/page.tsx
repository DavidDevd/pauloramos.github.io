import type { Metadata } from "next";
import { notFound } from "next/navigation";

import {
  caseStudiesData,
  getCaseStudyBySlug,
  getCaseStudyNavigation,
} from "@/data/case-studies";
import { CaseStudyPage } from "@/sections/case-study-page";

type EnglishProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return caseStudiesData.cases.map((caseStudy) => ({
    slug: caseStudy.slug,
  }));
}

export async function generateMetadata({
  params,
}: EnglishProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    return {};
  }

  return {
    title: caseStudy.title,
    description: caseStudy.objective,
    alternates: {
      canonical: `/en/projects/${caseStudy.slug}`,
      languages: {
        "pt-BR": `/projects/${caseStudy.slug}`,
        "en-US": `/en/projects/${caseStudy.slug}`,
      },
    },
  };
}

export default async function EnglishProjectPage({ params }: EnglishProjectPageProps) {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    notFound();
  }

  const { previous, next } = getCaseStudyNavigation(slug);

  return <CaseStudyPage caseStudy={caseStudy} previous={previous} next={next} />;
}
