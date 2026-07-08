import { Card, type CardProps } from "@/components/ui/card";
import { TechBadge } from "@/components/ui/tech-badge";
import type { TechCategory } from "@/types";
import { cn } from "@/lib/utils";

type TechCardProps = CardProps & {
  category: TechCategory;
};

export function TechCard({ category, className, ...props }: TechCardProps) {
  return (
    <Card className={cn("space-y-4", className)} {...props}>
      <div className="space-y-2">
        <h3 className="font-semibold">{category.name}</h3>
        <p className="text-sm text-muted-foreground">{category.description}</p>
      </div>
      {category.items.length > 0 ? (
        <div className="flex flex-wrap gap-2">
          {category.items.map((item) => (
            <TechBadge key={item.name}>{item.name}</TechBadge>
          ))}
        </div>
      ) : null}
    </Card>
  );
}
