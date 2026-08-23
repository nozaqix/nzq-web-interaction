"use client";

import { Bell, X } from "lucide-react";
import { type CSSProperties, useState } from "react";

import { ExperimentCard } from "../experiment-card";

const MAX_VISIBLE_TOASTS = 3;

export function LivingToastExperiment() {
  const [toastCount, setToastCount] = useState(1);
  const visibleToastCount = Math.min(toastCount, MAX_VISIBLE_TOASTS);

  return (
    <ExperimentCard
      index="09"
      title="LIVING TOAST"
      category="click"
      className="toast-card"
    >
      <div className="toast-stack">
        {Array.from({ length: visibleToastCount }, (_, index) => (
          <div
            className="toast"
            key={`${toastCount}-${index}`}
            style={{ "--toast-index": index } as CSSProperties}
          >
            <span>
              <Bell size={17} />
            </span>
            <div>
              <strong>New signal</strong>
              <small>Just now</small>
            </div>
            <X size={15} />
          </div>
        ))}
      </div>
      <button
        className="notify-button"
        onClick={() => setToastCount((current) => current + 1)}
      >
        TRIGGER NOTIFICATION <Bell size={17} />
      </button>
    </ExperimentCard>
  );
}
