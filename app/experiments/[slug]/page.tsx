import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  EXPERIMENTS,
  findExperiment,
} from "@/components/experiments/experiment-registry";

type ExperimentPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return EXPERIMENTS.map(({ slug }) => ({ slug }));
}

export default async function ExperimentPage({ params }: ExperimentPageProps) {
  const { slug } = await params;
  const experiment = findExperiment(slug);

  if (!experiment) notFound();

  const currentIndex = EXPERIMENTS.indexOf(experiment);
  const previousExperiment =
    currentIndex > 0 ? EXPERIMENTS[currentIndex - 1] : undefined;
  const nextExperiment =
    currentIndex < EXPERIMENTS.length - 1
      ? EXPERIMENTS[currentIndex + 1]
      : undefined;
  const ExperimentComponent = experiment.component;

  return (
    <main className="detail-shell">
      <div className="noise" aria-hidden="true" />

      <header className="detail-topbar">
        <Link className="detail-back" href="/#experiments">
          <ArrowLeft size={15} />
          ALL EXPERIMENTS
        </Link>

        <div className="detail-identity">
          <span>{experiment.index}</span>
          <strong id="experiment-title">{experiment.title}</strong>
        </div>

        <nav className="detail-navigation" aria-label="Experiment navigation">
          {previousExperiment ? (
            <Link
              href={`/experiments/${previousExperiment.slug}`}
              aria-label={`Previous: ${previousExperiment.title}`}
            >
              <ArrowLeft size={15} />
            </Link>
          ) : (
            <span aria-hidden="true" />
          )}
          <span>
            {experiment.index} / {String(EXPERIMENTS.length).padStart(2, "0")}
          </span>
          {nextExperiment ? (
            <Link
              href={`/experiments/${nextExperiment.slug}`}
              aria-label={`Next: ${nextExperiment.title}`}
            >
              <ArrowRight size={15} />
            </Link>
          ) : (
            <span aria-hidden="true" />
          )}
        </nav>
      </header>

      <section className="detail-stage" aria-labelledby="experiment-title">
        <ExperimentComponent />
      </section>
    </main>
  );
}
