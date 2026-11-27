import { getBuildInfo } from "@/lib/build-info";
import { homeMetadata } from "@/lib/metadata";
import { HomePage } from "@/sections/home";

export const metadata = homeMetadata("en-US");

export default function Page() {
  return <HomePage locale="en-US" build={getBuildInfo()} />;
}
