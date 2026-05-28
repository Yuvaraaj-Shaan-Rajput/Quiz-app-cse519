const dataLabelsQuestions = [
  {
    topic: "Data and Labels",
    question: "Labels are a bottleneck because:",
    choices: [
      "Hard to store",
      "Costly and time-consuming",
      "Always inconsistent",
      "Unnecessary"
    ],
    answer: "Costly and time-consuming"
  },
  {
    topic: "Data and Labels",
    question: "Poor label quality affects:",
    choices: [
      "Architecture",
      "Training time",
      "Generalization",
      "Feature dimension"
    ],
    answer: "Generalization"
  },
  {
    topic: "Data and Labels",
    question: "Semi-supervised learning combines:",
    choices: [
      "Multiple labeled datasets",
      "Few labeled + many unlabeled",
      "Synthetic only",
      "RL + supervision"
    ],
    answer: "Few labeled + many unlabeled"
  },
  {
    topic: "Data and Labels",
    question: "Label propagation relies on:",
    choices: [
      "Expert rules",
      "Graph structure",
      "Neural networks",
      "Random labels"
    ],
    answer: "Graph structure"
  },
  {
    topic: "Data and Labels",
    question: "ImageNet labels came from:",
    choices: [
      "Web scraping",
      "Experts only",
      "Crowdsourcing",
      "Self-supervised"
    ],
    answer: "Crowdsourcing"
  },
  {
    topic: "Data and Labels",
    question: "Mechanical Turk advantage:",
    choices: [
      "Perfect accuracy",
      "GPU speed",
      "Scalable annotation",
      "No bias"
    ],
    answer: "Scalable annotation"
  },
  {
    topic: "Data and Labels",
    question: "Multiple annotators help:",
    choices: [
      "Increase imbalance",
      "Reduce noise",
      "Remove aggregation",
      "Guarantee truth"
    ],
    answer: "Reduce noise"
  },
  {
    topic: "Data and Labels",
    question: "Majority voting is:",
    choices: [
      "Weak supervision",
      "Label aggregation",
      "Active learning",
      "Self-training"
    ],
    answer: "Label aggregation"
  },
  {
    topic: "Data and Labels",
    question: "Gold-standard checks:",
    choices: [
      "Speed up labeling",
      "Measure reliability",
      "Remove rare classes",
      "Generate labels"
    ],
    answer: "Measure reliability"
  },
  {
    topic: "Data and Labels",
    question: "Dawid–Skene assumes:",
    choices: [
      "Equal annotators",
      "Annotator confusion matrix",
      "Noise-free labels",
      "Linear separability"
    ],
    answer: "Annotator confusion matrix"
  },
  {
    topic: "Data and Labels",
    question: "Active learning reduces cost by:",
    choices: [
      "Smaller models",
      "Query informative points",
      "Remove humans",
      "Synthetic labels"
    ],
    answer: "Query informative points"
  },
  {
    topic: "Data and Labels",
    question: "Uncertainty sampling selects:",
    choices: [
      "High confidence",
      "Majority class",
      "Least confident",
      "Highest loss"
    ],
    answer: "Least confident"
  },
  {
    topic: "Data and Labels",
    question: "Query-by-committee relies on:",
    choices: [
      "Agreement",
      "Disagreement",
      "Human disagreement",
      "Random"
    ],
    answer: "Disagreement"
  },
  {
    topic: "Data and Labels",
    question: "Weak supervision uses:",
    choices: [
      "Heuristics/noisy sources",
      "Experts only",
      "Exact labels",
      "No aggregation"
    ],
    answer: "Heuristics/noisy sources"
  },
  {
    topic: "Data and Labels",
    question: "Reinforcement learning differs because:",
    choices: [
      "Needs labels",
      "Delayed rewards",
      "Unsupervised only",
      "No neural nets"
    ],
    answer: "Delayed rewards"
  },
  {
    topic: "Data and Labels",
    question: "RLHF reward function is:",
    choices: [
      "Hand-coded",
      "Learned from humans",
      "Fixed",
      "Removed"
    ],
    answer: "Learned from humans"
  },
  {
    topic: "Data and Labels",
    question: "PPO differs from DPO because PPO:",
    choices: [
      "Needs reward model",
      "No KL",
      "Supervised only",
      "No sampling"
    ],
    answer: "Needs reward model"
  },
  {
    topic: "Data and Labels",
    question: "DPO avoids reward model by:",
    choices: [
      "Contrastive preference loss",
      "Online sampling",
      "No human feedback",
      "Freezing params"
    ],
    answer: "Contrastive preference loss"
  },
  {
    topic: "Data and Labels",
    question: "Bayesian Network represents distribution by:",
    choices: [
      "Independence",
      "Global likelihood",
      "Factorization",
      "Embeddings"
    ],
    answer: "Factorization"
  },
  {
    topic: "Data and Labels",
    question: "Bayesian Networks can generate data because:",
    choices: [
      "Memorization",
      "Joint distribution",
      "Need labels",
      "Discriminator"
    ],
    answer: "Joint distribution"
  },
  {
    topic: "Data and Labels",
    question: "Why not used at scale:",
    choices: [
      "No uncertainty",
      "Tables scale poorly",
      "Continuous only",
      "No dependencies"
    ],
    answer: "Tables scale poorly"
  },
  {
    topic: "Data and Labels",
    question: "Simulated data useful when:",
    choices: [
      "Abundant",
      "Cheap",
      "Scarce/dangerous",
      "Perfect labels"
    ],
    answer: "Scarce/dangerous"
  },
  {
    topic: "Data and Labels",
    question: "Self-play generates labels via:",
    choices: [
      "Humans",
      "Self-competition",
      "Random",
      "Replay"
    ],
    answer: "Self-competition"
  },
  {
    topic: "Data and Labels",
    question: "Distillation trains using:",
    choices: [
      "Teacher outputs",
      "Ground truth only",
      "RL reward",
      "Human feedback"
    ],
    answer: "Teacher outputs"
  },
  {
    topic: "Data and Labels",
    question: "Soft targets are:",
    choices: [
      "Hard labels",
      "Gradients",
      "Random labels",
      "Full probability distributions"
    ],
    answer: "Full probability distributions"
  },
  {
    topic: "Data and Labels",
    question: "Benefit of distillation:",
    choices: [
      "Higher accuracy",
      "Faster/cheaper deployment",
      "No data needed",
      "No bias"
    ],
    answer: "Faster/cheaper deployment"
  },
  {
    topic: "Data and Labels",
    question: "Which of the following are examples of knowledge-distilled models or distillation frameworks?",
    choices: [
      "ResNet",
      "DistilNet",
      "PCA",
      "FitNets",
      "Word2Vec",
      "TinyNet",
      "AlexNet",
      "DeepSeek"
    ],
    answer: ["DistilNet", "FitNets", "TinyNet", "DeepSeek"],
    multi: true
  }
];

export default dataLabelsQuestions;
