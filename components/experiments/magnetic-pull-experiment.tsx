"use client";

import { ArrowUpRight } from "lucide-react";
import { type MouseEvent, useRef } from "react";

import { ExperimentCard } from "../experiment-card";

export function MagneticPullExperiment() {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handlePointerMove = (event: MouseEvent<HTMLButtonElement>) => {
    const button = buttonRef.current;
    if (!button) return;

    const bounds = button.getBoundingClientRect();
    const x = (event.clientX - bounds.left - bounds.width / 2) * 0.22;
    const y = (event.clientY - bounds.top - bounds.height / 2) * 0.22;

    button.style.setProperty("--mag-x", `${x}px`);
    button.style.setProperty("--mag-y", `${y}px`);
  };

  const resetPosition = () => {
    buttonRef.current?.style.setProperty("--mag-x", "0px");
    buttonRef.current?.style.setProperty("--mag-y", "0px");
  };

  return (
    <ExperimentCard
      index="01"
      title="MAGNETIC PULL"
      category="hover"
      className="magnetic-card"
    >
      <div className="magnetic-stage">
        <div className="orbit one" />
        <div className="orbit two" />
        <button
          ref={buttonRef}
          className="magnetic-button"
          onMouseMove={handlePointerMove}
          onMouseLeave={resetPosition}
        >
          ENTER <ArrowUpRight size={22} />
        </button>
      </div>
      <p className="hint">MOVE YOUR CURSOR CLOSER</p>
    </ExperimentCard>
  );
}
