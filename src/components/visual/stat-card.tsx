import { Card, type CardProps } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type StatCardProps = CardProps & {
  value: string;
  label: string;
  description?: string;
};

export function StatCard({ value, label, description, className, ...props }: StatCardProps) {
  return (
    <Card className={cn("space-y-2", className)} {...props}>
      <p className="text-2xl font-semibold">{value}</p>
      <h3 className="text-sm font-medium">{label}</h3>
      {description ? <p className="text-sm text-muted-foreground">{description}</p> : null}
    </Card>
  );
}
