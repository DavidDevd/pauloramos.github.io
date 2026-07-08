import { heroData } from "@/data/hero";
import { HeroSection } from "@/sections/hero-section";

export function Hero() {
  return <HeroSection data={heroData} />;
}
