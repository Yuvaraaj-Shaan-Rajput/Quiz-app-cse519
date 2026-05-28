const basicDataQuestions = [
  {
    topic: "Basics of Data",
    question: "What is a knowledge graph?",
    choices: [
      "A collection of unstructured text documents, such as Wikipedia articles or news pages.",
      "A table-based dataset where each row is an observation and each column is a feature.",
      "A structured representation of entities and their relationships, stored as triples (entity–relation–value), such as Wikidata",
      "A proprietary search index designed only for ranking web pages."
    ],
    answer: "A structured representation of entities and their relationships, stored as triples (entity–relation–value), such as Wikidata"
  },
  {
    topic: "Basics of Data",
    question: "Which issue is most closely related to considering alternative explanations?",
    choices: [
      "Hyperparameter tuning",
      "Confounding and sampling bias",
      "GPU memory limits",
      "Choice of optimizer"
    ],
    answer: "Confounding and sampling bias"
  },
  {
    topic: "Basics of Data",
    question: "Which is an example of categorical data?",
    choices: [
      "Temperature in Celsius",
      "Salary in dollars",
      "Occupation label",
      "Time in seconds"
    ],
    answer: "Occupation label"
  },
  {
    topic: "Basics of Data",
    question: "Which task predicts a continuous numerical value?",
    choices: [
      "Classification",
      "Clustering",
      "Regression",
      "Ranking"
    ],
    answer: "Regression"
  },
  {
    topic: "Basics of Data",
    question: "Which method is commonly used to detect outliers?",
    choices: [
      "Cross-entropy loss",
      "Z-score or IQR",
      "One-hot encoding",
      "Gradient clipping"
    ],
    answer: "Z-score or IQR"
  },
  {
    topic: "Basics of Data",
    question: "A best practice emphasized in the lecture is to:",
    choices: [
      "Modify raw data directly",
      "Keep raw data intact",
      "Skip documentation",
      "Clean after modeling"
    ],
    answer: "Keep raw data intact"
  },
  {
    topic: "Basics of Data",
    question: "Feature engineering is important primarily because:",
    choices: [
      "Models automatically find all structure",
      "Features often matter more than model complexity",
      "More features always improve accuracy",
      "Deep learning removes the need for feature engineering"
    ],
    answer: "Features often matter more than model complexity"
  },
  {
    topic: "Basics of Data",
    question: "Embedding-based features are designed to:",
    choices: [
      "Encode categories as sparse vectors",
      "Capture similarity and context in dense vectors",
      "Replace cross-validation with generalizable features",
      "Eliminate the need for labels"
    ],
    answer: "Capture similarity and context in dense vectors"
  },
  {
    topic: "Basics of Data",
    question: "Data leakage occurs when:",
    choices: [
      "The model underfits the training data",
      "Test-time information enters training",
      "Features are scaled incorrectly",
      "Cross-validation is used"
    ],
    answer: "Test-time information enters training"
  },
  {
    topic: "Basics of Data",
    question: "A hallmark of data leakage is:",
    choices: [
      "Poor training accuracy",
      "Unrealistically high validation performance",
      "Slow convergence",
      "Large confidence intervals"
    ],
    answer: "Unrealistically high validation performance"
  },
  {
    topic: "Basics of Data",
    question: "One-hot explosion is most likely when:",
    choices: [
      "Encoding binary variables",
      "Encoding low-cardinality categorical features",
      "Encoding high-cardinality categorical features",
      "Encoding numerical features"
    ],
    answer: "Encoding high-cardinality categorical features"
  },
  {
    topic: "Basics of Data",
    question: "A recommended solution to one-hot explosion is:",
    choices: [
      "Increasing model depth",
      "Randomly subsample the feature space",
      "Target encoding with cross-validation",
      "Normalizing the columns"
    ],
    answer: "Target encoding with cross-validation"
  },
  {
    topic: "Basics of Data",
    question: "The primary goal of cross-validation is to:",
    choices: [
      "Speed up training time",
      "Reduce feature dimensionality",
      "Estimate generalization performance",
      "Eliminate data leakage entirely"
    ],
    answer: "Estimate generalization performance"
  },
  {
    topic: "Basics of Data",
    question: "According to the lecture, rankings disagree mainly because:",
    choices: [
      "Data is always noisy, so metrics are always noisy",
      "Metrics reflect different priorities",
      "Aggregation is trivial",
      "Stability is guaranteed"
    ],
    answer: "Metrics reflect different priorities"
  }
];

export default basicDataQuestions