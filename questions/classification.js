const classificationQuestions = [
  {
    topic: "Classification",
    question: "What is the goal of a binary classification problem?",
    choices: [
      "Predict a real-valued quantity",
      "Assign an input to one of two possible labels",
      "Rank data points by importance",
      "Discover hidden clusters in disordered data"
    ],
    answer: "Assign an input to one of two possible labels"
  },
  {
    topic: "Classification",
    question: "A linear classification model makes decisions based on:",
    choices: [
      "Pairwise distances between points",
      "A weighted sum of features",
      "Probabilistic graphical structure",
      "Kernel similarity scores"
    ],
    answer: "A weighted sum of features"
  },
  {
    topic: "Classification",
    question: "In a linear classifier, the sign of x⊤θ determines:",
    choices: [
      "The magnitude of the error",
      "The predicted class label",
      "The learning rate",
      "The number of features"
    ],
    answer: "The predicted class label"
  },
  {
    topic: "Classification",
    question: "In logistic regression, a large positive weight θi means:",
    choices: [
      "The feature inversely correlates with the label",
      "The feature is irrelevant",
      "The feature correlates positively with the label",
      "The feature should be removed"
    ],
    answer: "The feature correlates positively with the label"
  },
  {
    topic: "Classification",
    question: "The logit in logistic regression refers to:",
    choices: [
      "The predicted class label",
      "The log-odds of the two classes",
      "The sigmoid function itself",
      "The loss function"
    ],
    answer: "The log-odds of the two classes"
  },
  {
    topic: "Classification",
    question: "In logistic regression, probabilities are obtained by:",
    choices: [
      "Normalizing squared errors",
      "Applying a sigmoid to a linear score",
      "Thresholding feature values",
      "Counting class frequencies"
    ],
    answer: "Applying a sigmoid to a linear score"
  },
  {
    topic: "Classification",
    question: "The predicted label in binary logistic regression is typically:",
    choices: [
      "The probability itself",
      "arg min of the loss",
      "The sign of x⊤θ",
      "The maximum feature value"
    ],
    answer: "The sign of x⊤θ"
  },
  {
    topic: "Classification",
    question: "Multiclass classification differs from regression mainly because:",
    choices: [
      "The data is always discrete",
      "The labels are unordered categories",
      "The features must be categorical",
      "Errors are measured identically"
    ],
    answer: "The labels are unordered categories"
  },
  {
    topic: "Classification",
    question: "In One-vs-All (OVA), how many classifiers are trained for K classes?",
    choices: [
      "1",
      "K",
      "K − 1",
      "K2"
    ],
    answer: "K"
  },
  {
    topic: "Classification",
    question: "In One-vs-All, each binary classifier is trained to distinguish:",
    choices: [
      "One class vs. one other class",
      "One class vs. all remaining classes",
      "All pairs of classes",
      "All classes simultaneously"
    ],
    answer: "One class vs. all remaining classes"
  },
  {
    topic: "Classification",
    question: "A known drawback of One-vs-All is:",
    choices: [
      "Poor scalability",
      "Difficulty with class imbalance",
      "It cannot be parallelized",
      "Each classifier may have little data"
    ],
    answer: "Difficulty with class imbalance"
  },
  {
    topic: "Classification",
    question: "In One-vs-One (OVO), how many classifiers are trained for K classes?",
    choices: [
      "K",
      "2K",
      "K(K − 1)/2",
      "K2"
    ],
    answer: "K(K − 1)/2"
  },
  {
    topic: "Classification",
    question: "A known drawback of One-vs-All is:",
    choices: [
      "Poor scalability",
      "Difficulty with class imbalance",
      "It cannot be parallelized",
      "Each classifier may have little data"
    ],
    answer: "Difficulty with class imbalance"
  },
  {
    topic: "Classification",
    question: "Multiclass logistic regression models:",
    choices: [
      "Independent binary decisions",
      "Pairwise distances between classes",
      "Class probabilities that sum to one",
      "Hierarchical class trees"
    ],
    answer: "Class probabilities that sum to one"
  },
  {
    topic: "Classification",
    question: "In multiclass logistic regression, each class k has:",
    choices: [
      "One scalar bias",
      "One probability threshold",
      "Its own weight vector θk",
      "One shared parameter"
    ],
    answer: "Its own weight vector θk"
  },
  {
    topic: "Classification",
    question: "The softmax probability for class k is proportional to:",
    choices: [
      "θ⊤kx",
      "exp(θ⊤kx)",
      "σ(θ⊤kx)",
      "∥θk∥"
    ],
    answer: "exp(θ⊤kx)"
  },
  {
    topic: "Classification",
    question: "In multiclass classification, the predicted label is:",
    choices: [
      "The class with smallest loss with respect to parameters",
      "The class with largest feature norm",
      "The class with highest predicted probability",
      "The mean class index"
    ],
    answer: "The class with highest predicted probability"
  },
  {
    topic: "Classification",
    question: "In multiclass logistic regression, a logit for class k refers to:",
    choices: [
      "The predicted probability of class k",
      "The loss associated with class k",
      "The unnormalized score θ⊤kx before softmax",
      "The margin between two classes"
    ],
    answer: "The unnormalized score θ⊤kx before softmax"
  },
  {
    topic: "Classification",
    question: "Why are logits passed through a softmax function in multiclass classification?",
    choices: [
      "To make scores linear in the features",
      "To enforce sparsity in predictions",
      "To convert arbitrary scores into probabilities",
      "To maximize the classification margin"
    ],
    answer: "To convert arbitrary scores into probabilities"
  },
  {
    topic: "Classification",
    question: "Which loss function is most commonly used to train multiclass logistic regression?",
    choices: [
      "Mean squared error",
      "Hinge loss",
      "Cross-entropy",
      "Absolute deviation"
    ],
    answer: "Cross-entropy"
  },
  {
    topic: "Classification",
    question: "Minimizing the multiclass cross-entropy loss encourages the model to:",
    choices: [
      "Increase all logits equally, to avoid numerical underflow",
      "Assign high probability to the true class and low probability to others",
      "Maximize the distance between feature vectors of similar classes",
      "Reduce the number of features"
    ],
    answer: "Assign high probability to the true class and low probability to others"
  },
  {
    topic: "Classification",
    question: "If two classes have very similar logits for an input x, the softmax output will:",
    choices: [
      "Assign probability close to 1 to one class",
      "Assign nearly equal probabilities to both classes",
      "Ignore both classes",
      "Collapse to a binary decision"
    ],
    answer: "Assign nearly equal probabilities to both classes"
  }
];

export default classificationQuestions;