import { Badge } from "@/components/ui/badge";
import { Heading } from "@/components/ui/heading";
import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  className?: string;
};

export function SectionHeader({ eyebrow, title, description, className }: SectionHeaderProps) {
  return (
    <div className={cn("max-w-3xl space-y-4", className)}>
      {eyebrow ? <Badge variant="subtle">{eyebrow}</Badge> : null}
      {title ? <Heading size="lg">{title}</Heading> : null}
      {description ? <p className="text-balance text-muted-foreground">{description}</p> : null}
    </div>
  );
}
