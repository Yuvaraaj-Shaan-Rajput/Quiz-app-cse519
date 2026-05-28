const tabularDataQuestions = [
  {
    topic: "Tabular Data",
    question: "In tabular data, a single row most commonly represents:",
    choices: [
      "A feature",
      "An entity or observation",
      "A transformation",
      "A model parameter"
    ],
    answer: "An entity or observation"
  },
  {
    topic: "Tabular Data",
    question: "The “grain” of a dataset refers to:",
    choices: [
      "The number of columns",
      "The level of aggregation of rows",
      "The variance of features",
      "The file format"
    ],
    answer: "The level of aggregation of rows"
  },
  {
    topic: "Tabular Data",
    question: "Which data type has a meaningful order but not meaningful distances?",
    choices: [
      "Numeric",
      "Categorical",
      "Ordinal",
      "Boolean"
    ],
    answer: "Ordinal"
  },
  {
    topic: "Tabular Data",
    question: "One-hot encoding is most appropriate for:",
    choices: [
      "Continuous numeric features",
      "Ordinal variables",
      "Nominal categorical variables",
      "Boolean variables"
    ],
    answer: "Nominal categorical variables"
  },
  {
    topic: "Tabular Data",
    question: "Scaling numeric features is most important for:",
    choices: [
      "Tree-based models",
      "Distance-based or linear models",
      "Rule-based systems",
      "Ensemble voting"
    ],
    answer: "Distance-based or linear models"
  },
  {
    topic: "Tabular Data",
    question: "Metadata is best described as:",
    choices: [
      "Raw measurements, like logs or signal traces",
      "Labels for supervised learning",
      "Data describing how to interpret a dataset",
      "A compressed data format"
    ],
    answer: "Data describing how to interpret a dataset"
  },
  {
    topic: "Tabular Data",
    question: "Which of the following is an example of metadata?",
    choices: [
      "Income values",
      "Song popularity scores",
      "Units of measurement",
      "Feature correlations"
    ],
    answer: "Units of measurement"
  },
  {
    topic: "Tabular Data",
    question: "JSON differs from CSV primarily because JSON:",
    choices: [
      "Is binary",
      "Supports nested structure",
      "Is faster to load",
      "Requires a database"
    ],
    answer: "Supports nested structure"
  },
  {
    topic: "Tabular Data",
    question: "Why should pandas generally not be used in production systems?",
    choices: [
      "It focuses on interactive analysis rather than deployment-oriented system design.",
      "It is optimized for exploratory workflows rather than scalable production execution.",
      "It prioritizes convenience over guarantees needed in production environments.",
      "It emphasizes flexibility instead of robustness for live service workloads."
    ],
    answer: [
      "It focuses on interactive analysis rather than deployment-oriented system design.",
      "It is optimized for exploratory workflows rather than scalable production execution.",
      "It prioritizes convenience over guarantees needed in production environments.",
      "It emphasizes flexibility instead of robustness for live service workloads."
    ],
    multi: true
  },
  {
    topic: "Tabular Data",
    question: "A “tidy” tabular dataset has:",
    choices: [
      "Multiple variables per column and multiple observations per row",
      "One variable per column and one observation per row",
      "Nested rows and tree-like structure",
      "Mixed entity types per row"
    ],
    answer: "One variable per column and one observation per row"
  },
  {
    topic: "Tabular Data",
    question: "What is data leakage in a machine learning pipeline?",
    choices: [
      "When training data is corrupted by random noise, while test data remains intact.",
      "When information unavailable at prediction time influences training.",
      "When labels are missing for part of the training dataset.",
      "When a model memorizes the training examples and cannot generalize to new examples."
    ],
    answer: "When information unavailable at prediction time influences training."
  },
  {
    topic: "Tabular Data",
    question: "How can poor tabular data practices lead to data leakage?",
    choices: [
      "By splitting information from the same entity across multiple rows or time indices.",
      "By encoding categorical variables using one-hot representations, which can spill across columns.",
      "By rescaling numeric features using global statistics.",
      "By having uneven class proportions across the dataset."
    ],
    answer: [
      "By splitting information from the same entity across multiple rows or time indices.",
      "By rescaling numeric features using global statistics."
    ],
    multi: true
  },
  {
    topic: "Tabular Data",
    question: "Dropping rows with missing values is safest when:",
    choices: [
      "Missingness is systematic and deliberate",
      "Missingness is rare and random",
      "The dataset is small",
      "Using tree models"
    ],
    answer: "Missingness is rare and random"
  },
  {
    topic: "Tabular Data",
    question: "Mean or median imputation is most appropriate when:",
    choices: [
      "Missingness is highly structured",
      "The feature distribution is highly skewed",
      "A simple baseline is acceptable",
      "Using SHAP values"
    ],
    answer: "A simple baseline is acceptable"
  },
  {
    topic: "Tabular Data",
    question: "Tree-based models handle missing values by:",
    choices: [
      "Dropping affected rows",
      "Imputing global means",
      "Learning splits for missing values",
      "Ignoring those missing features"
    ],
    answer: "Learning splits for missing values"
  },
  {
    topic: "Tabular Data",
    question: "Tree-based feature importance measures:",
    choices: [
      "Correlation with labels",
      "Reduction in impurity",
      "Gradient magnitude",
      "Mutual information only"
    ],
    answer: "Reduction in impurity"
  },
  {
    topic: "Tabular Data",
    question: "A known bias of tree-based feature importance is toward:",
    choices: [
      "Features with very few distinct values",
      "Features that take only two binary values",
      "Features with many distinct or continuous values",
      "Features that represent categorical states"
    ],
    answer: "Features with many distinct or continuous values"
  },
  {
    topic: "Tabular Data",
    question: "Feature importance from logistic regression and decision trees may disagree because they:",
    choices: [
      "Optimize different loss functions while modeling the same functional relationships.",
      "Emphasize different functional forms such as smooth linear trends versus sharp thresholds.",
      "Are typically trained on different subsets of the available data.",
      "Require incompatible representations for categorical variables."
    ],
    answer: "Emphasize different functional forms such as smooth linear trends versus sharp thresholds."
  },
  {
    topic: "Tabular Data",
    question: "Logistic regression tends to emphasize:",
    choices: [
      "Rare but decisive thresholds",
      "Local nonlinear effects",
      "Small but consistent global trends",
      "Feature interactions automatically"
    ],
    answer: "Small but consistent global trends"
  },
  {
    topic: "Tabular Data",
    question: "Decision trees tend to emphasize:",
    choices: [
      "Additive linear trends",
      "High-gain split points",
      "Weak global effects",
      "Feature normalization"
    ],
    answer: "High-gain split points"
  },
  {
    topic: "Tabular Data",
    question: "Permutation importance measures:",
    choices: [
      "Model weights after permuting samples",
      "Change in loss after permuting features",
      "Correlation coefficients after permuting features",
      "Gradient norms after permuting parameters"
    ],
    answer: "Change in loss after permuting features"
  },
  {
    topic: "Tabular Data",
    question: "SHAP values are based on:",
    choices: [
      "Optimization theory",
      "Cooperative game theory",
      "Bayesian inference",
      "Graph theory"
    ],
    answer: "Cooperative game theory"
  },
  {
    topic: "Tabular Data",
    question: "A SHAP value represents:",
    choices: [
      "The statistical association between a feature and the target.",
      "The learned coefficient assigned to a feature by a model.",
      "The marginal contribution of a feature to a specific prediction.",
      "The residual error remaining after a model’s prediction."
    ],
    answer: "The marginal contribution of a feature to a specific prediction."
  },
  {
    topic: "Tabular Data",
    question: "Exact SHAP computation is expensive because it considers:",
    choices: [
      "All permutations of samples",
      "All subsets of features",
      "All decision paths",
      "All bootstrap samples"
    ],
    answer: "All subsets of features"
  },
  {
    topic: "Tabular Data",
    question: "Mean Squared Error penalizes:",
    choices: [
      "All errors equally",
      "Large errors more heavily",
      "Only positive errors",
      "Outliers less"
    ],
    answer: "Large errors more heavily"
  },
  {
    topic: "Tabular Data",
    question: "RMSE is often preferred over MSE because:",
    choices: [
      "It is dimensionless",
      "It has the same units as the target",
      "It is more robust to outliers",
      "It is linear with respect to parameters"
    ],
    answer: "It has the same units as the target"
  },
  {
    topic: "Tabular Data",
    question: "Precision measures:",
    choices: [
      "How many positives were found",
      "How many predicted positives are correct",
      "How many negatives were missed",
      "How many predicted negatives are correct"
    ],
    answer: "How many predicted positives are correct"
  },
  {
    topic: "Tabular Data",
    question: "Precision measures:",
    choices: [
      "How many positives were found",
      "How many predicted positives are correct",
      "How many negatives were missed",
      "How many predicted negatives are correct"
    ],
    answer: "How many predicted positives are correct"
  },
  {
    topic: "Tabular Data",
    question: "The F1 score balances:",
    choices: [
      "Accuracy and recall",
      "Precision and recall",
      "Bias and variance",
      "Loss and entropy"
    ],
    answer: "Precision and recall"
  },
  {
    topic: "Tabular Data",
    question: "A Random Forest is an ensemble of:",
    choices: [
      "Linear models",
      "Decision trees",
      "Gaussian mixture models",
      "Neural networks"
    ],
    answer: "Decision trees"
  },
  {
    topic: "Tabular Data",
    question: "Random Forests reduce variance mainly by:",
    choices: [
      "Feature scaling across outliers",
      "Bagging and random feature selection",
      "Gradient descent",
      "Regularization penalties"
    ],
    answer: "Bagging and random feature selection"
  },
  {
    topic: "Tabular Data",
    question: "Gradient boosting differs from Random Forests because trees are:",
    choices: [
      "Independent",
      "Trained in parallel on residuals",
      "Trained sequentially on residuals",
      "Unweighted"
    ],
    answer: "Trained sequentially on residuals"
  },
  {
    topic: "Tabular Data",
    question: "XGBoost is best described as:",
    choices: [
      "A neural network optimized for tabular datasets.",
      "A regularized gradient boosting framework for decision trees.",
      "A random forest variant using weighted voting.",
      "A linear model trained with second-order optimization."
    ],
    answer: "A regularized gradient boosting framework for decision trees."
  },
  {
    topic: "Tabular Data",
    question: "Which of the following are advantages of XGBoost over traditional gradient-boosted trees?",
    choices: [
      "Uses second-order gradient information to guide tree splits.",
      "Includes explicit regularization to control model complexity.",
      "Supports efficient handling of missing feature values.",
      "Implements parallelization during tree construction.",
      "Incorporates shrinkage and subsampling for improved generalization.",
      "Uses stochastic updates to ensure scalability.",
      "Eliminates the need for feature preprocessing entirely.",
      "Automatically selects the best loss function for any task.",
      "Removes sensitivity to hyperparameter choices.",
      "Ensures improved calibration of predicted probabilities."
    ],
    answer: [
      "Uses second-order gradient information to guide tree splits.",
      "Includes explicit regularization to control model complexity.",
      "Supports efficient handling of missing feature values.",
      "Implements parallelization during tree construction.",
      "Incorporates shrinkage and subsampling for improved generalization."
    ],
    multi: true
  }
];

export default tabularDataQuestions;