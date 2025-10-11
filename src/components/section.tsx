import type { ReactNode } from 'react';

interface SectionProps {
  id?: string;
  title: string;
  eyebrow?: string;
  description?: string;
  children: ReactNode;
  background?: 'default' | 'muted';
}

export function Section({ id, title, eyebrow, description, children, background = 'default' }: SectionProps) {
  return (
    <section id={id} className={background === 'muted' ? 'bg-primary/5 py-16' : 'py-16'}>
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4">
        <header className="max-w-3xl space-y-4">
          {eyebrow && <p className="text-sm font-semibold uppercase tracking-wide text-primary">{eyebrow}</p>}
          <h2 className="text-3xl font-semibold text-text sm:text-4xl">{title}</h2>
          {description && <p className="text-lg text-muted">{description}</p>}
        </header>
        <div>{children}</div>
      </div>
    </section>
  );
}
