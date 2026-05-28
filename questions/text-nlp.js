const textNLPQuestions = [
  {
    topic: "Text and NLP",
    question: "Phonemes are:",
    choices: [
      "Semantic units",
      "Minimal sound units",
      "Frequency representations",
      "Characters"
    ],
    answer: "Minimal sound units"
  },
  {
    topic: "Text and NLP",
    question: "Markov property assumes:",
    choices: [
      "All history matters",
      "Current state summarizes history",
      "Observations independent",
      "Stationary transitions"
    ],
    answer: "Current state summarizes history"
  },
  {
    topic: "Text and NLP",
    question: "In HMMs, observations are:",
    choices: [
      "Deterministic",
      "Independent given hidden states",
      "Dependent on past",
      "Identical"
    ],
    answer: "Independent given hidden states"
  },
  {
    topic: "Text and NLP",
    question: "RNN is:",
    choices: [
      "Feedforward per step",
      "Hidden state sequence model",
      "Graphical model",
      "CNN"
    ],
    answer: "Hidden state sequence model"
  },
  {
    topic: "Text and NLP",
    question: "LSTM is:",
    choices: [
      "Fixed state RNN",
      "Gated memory network",
      "Attention model",
      "Bidirectional"
    ],
    answer: "Gated memory network"
  },
  {
    topic: "Text and NLP",
    question: "Bidirectional LSTM:",
    choices: [
      "Fixed state",
      "Gated memory",
      "Attention",
      "Processes both directions"
    ],
    answer: "Processes both directions"
  },
  {
    topic: "Text and NLP",
    question: "Word embeddings useful because:",
    choices: [
      "Discrete IDs",
      "Geometric similarity",
      "No labels needed",
      "Interpretable"
    ],
    answer: "Geometric similarity"
  },
  {
    topic: "Text and NLP",
    question: "Contextual embedding example:",
    choices: [
      "Bank changes meaning by context",
      "Fish averaged",
      "Jessica fixed window",
      "Tesseract fixed"
    ],
    answer: "Bank changes meaning by context"
  },
  {
    topic: "Text and NLP",
    question: "Co-occurrence embeddings assume:",
    choices: [
      "Rare words important",
      "Similar context = similar meaning",
      "Syntax dominates",
      "Order irrelevant"
    ],
    answer: "Similar context = similar meaning"
  },
  {
    topic: "Text and NLP",
    question: "Transformer innovation:",
    choices: [
      "CNN",
      "Self-attention",
      "Sparse features",
      "Grammar"
    ],
    answer: "Self-attention"
  },
  {
    topic: "Text and NLP",
    question: "Self-attention allows:",
    choices: [
      "All tokens",
      "Neighbors only",
      "Past only",
      "Fixed window"
    ],
    answer: "All tokens"
  },
  {
    topic: "Text and NLP",
    question: "Multi-head attention improves by:",
    choices: [
      "Multiple subspaces",
      "Longer sequences",
      "Shared weights",
      "Shallow models"
    ],
    answer: "Multiple subspaces"
  },
  {
    topic: "Text and NLP",
    question: "Transformer drawback:",
    choices: [
      "Vanishing gradients",
      "Quadratic complexity",
      "No generalization",
      "Unstable"
    ],
    answer: "Quadratic complexity"
  },
  {
    topic: "Text and NLP",
    question: "Language model estimates:",
    choices: [
      "Similarity",
      "Sequence probability",
      "Syntax",
      "Topics"
    ],
    answer: "Sequence probability"
  },
  {
    topic: "Text and NLP",
    question: "Causal LM trains to:",
    choices: [
      "Masked tokens",
      "Next token",
      "Sentiment",
      "Bidirectional"
    ],
    answer: "Next token"
  },
  {
    topic: "Text and NLP",
    question: "Masked LM:",
    choices: [
      "Left-to-right",
      "Predict masked tokens",
      "RL",
      "No self-supervision"
    ],
    answer: "Predict masked tokens"
  },
  {
    topic: "Text and NLP",
    question: "Pretraining helps because:",
    choices: [
      "No task data",
      "Guaranteed optimal",
      "Learns general representations",
      "Prevents overfitting"
    ],
    answer: "Learns general representations"
  },
  {
    topic: "Text and NLP",
    question: "Fine-tuning:",
    choices: [
      "Train from scratch",
      "Freeze all",
      "Update for task",
      "Increase size"
    ],
    answer: "Update for task"
  },
  {
    topic: "Text and NLP",
    question: "Zero-shot learning:",
    choices: [
      "No data at all",
      "Synthetic data",
      "No task-specific training",
      "Remove output"
    ],
    answer: "No task-specific training"
  },
  {
    topic: "Text and NLP",
    question: "Adapters are:",
    choices: [
      "Replace layers",
      "Small trainable modules",
      "Latency only",
      "Sparse activations"
    ],
    answer: "Small trainable modules"
  },
  {
    topic: "Text and NLP",
    question: "LoRA reduces cost by:",
    choices: [
      "Fewer layers",
      "Low-rank updates",
      "Shared embeddings",
      "Quantization"
    ],
    answer: "Low-rank updates"
  }
];

export default textNLPQuestions;
