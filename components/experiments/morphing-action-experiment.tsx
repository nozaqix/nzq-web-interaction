"use client";

import { Check, Plus } from "lucide-react";
import { useEffect, useState } from "react";

import { ExperimentCard } from "../experiment-card";

type CartState = "idle" | "loading" | "done";

export function MorphingActionExperiment() {
  const [cartState, setCartState] = useState<CartState>("idle");

  useEffect(() => {
    if (cartState !== "loading") return;

    const timer = window.setTimeout(() => setCartState("done"), 720);
    return () => window.clearTimeout(timer);
  }, [cartState]);

  const handleAction = () => {
    setCartState((current) => (current === "done" ? "idle" : "loading"));
  };

  return (
    <ExperimentCard
      index="03"
      title="MORPHING ACTION"
      category="click"
      className="cart-card"
    >
      <div className="product-mini">
        <div className="product-shape">
          <span />
        </div>
        <div>
          <small>OBJECT 03</small>
          <strong>Chrome Loop</strong>
        </div>
      </div>
      <button
        className={`cart-button ${cartState}`}
        onClick={handleAction}
        disabled={cartState === "loading"}
      >
        {cartState === "idle" && (
          <>
            ADD TO COLLECTION <Plus size={18} />
          </>
        )}
        {cartState === "loading" && <span className="loader" />}
        {cartState === "done" && (
          <>
            <Check size={18} /> ADDED
          </>
        )}
      </button>
    </ExperimentCard>
  );
}
