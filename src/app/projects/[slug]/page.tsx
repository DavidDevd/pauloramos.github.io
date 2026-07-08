import type { Metadata } from "next";
import { notFound } from "next/navigation";

import {
  caseStudiesData,
  getCaseStudyBySlug,
  getCaseStudyNavigation,
} from "@/data/case-studies";
import { CaseStudyPage } from "@/sections/case-study-page";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return caseStudiesData.cases.map((caseStudy) => ({
    slug: caseStudy.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    return {};
  }

  return {
    title: caseStudy.title,
    description: caseStudy.objective,
    alternates: {
      canonical: `/projects/${caseStudy.slug}`,
      languages: {
        "pt-BR": `/projects/${caseStudy.slug}`,
        "en-US": `/en/projects/${caseStudy.slug}`,
      },
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    notFound();
  }

  const { previous, next } = getCaseStudyNavigation(slug);

  return <CaseStudyPage caseStudy={caseStudy} previous={previous} next={next} />;
}
