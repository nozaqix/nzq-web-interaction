"use client";

import { useState } from "react";

import type { ExperimentCategory } from "./experiment-card";
import { EXPERIMENTS } from "./experiments/experiment-registry";

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
        <div className="experiment-count">
          {String(EXPERIMENTS.length).padStart(2, "0")} EXPERIMENTS
        </div>
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
          {EXPERIMENTS.map(({ slug, component: Experiment }) => (
            <Experiment key={slug} />
          ))}
        </div>
      </section>
    </main>
  );
}
