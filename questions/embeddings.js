const embeddingQuestions = [
  {
    topic: "Embeddings",
    question: "Collaborative filtering differs from feature-based recommendation because it:",
    choices: [
      "Relies on attributes describing each item, rather than each user.",
      "Relies on patterns between similar users rather than item features.",
      "Uses labeled examples for every user–item pair.",
      "Assumes user preferences are known in advance."
    ],
    answer: "Relies on patterns between similar users rather than item features."
  },
  {
    topic: "Embeddings",
    question: "The core assumption behind collaborative filtering is that:",
    choices: [
      "User behavior is entirely random.",
      "Items must have interpretable features.",
      "Similar users prefer similar items.",
      "Ratings are uniformly distributed."
    ],
    answer: "Similar users prefer similar items."
  },
  {
    topic: "Embeddings",
    question: "In matrix factorization, the latent representation refers to:",
    choices: [
      "The observed ratings stored in the original data matrix.",
      "A low-dimensional vector assigned to each user or item.",
      "A set of hand-crafted features describing the data.",
      "The final predicted values after reconstruction."
    ],
    answer: "A low-dimensional vector assigned to each user or item."
  },
  {
    topic: "Embeddings",
    question: "The matrix factorization objective is nonconvex because:",
    choices: [
      "Multiple equivalent minima can exist, but do not form a continuous set.",
      "The loss function is discontinuous, although it is convex.",
      "The gradient is undefined at zero.",
      "The solution is unique, but is uncertain."
    ],
    answer: "Multiple equivalent minima can exist, but do not form a continuous set."
  },
  {
    topic: "Embeddings",
    question: "Word co-occurrence is useful for embeddings because it:",
    choices: [
      "Captures semantic similarity implicitly.",
      "Eliminates the need for large corpora.",
      "Guarantees interpretability of dimensions.",
      "Produces sparse representations."
    ],
    answer: "Captures semantic similarity implicitly."
  },
  {
    topic: "Embeddings",
    question: "A word embedding is best described as:",
    choices: [
      "A histogram of word frequencies across a given language.",
      "A low-dimensional vector encoding context.",
      "A sequence of one-hot encodings.",
      "A probabilistic language model."
    ],
    answer: "A low-dimensional vector encoding context."
  },
  {
    topic: "Embeddings",
    question: "PMI downweights frequent words because it:",
    choices: [
      "Penalizes high co-occurrence counts.",
      "Normalizes by marginal word frequencies.",
      "Removes rare words entirely.",
      "Applies dimensionality reduction."
    ],
    answer: "Normalizes by marginal word frequencies."
  },
  {
    topic: "Embeddings",
    question: "PPMI differs from PMI by:",
    choices: [
      "Squaring negative values.",
      "Truncating negative associations.",
      "Normalizing rows to sum to one.",
      "Adding regularization."
    ],
    answer: "Truncating negative associations."
  },
  {
    topic: "Embeddings",
    question: "Levy and Goldberg showed that many embedding methods can be viewed as:",
    choices: [
      "Kernel density estimators.",
      "Implicit matrix factorizations.",
      "Supervised classifiers.",
      "Graph partitioning algorithms."
    ],
    answer: "Implicit matrix factorizations."
  },
  {
    topic: "Embeddings",
    question: "PCA can be interpreted as:",
    choices: [
      "A clustering algorithm.",
      "A low-rank matrix approximation.",
      "A nonlinear manifold embedding method.",
      "A distance-preserving projection."
    ],
    answer: "A low-rank matrix approximation."
  },
  {
    topic: "Embeddings",
    question: "Centering data before PCA is necessary to:",
    choices: [
      "Remove noise from features.",
      "Ensure directions capture variance.",
      "Guarantee orthogonality.",
      "Improve numerical precision only."
    ],
    answer: "Ensure directions capture variance."
  },
  {
    topic: "Embeddings",
    question: "The Eckart–Young–Mirsky theorem states that truncated SVD:",
    choices: [
      "Maximizes explained variance.",
      "Preserves pairwise distances.",
      "Produces sparse components.",
      "Minimizes reconstruction error."
    ],
    answer: "Minimizes reconstruction error."
  },
  {
    topic: "Embeddings",
    question: "Random projections are useful because they:",
    choices: [
      "Learn semantic structure.",
      "Require labeled data.",
      "Optimize reconstruction loss.",
      "Approximately preserve distances."
    ],
    answer: "Approximately preserve distances."
  },
  {
    topic: "Embeddings",
    question: "The Johnson–Lindenstrauss lemma guarantees distance preservation for:",
    choices: [
      "Some random linear projections.",
      "All possible projections.",
      "Nonlinear embeddings only.",
      "Orthogonal matrices only."
    ],
    answer: "Some random linear projections."
  },
  {
    topic: "Embeddings",
    question: "kNN is well-suited for evaluating embeddings because it:",
    choices: [
      "Trains a parametric classifier.",
      "Directly uses distance information.",
      "Requires no labeled data.",
      "Optimizes a global objective."
    ],
    answer: "Directly uses distance information."
  },
  {
    topic: "Embeddings",
    question: "K-means clustering assigns points to clusters based on:",
    choices: [
      "Maximum likelihood.",
      "Graph connectivity.",
      "Nearest cluster center.",
      "Density estimation."
    ],
    answer: "Nearest cluster center."
  },
  {
    topic: "Embeddings",
    question: "The K-means objective is nonconvex because:",
    choices: [
      "The distance metric is nonlinear.",
      "Different initializations yield different solutions.",
      "Gradients do not exist for certain initializations.",
      "Centers must be integers."
    ],
    answer: "Different initializations yield different solutions."
  },
  {
    topic: "Embeddings",
    question: "Evaluating embeddings with K-means primarily tests whether:",
    choices: [
      "Distances reflect semantic similarity.",
      "Data is linearly separable.",
      "Labels are perfectly recovered.",
      "Variance is maximized."
    ],
    answer: "Distances reflect semantic similarity."
  },
  {
    topic: "Embeddings",
    question: "A good embedding is one that:",
    choices: [
      "Has coordinates that correspond to clear semantic meanings.",
      "Supports downstream tasks effectively, e.g. shows separable clusters for different labels.",
      "Uses a high-dimensional representation to preserve most of the information in the original data.",
      "Reduces noise by smoothing out small variations while retaining the dominant structure of the data."
    ],
    answer: "Supports downstream tasks effectively, e.g. shows separable clusters for different labels."
  }
];

export default embeddingQuestions;