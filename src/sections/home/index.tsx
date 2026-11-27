import type { BuildInfo } from "@/lib/build-info";
import { Contact } from "@/sections/home/contact";
import { Hero } from "@/sections/home/hero";
import { Journey } from "@/sections/home/journey";
import { Principles } from "@/sections/home/principles";
import { Projects } from "@/sections/home/projects";
import { StackMatrix } from "@/sections/home/stack-matrix";
import type { Locale } from "@/types";

type HomePageProps = { locale: Locale; build: BuildInfo };

export function HomePage({ locale, build }: HomePageProps) {
  return (
    <>
      <Hero locale={locale} build={build} />
      <Projects locale={locale} />
      <Principles locale={locale} />
      <StackMatrix locale={locale} />
      <Journey locale={locale} build={build} />
      <Contact locale={locale} />
    </>
  );
}
