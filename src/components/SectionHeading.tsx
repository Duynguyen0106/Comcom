export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-2xl">
      {eyebrow ? (
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-gold">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-3 font-display text-4xl leading-tight text-foreground sm:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-lg font-light leading-relaxed text-muted">
          {description}
        </p>
      ) : null}
    </div>
  );
}
