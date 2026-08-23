"use client";

import { Minus, Plus } from "lucide-react";
import { useState } from "react";

import { ExperimentCard } from "../experiment-card";

export function TinyFeedbackExperiment() {
  const [count, setCount] = useState(1);

  return (
    <ExperimentCard
      index="06"
      title="TINY FEEDBACK"
      category="click"
      slug="tiny-feedback"
      className="counter-card"
    >
      <div className="counter-controls">
        <button
          onClick={() => setCount((current) => Math.max(0, current - 1))}
          aria-label="Decrease"
        >
          <Minus />
        </button>
        <strong key={count}>{String(count).padStart(2, "0")}</strong>
        <button
          onClick={() => setCount((current) => current + 1)}
          aria-label="Increase"
        >
          <Plus />
        </button>
      </div>
      <p>EACH CLICK SHOULD FEEL INEVITABLE.</p>
    </ExperimentCard>
  );
}
