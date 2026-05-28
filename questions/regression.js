const regressionQuestions = [
  {
    topic: "Regression",
    question: "Regression is best described as:",
    choices: [
      "Modeling a relationship between inputs and a discrete output.",
      "Modeling a relationship between inputs and a continuous output.",
      "Discovering clusters in unlabeled data.",
      "Reducing dimensionality of feature vectors."
    ],
    answer: "Modeling a relationship between inputs and a continuous output."
  },
  {
    topic: "Regression",
    question: "In linear regression, the model assumes that:",
    choices: [
      "The output is a nonlinear function of the inputs.",
      "The output is a weighted sum of input features.",
      "Each feature contributes independently with equal weight.",
      "The prediction error is always zero."
    ],
    answer: "The output is a weighted sum of input features."
  },
  {
    topic: "Regression",
    question: "Linear regression corresponds to maximum likelihood estimation when the noise is:",
    choices: [
      "Uniformly distributed.",
      "Gaussian with constant variance.",
      "Bernoulli distributed.",
      "Heavy-tailed and asymmetric."
    ],
    answer: "Gaussian with constant variance."
  },
  {
    topic: "Regression",
    question: "Polynomial regression differs from linear regression because it:",
    choices: [
      "Uses a different loss function.",
      "Expands the feature space using nonlinear terms.",
      "Requires nonconvex optimization.",
      "Assumes non-Gaussian noise."
    ],
    answer: "Expands the feature space using nonlinear terms."
  },
  {
    topic: "Regression",
    question: "Despite nonlinear features, polynomial regression remains:",
    choices: [
      "Nonconvex in the parameters.",
      "Unsolvable by least squares.",
      "Linear in the learned coefficients.",
      "Independent of feature scaling."
    ],
    answer: "Linear in the learned coefficients."
  },
  {
    topic: "Regression",
    question: "Generalized linear regression refers to:",
    choices: [
      "Models with arbitrary nonlinear loss functions.",
      "Probabilistic models with categorical outputs.",
      "Linear models built on transformed feature spaces.",
      "Neural networks with a single hidden layer."
    ],
    answer: "Linear models built on transformed feature spaces."
  },
  {
    topic: "Regression",
    question: "The Random Kitchen Sinks method is based on:",
    choices: [
      "Learning basis functions via backpropagation.",
      "Using randomly chosen nonlinear features.",
      "Solving a convex optimization over kernels.",
      "Eliminating the need for regularization."
    ],
    answer: "Using randomly chosen nonlinear features."
  },
  {
    topic: "Regression",
    question: "A key motivation for Random Kitchen Sinks is:",
    choices: [
      "Improving interpretability of regression models.",
      "Approximating complex functions with random features.",
      "Reducing the dimensionality of the data.",
      "Guaranteeing exact interpolation of training data."
    ],
    answer: "Approximating complex functions with random features."
  },
  {
    topic: "Regression",
    question: "The R² statistic measures:",
    choices: [
      "The average prediction error explained by the data.",
      "The fraction of variance explained by the model.",
      "The bias of the parameter estimates.",
      "The stability of numerical optimization."
    ],
    answer: "The fraction of variance explained by the model."
  },
  {
    topic: "Regression",
    question: "A limitation of R² is that it:",
    choices: [
      "Always increases when more features are added.",
      "Cannot be computed for linear models.",
      "Penalizes models with many parameters.",
      "Requires standardized features."
    ],
    answer: "Always increases when more features are added."
  },
  {
    topic: "Regression",
    question: "Multicollinearity occurs when:",
    choices: [
      "Features are highly correlated with each other.",
      "Feature values have very different scales.",
      "The output variable has high variance.",
      "The model is under-parameterized."
    ],
    answer: "Features are highly correlated with each other."
  },
  {
    topic: "Regression",
    question: "Multicollinearity primarily affects:",
    choices: [
      "The bias of predictions.",
      "The convexity of the loss function.",
      "The variance of coefficient estimates.",
      "The interpretability of the target variable."
    ],
    answer: "The variance of coefficient estimates."
  },
  {
    topic: "Regression",
    question: "Heteroskedasticity refers to:",
    choices: [
      "Nonlinear relationships between inputs and outputs.",
      "Non-constant variance of regression errors.",
      "Correlation between input features.",
      "Incorrect specification of the model."
    ],
    answer: "Non-constant variance of regression errors."
  },
  {
    topic: "Regression",
    question: "Feature scaling is particularly important for:",
    choices: [
      "Tree-based models.",
      "Rule-based learning algorithms.",
      "Gradient-based optimization methods.",
      "Nearest-neighbor search in label space."
    ],
    answer: "Gradient-based optimization methods."
  },
  {
    topic: "Regression",
    question: "A primary goal of feature scaling is to:",
    choices: [
      "Increase the expressiveness of the model.",
      "Ensure features contribute comparably to learning.",
      "Eliminate all noise from the dataset.",
      "Improve interpretability of raw features."
    ],
    answer: "Ensure features contribute comparably to learning."
  }
];

export default regressionQuestions;