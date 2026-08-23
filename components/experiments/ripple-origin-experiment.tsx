"use client";

import { MousePointer2 } from "lucide-react";
import { type MouseEvent, useState } from "react";

import { ExperimentCard } from "../experiment-card";

type Ripple = {
  x: number;
  y: number;
  id: number;
};

const INITIAL_RIPPLE: Ripple = { x: 0, y: 0, id: 0 };

export function RippleOriginExperiment() {
  const [ripple, setRipple] = useState<Ripple>(INITIAL_RIPPLE);

  const createRipple = (event: MouseEvent<HTMLButtonElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();

    setRipple({
      x: event.clientX - bounds.left,
      y: event.clientY - bounds.top,
      id: Date.now(),
    });
  };

  return (
    <ExperimentCard
      index="05"
      title="RIPPLE ORIGIN"
      category="click"
      className="ripple-card"
    >
      <button className="ripple-button" onClick={createRipple}>
        <span
          key={ripple.id}
          className="ripple-wave"
          style={{ left: ripple.x, top: ripple.y }}
        />
        <span>PRESS ANYWHERE</span>
        <MousePointer2 size={20} />
      </button>
    </ExperimentCard>
  );
}
