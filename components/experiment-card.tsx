import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

export type ExperimentCategory = "click" | "hover" | "input";

type ExperimentCardProps = {
  index: string;
  title: string;
  category: ExperimentCategory;
  slug: string;
  children: ReactNode;
  className?: string;
};

export function ExperimentCard({
  index,
  title,
  category,
  slug,
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
      <Link
        className="card-detail-link"
        href={`/experiments/${slug}`}
        aria-label={`Open ${title} detail page`}
      >
        VIEW <ArrowUpRight size={12} />
      </Link>
      <span className="card-category">{category}</span>
    </article>
  );
}
