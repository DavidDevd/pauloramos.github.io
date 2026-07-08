import { MotionProvider } from "@/components/motion/motion-provider";

type ProvidersProps = {
  children: React.ReactNode;
};

export function Providers({ children }: ProvidersProps) {
  return <MotionProvider>{children}</MotionProvider>;
}
