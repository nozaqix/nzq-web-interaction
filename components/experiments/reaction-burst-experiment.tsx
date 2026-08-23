"use client";

import { Heart } from "lucide-react";
import { useState } from "react";

import { ExperimentCard } from "../experiment-card";

const BURST_SHAPES = ["✦", "●", "+", "♥", "✶", "·"];

export function ReactionBurstExperiment() {
  const [isLiked, setIsLiked] = useState(false);
  const [burstId, setBurstId] = useState(0);

  const toggleReaction = () => {
    setIsLiked((current) => !current);
    setBurstId((current) => current + 1);
  };

  return (
    <ExperimentCard
      index="08"
      title="REACTION BURST"
      category="click"
      slug="reaction-burst"
      className="reaction-card"
    >
      <div className="reaction-stage">
        <div
          className={`burst burst-${burstId}`}
          key={burstId}
          aria-hidden="true"
        >
          {BURST_SHAPES.map((shape, index) => (
            <i key={`${shape}-${index}`}>{shape}</i>
          ))}
        </div>
        <button
          className={isLiked ? "liked" : ""}
          onClick={toggleReaction}
          aria-pressed={isLiked}
        >
          <Heart fill={isLiked ? "currentColor" : "none"} />
        </button>
        <strong>{isLiked ? "FEELING IT" : "TAP TO REACT"}</strong>
      </div>
    </ExperimentCard>
  );
}
