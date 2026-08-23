import type { ComponentType } from "react";

import { ElasticToggleExperiment } from "./elastic-toggle-experiment";
import { KineticRangeExperiment } from "./kinetic-range-experiment";
import { LivingToastExperiment } from "./living-toast-experiment";
import { MagneticPullExperiment } from "./magnetic-pull-experiment";
import { MorphingActionExperiment } from "./morphing-action-experiment";
import { ReactionBurstExperiment } from "./reaction-burst-experiment";
import { RippleOriginExperiment } from "./ripple-origin-experiment";
import { SmartInputExperiment } from "./smart-input-experiment";
import { TinyFeedbackExperiment } from "./tiny-feedback-experiment";

type ExperimentDefinition = {
  slug: string;
  index: string;
  title: string;
  component: ComponentType;
};

export const EXPERIMENTS = [
  {
    slug: "magnetic-pull",
    index: "01",
    title: "MAGNETIC PULL",
    component: MagneticPullExperiment,
  },
  {
    slug: "elastic-toggle",
    index: "02",
    title: "ELASTIC TOGGLE",
    component: ElasticToggleExperiment,
  },
  {
    slug: "morphing-action",
    index: "03",
    title: "MORPHING ACTION",
    component: MorphingActionExperiment,
  },
  {
    slug: "kinetic-range",
    index: "04",
    title: "KINETIC RANGE",
    component: KineticRangeExperiment,
  },
  {
    slug: "ripple-origin",
    index: "05",
    title: "RIPPLE ORIGIN",
    component: RippleOriginExperiment,
  },
  {
    slug: "tiny-feedback",
    index: "06",
    title: "TINY FEEDBACK",
    component: TinyFeedbackExperiment,
  },
  {
    slug: "smart-input",
    index: "07",
    title: "SMART INPUT",
    component: SmartInputExperiment,
  },
  {
    slug: "reaction-burst",
    index: "08",
    title: "REACTION BURST",
    component: ReactionBurstExperiment,
  },
  {
    slug: "living-toast",
    index: "09",
    title: "LIVING TOAST",
    component: LivingToastExperiment,
  },
] as const satisfies ReadonlyArray<ExperimentDefinition>;

export function findExperiment(slug: string) {
  return EXPERIMENTS.find((experiment) => experiment.slug === slug);
}
