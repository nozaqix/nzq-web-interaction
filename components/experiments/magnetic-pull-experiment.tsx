"use client";

import { ArrowUpRight } from "lucide-react";
import {
  AnimatePresence,
  motion,
  stagger,
  useAnimate,
  useAnimationControls,
  useMotionValue,
  useSpring,
} from "motion/react";
import { type PointerEvent, useEffect, useRef, useState } from "react";

import { ExperimentCard } from "../experiment-card";

export function MagneticPullExperiment() {
  const [stageRef, animate] = useAnimate();
  const buttonControls = useAnimationControls();
  const [isActivated, setIsActivated] = useState(false);
  const resetLabelTimerRef = useRef<ReturnType<typeof setTimeout>>(null);
  const targetX = useMotionValue(0);
  const targetY = useMotionValue(0);
  const x = useSpring(targetX, { stiffness: 125, damping: 21, mass: 0.72 });
  const y = useSpring(targetY, { stiffness: 125, damping: 21, mass: 0.72 });

  useEffect(() => {
    return () => {
      if (resetLabelTimerRef.current) {
        clearTimeout(resetLabelTimerRef.current);
      }
    };
  }, []);

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "touch") return;

    const bounds = event.currentTarget.getBoundingClientRect();
    const deltaX = event.clientX - (bounds.left + bounds.width / 2);
    const deltaY = event.clientY - (bounds.top + bounds.height / 2);
    const distance = Math.hypot(deltaX, deltaY);
    const captureRadius = Math.min(280, Math.max(bounds.width, bounds.height) * 0.62);

    if (distance > captureRadius) {
      targetX.set(0);
      targetY.set(0);
      return;
    }

    const attraction = 0.38 * (1 - distance / captureRadius * 0.22);
    const maxTravel = 82;
    targetX.set(Math.max(-maxTravel, Math.min(maxTravel, deltaX * attraction)));
    targetY.set(Math.max(-maxTravel, Math.min(maxTravel, deltaY * attraction)));
  };

  const resetPosition = () => {
    targetX.set(0);
    targetY.set(0);
  };

  const handleActivate = () => {
    setIsActivated(true);

    if (resetLabelTimerRef.current) {
      clearTimeout(resetLabelTimerRef.current);
    }

    void buttonControls.start({
      scale: [1, 0.84, 1.035, 1],
      transition: {
        duration: 0.48,
        times: [0, 0.25, 0.63, 1],
        ease: "easeInOut",
      },
    });
    void animate(
      ".magnetic-impact-ring",
      { scale: [0.84, 2.85], opacity: [0, 0.72, 0] },
      { duration: 0.64, delay: stagger(0.055), ease: [0.16, 1, 0.3, 1] },
    );
    resetLabelTimerRef.current = setTimeout(() => {
      setIsActivated(false);
    }, 320);
  };

  return (
    <ExperimentCard
      index="01"
      title="MAGNETIC PULL"
      category="hover"
      slug="magnetic-pull"
      className="magnetic-card"
    >
      <div
        ref={stageRef}
        className="magnetic-stage"
        onPointerMove={handlePointerMove}
        onPointerLeave={resetPosition}
      >
        <div className="orbit one" />
        <div className="orbit two" />
        <motion.span className="magnetic-feedback" style={{ x, y }} aria-hidden="true">
          <span className="magnetic-impact-ring" />
          <span className="magnetic-impact-ring" />
          <span className="magnetic-impact-ring" />
        </motion.span>
        <motion.div className="magnetic-button-positioner" style={{ x, y }}>
          <motion.button
            className="magnetic-button"
            animate={buttonControls}
            onClick={handleActivate}
            aria-label="Activate magnetic pull"
          >
            <span className="magnetic-label" aria-live="polite">
              <AnimatePresence initial={false}>
                <motion.span
                  key={isActivated ? "pulled" : "enter"}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.18, ease: "easeInOut" }}
                >
                  {isActivated ? "PULLED" : "ENTER"}
                </motion.span>
              </AnimatePresence>
            </span>
            <ArrowUpRight size={22} />
          </motion.button>
        </motion.div>
      </div>
      <p className="hint">MOVE TO ATTRACT · CLICK TO PULL</p>
    </ExperimentCard>
  );
}
