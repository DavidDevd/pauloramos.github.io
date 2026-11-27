import { RootDocument } from "@/components/layout/root-document";

export { viewport } from "@/lib/metadata";

export default function EnglishRootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <RootDocument locale="en-US">{children}</RootDocument>;
}
