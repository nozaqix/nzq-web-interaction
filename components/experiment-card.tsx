import type { ReactNode } from "react";

export type ExperimentCategory = "click" | "hover" | "input";

type ExperimentCardProps = {
  index: string;
  title: string;
  category: ExperimentCategory;
  children: ReactNode;
  className?: string;
};

export function ExperimentCard({
  index,
  title,
  category,
  children,
  className = "",
}: ExperimentCardProps) {
  return (
    <article
      className={`experiment-card ${className}`}
      data-category={category}
    >
      <div className="card-meta">
        <span>{index}</span>
        <span>{title}</span>
      </div>
      {children}
      <span className="card-category">{category}</span>
    </article>
  );
}
