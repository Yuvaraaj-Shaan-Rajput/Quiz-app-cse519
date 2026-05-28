const decisionTreeQuestions = [
  {
    topic: "Decision Trees",
    question: "What type of problem are decision trees commonly used for?",
    choices: [
      "Only regression",
      "Only clustering",
      "Classification and regression",
      "Clustering"
    ],
    answer: "Classification and regression"
  },
  {
    topic: "Decision Trees",
    question: "In a decision tree, inference corresponds to:",
    choices: [
      "Solving an optimization problem at test time",
      "Traversing the tree from root to leaf using feature tests",
      "Averaging predictions over all nodes",
      "Computing distances to training points"
    ],
    answer: "Traversing the tree from root to leaf using feature tests"
  },
  {
    topic: "Decision Trees",
    question: "A decision tree node typically represents:",
    choices: [
      "A linear model",
      "A probabilistic mixture",
      "A test on a feature value",
      "A loss function"
    ],
    answer: "A test on a feature value"
  },
  {
    topic: "Decision Trees",
    question: "Why can decision trees handle mixed feature types well?",
    choices: [
      "They normalize all features automatically",
      "They split features independently using comparisons",
      "They require all features to be numeric",
      "They use kernels"
    ],
    answer: "They split features independently using comparisons"
  },
  {
    topic: "Decision Trees",
    question: "In growing a decision tree, the main goal of a split is to:",
    choices: [
      "Increase tree depth",
      "Reduce memory usage",
      "Improve prediction quality on the data",
      "Balance the dataset size"
    ],
    answer: "Improve prediction quality on the data"
  },
  {
    topic: "Decision Trees",
    question: "A shallow decision tree is generally:",
    choices: [
      "More expressive and flexible",
      "Easier to interpret and more likely to overfit",
      "Easier to interpret and less prone to overfitting",
      "Unable to handle categorical features"
    ],
    answer: "Easier to interpret and less prone to overfitting"
  },
  {
    topic: "Decision Trees",
    question: "A deep decision tree tends to:",
    choices: [
      "Underfit the data",
      "Have low variance",
      "Overfit the data",
      "Require fewer splits"
    ],
    answer: "Overfit the data"
  },
  {
    topic: "Decision Trees",
    question: "The greedy growing strategy builds a tree by:",
    choices: [
      "Finding the globally optimal tree structure",
      "Exhaustively searching all splits",
      "Making the locally best split at each step",
      "Randomly selecting features"
    ],
    answer: "Making the locally best split at each step"
  },
  {
    topic: "Decision Trees",
    question: "Why is finding a globally optimal decision tree difficult?",
    choices: [
      "Trees cannot represent complex functions",
      "The optimization problem is combinatorial",
      "Loss functions are undefined",
      "Gradients do not exist"
    ],
    answer: "The optimization problem is combinatorial"
  },
  {
    topic: "Decision Trees",
    question: "In regression trees, splits are commonly evaluated using:",
    choices: [
      "Cross-entropy",
      "Mean squared error",
      "Classification accuracy",
      "Hinge loss"
    ],
    answer: "Mean squared error"
  },
  {
    topic: "Decision Trees",
    question: "After a split in a regression tree, each leaf predicts:",
    choices: [
      "A class label or target value",
      "The median of class labels or target values",
      "The most likely class label or mean of targets in that region",
      "A probability distribution"
    ],
    answer: "The most likely class label or mean of targets in that region"
  },
  {
    topic: "Decision Trees",
    question: "A node choosing scheme determines:",
    choices: [
      "Which feature to split on",
      "Which leaf to split next",
      "How to compute entropy",
      "When to stop training"
    ],
    answer: "Which leaf to split next"
  },
  {
    topic: "Decision Trees",
    question: "A node splitting scheme determines:",
    choices: [
      "Which loss function to use",
      "Which node has worst loss",
      "How to select the best feature and threshold",
      "How many trees to train"
    ],
    answer: "How to select the best feature and threshold"
  },
  {
    topic: "Decision Trees",
    question: "In classification trees, a common split criterion is:",
    choices: [
      "Mean squared error",
      "Information gain",
      "Euclidean distance",
      "Margin width"
    ],
    answer: "Information gain"
  },
  {
    topic: "Decision Trees",
    question: "Entropy measures:",
    choices: [
      "Model complexity",
      "Prediction accuracy",
      "Uncertainty in class labels",
      "Distance between samples"
    ],
    answer: "Uncertainty in class labels"
  },
  {
    topic: "Decision Trees",
    question: "Entropy is highest when:",
    choices: [
      "One class dominates",
      "All classes are equally likely",
      "The dataset is large",
      "The tree is deep"
    ],
    answer: "All classes are equally likely"
  },
  {
    topic: "Decision Trees",
    question: "Information gain measures:",
    choices: [
      "Reduction in variance",
      "Reduction in entropy",
      "Increase in tree depth",
      "Number of samples per leaf"
    ],
    answer: "Reduction in entropy"
  },
  {
    topic: "Decision Trees",
    question: "A split with high information gain:",
    choices: [
      "Increases label uncertainty",
      "Produces purer child nodes",
      "Balances dataset sizes",
      "Reduces model capacity"
    ],
    answer: "Produces purer child nodes"
  },
  {
    topic: "Decision Trees",
    question: "A stopping condition for tree growth may be:",
    choices: [
      "Tree depth exceeds a limit",
      "Loss improvement is negligible",
      "Leaf size is too small",
      "All of the above"
    ],
    answer: "All of the above"
  },
  {
    topic: "Decision Trees",
    question: "Decision trees are prone to overfitting because they:",
    choices: [
      "Assume linear boundaries",
      "Can create very specific regions",
      "Require feature scaling",
      "Use probabilistic outputs"
    ],
    answer: "Can create very specific regions"
  }
];

export default decisionTreeQuestions;