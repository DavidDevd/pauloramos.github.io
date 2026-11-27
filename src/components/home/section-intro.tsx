type SectionIntroProps = {
  id: string;
  title: string;
  description?: string;
};

export function SectionIntro({ id, title, description }: SectionIntroProps) {
  return (
    <div className="max-w-prose">
      <h2
        id={id}
        className="font-wide text-[clamp(1.75rem,3vw,2.375rem)] font-semibold leading-tight tracking-[-0.02em] text-fg"
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-lg leading-relaxed text-muted">{description}</p>
      ) : null}
    </div>
  );
}
