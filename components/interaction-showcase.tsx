"use client";

import { useState } from "react";

import { ElasticToggleExperiment } from "./experiments/elastic-toggle-experiment";
import { KineticRangeExperiment } from "./experiments/kinetic-range-experiment";
import { LivingToastExperiment } from "./experiments/living-toast-experiment";
import { MagneticPullExperiment } from "./experiments/magnetic-pull-experiment";
import { MorphingActionExperiment } from "./experiments/morphing-action-experiment";
import { ReactionBurstExperiment } from "./experiments/reaction-burst-experiment";
import { RippleOriginExperiment } from "./experiments/ripple-origin-experiment";
import { SmartInputExperiment } from "./experiments/smart-input-experiment";
import { TinyFeedbackExperiment } from "./experiments/tiny-feedback-experiment";
import type { ExperimentCategory } from "./experiment-card";

type Filter = "all" | ExperimentCategory;

const FILTERS: ReadonlyArray<{ value: Filter; label: string }> = [
  { value: "all", label: "All experiments" },
  { value: "click", label: "Click" },
  { value: "hover", label: "Hover" },
  { value: "input", label: "Input" },
];

export function InteractionShowcase() {
  const [filter, setFilter] = useState<Filter>("all");

  return (
    <main className="site-shell">
      <div className="noise" aria-hidden="true" />

      <header className="topbar">
        <a
          className="wordmark"
          href="#experiments"
          aria-label="Micro Motion experiments"
        >
          nzq<span>-web-interaction</span>
        </a>
        <div className="status">
          <i /> INTERACTION LAB <span>— 2026</span>
        </div>
        <div className="experiment-count">09 EXPERIMENTS</div>
      </header>

      <section className="filter-bar" aria-label="Experiment filters">
        <div className="filters">
          {FILTERS.map((item) => (
            <button
              key={item.value}
              className={filter === item.value ? "active" : ""}
              onClick={() => setFilter(item.value)}
            >
              {item.label}
            </button>
          ))}
        </div>
        <span className="filter-caption">FILTER BY INTERACTION</span>
      </section>

      <section className="experiments" id="experiments">
        <div className="grid" data-filter={filter}>
          <MagneticPullExperiment />
          <ElasticToggleExperiment />
          <MorphingActionExperiment />
          <KineticRangeExperiment />
          <RippleOriginExperiment />
          <TinyFeedbackExperiment />
          <SmartInputExperiment />
          <ReactionBurstExperiment />
          <LivingToastExperiment />
        </div>
      </section>
    </main>
  );
}
