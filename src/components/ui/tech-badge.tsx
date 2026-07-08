import { Badge, type BadgeProps } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function TechBadge({ className, ...props }: BadgeProps) {
  return <Badge className={cn("font-mono text-[0.75rem]", className)} {...props} />;
}
