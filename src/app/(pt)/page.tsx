import { getBuildInfo } from "@/lib/build-info";
import { homeMetadata } from "@/lib/metadata";
import { HomePage } from "@/sections/home";

export const metadata = homeMetadata("pt-BR");

export default function Page() {
  return <HomePage locale="pt-BR" build={getBuildInfo()} />;
}
