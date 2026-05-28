const causalInferenceQuestions = [
  {
    topic: "Causal Inference",
    question: "A counterfactual refers to:",
    choices: [
      "An observed outcome that goes against our intuition",
      "A hypothetical alternative outcome",
      "A confounder or mediator",
      "The opposite of the opposite"
    ],
    answer: "A hypothetical alternative outcome"
  },
  {
    topic: "Causal Inference",
    question: "A DAG must be:",
    choices: [
      "Undirected",
      "Cyclic",
      "Acyclic",
      "Weighted"
    ],
    answer: "Acyclic"
  },
  {
    topic: "Causal Inference",
    question: "d-separation means:",
    choices: [
      "Every path has confounder",
      "All paths blocked by S",
      "Collider exists",
      "No directed path"
    ],
    answer: "All paths blocked by S"
  },
  {
    topic: "Causal Inference",
    question: "P(Y | X) differs from P(Y | do(X)) because:",
    choices: [
      "Conditioning equals intervention",
      "Intervention breaks dependencies",
      "Bayes rule fails",
      "Always equal"
    ],
    answer: "Intervention breaks dependencies"
  },
  {
    topic: "Causal Inference",
    question: "Why does A/B testing estimate a causal effect rather than correlation?",
    choices: [
      "Sample size ignores confounders",
      "Random assignment ensures groups are identical in expectation",
      "Measured at same time",
      "Control for all confounders"
    ],
    answer: "Random assignment ensures groups are identical in expectation"
  },
  {
    topic: "Causal Inference",
    question: "Randomization ensures:",
    choices: [
      "Zero variance",
      "Ignorability",
      "No bias ever",
      "No sampling error"
    ],
    answer: "Ignorability"
  },
  {
    topic: "Causal Inference",
    question: "Small samples in experiments lead to:",
    choices: [
      "Bias always",
      "High variance",
      "No randomness",
      "Deterministic results"
    ],
    answer: "High variance"
  },
  {
    topic: "Causal Inference",
    question: "CATE conditions on:",
    choices: [
      "Treatment only",
      "Covariates",
      "Outcome",
      "Noise"
    ],
    answer: "Covariates"
  },
  {
    topic: "Causal Inference",
    question: "ATE can be obtained from CATE by:",
    choices: [
      "Differentiation",
      "Integration over X",
      "Conditioning",
      "Randomizing again"
    ],
    answer: "Integration over X"
  },
  {
    topic: "Causal Inference",
    question: "Ignorability means:",
    choices: [
      "Treatment independent of outcomes given X",
      "No confounders anywhere",
      "Random assignment",
      "No bias in measurements"
    ],
    answer: "Treatment independent of outcomes given X"
  },
  {
    topic: "Causal Inference",
    question: "Propensity score equals:",
    choices: [
      "P(Y = 1)",
      "P(T = 1 | X)",
      "P(X | T = 1)",
      "P(Y | T)"
    ],
    answer: "P(T = 1 | X)"
  },
  {
    topic: "Causal Inference",
    question: "Observational difference E[Y|T=1] − E[Y|T=0] fails when:",
    choices: [
      "No confounders",
      "Confounding exists",
      "Randomized",
      "Large sample"
    ],
    answer: "Confounding exists"
  },
  {
    topic: "Causal Inference",
    question: "Difference between conditioning and do(X):",
    choices: [
      "Algebraic",
      "Structural removal of incoming arrows",
      "Numerical",
      "Statistical"
    ],
    answer: "Structural removal of incoming arrows"
  }
];

export default causalInferenceQuestions;
