"use client";

import { type CSSProperties, useState } from "react";

import { ExperimentCard } from "../experiment-card";

const BAR_COUNT = 32;

function calculateBarHeight(index: number, energy: number) {
  const height = 12 + (Math.sin(index * 0.78) + 1.15) * energy * 0.56;
  return Math.round(height * 1000) / 1000;
}

export function KineticRangeExperiment() {
  const [energy, setEnergy] = useState(62);
  const waveformStyle = { "--energy": `${energy}%` } as CSSProperties;

  return (
    <ExperimentCard
      index="04"
      title="KINETIC RANGE"
      category="input"
      className="range-card"
    >
      <div className="range-readout">
        <span>ENERGY</span>
        <strong>
          {energy}
          <sup>%</sup>
        </strong>
      </div>
      <div className="waveform" style={waveformStyle} aria-hidden="true">
        {Array.from({ length: BAR_COUNT }, (_, index) => (
          <i key={index} style={{ height: calculateBarHeight(index, energy) }} />
        ))}
      </div>
      <input
        className="range-input"
        type="range"
        min="0"
        max="100"
        value={energy}
        onChange={(event) => setEnergy(Number(event.target.value))}
        aria-label="Energy"
      />
    </ExperimentCard>
  );
}
