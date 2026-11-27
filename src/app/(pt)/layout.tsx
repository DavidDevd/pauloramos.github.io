import { RootDocument } from "@/components/layout/root-document";

export { viewport } from "@/lib/metadata";

export default function PortugueseRootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <RootDocument locale="pt-BR">{children}</RootDocument>;
}
