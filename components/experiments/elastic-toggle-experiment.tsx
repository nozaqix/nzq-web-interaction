"use client";

import { Sparkles } from "lucide-react";
import { useState } from "react";

import { ExperimentCard } from "../experiment-card";

export function ElasticToggleExperiment() {
  const [isActive, setIsActive] = useState(false);

  return (
    <ExperimentCard
      index="02"
      title="ELASTIC TOGGLE"
      category="click"
      className="toggle-card"
    >
      <div className="toggle-stage">
        <button
          className={`elastic-toggle ${isActive ? "on" : ""}`}
          onClick={() => setIsActive((current) => !current)}
          aria-pressed={isActive}
        >
          <span>
            <Sparkles size={18} />
          </span>
        </button>
        <strong>{isActive ? "ACTIVE" : "DORMANT"}</strong>
        <p>{isActive ? "Signal flowing smoothly" : "Waiting for a signal"}</p>
      </div>
    </ExperimentCard>
  );
}
