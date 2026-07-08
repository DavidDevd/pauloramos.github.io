import { Card, type CardProps } from "@/components/ui/card";
import { TechBadge } from "@/components/ui/tech-badge";
import type { Project } from "@/types";
import { cn } from "@/lib/utils";

type ProjectCardProps = CardProps & {
  project: Project;
};

export function ProjectCard({ project, className, ...props }: ProjectCardProps) {
  return (
    <Card className={cn("space-y-4", className)} {...props}>
      <div className="space-y-2">
        <p className="text-sm text-muted-foreground">{project.category}</p>
        <h3 className="font-semibold">{project.title}</h3>
        <p className="text-sm text-muted-foreground">{project.problem}</p>
      </div>
      {project.technologies.length > 0 ? (
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <TechBadge key={technology}>{technology}</TechBadge>
          ))}
        </div>
      ) : null}
    </Card>
  );
}
