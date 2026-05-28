const calibrationQuestions = [
  {
    topic: "Calibration",
    question: "A well-calibrated model means:",
    choices: [
      "High accuracy",
      "Predicted probability matches observed frequency",
      "Confident predictions",
      "Low variance"
    ],
    answer: "Predicted probability matches observed frequency"
  },
  {
    topic: "Calibration",
    question: "Brier Score formula is:",
    choices: [
      "Log loss",
      "Partial log loss",
      "(xi - yi)^2",
      "(pi - yi)^2",
      "|pi - yi|"
    ],
    answer: "(pi - yi)^2"
  },
  {
    topic: "Calibration",
    question: "Brier Score decomposition reveals:",
    choices: [
      "Train + test loss",
      "Bias + variance",
      "Calibration error + refinement",
      "Accuracy + precision"
    ],
    answer: "Calibration error + refinement"
  },
  {
    topic: "Calibration",
    question: "Perfect calibration in reliability diagram:",
    choices: [
      "y = 0.5",
      "y = x",
      "Vertical line",
      "Random scatter"
    ],
    answer: "y = x"
  },
  {
    topic: "Calibration",
    question: "Curve above diagonal y=x indicates:",
    choices: [
      "Perfect calibration",
      "Overconfidence",
      "Underconfidence",
      "Need more data"
    ],
    answer: "Overconfidence"
  },
  {
    topic: "Calibration",
    question: "A proper loss function is:",
    choices: [
      "Always positive",
      "Minimized when predicted probability equals true probability",
      "Symmetric",
      "Test-only"
    ],
    answer: "Minimized when predicted probability equals true probability"
  },
  {
    topic: "Calibration",
    question: "Why do competitions incentivize overconfidence?",
    choices: [
      "Higher accuracy",
      "More confident predictions win ties",
      "Uses Brier score",
      "Faster training"
    ],
    answer: "More confident predictions win ties"
  },
  {
    topic: "Calibration",
    question: "If proper losses replaced accuracy rewards:",
    choices: [
      "More overconfidence",
      "Encourage honest probabilities",
      "Lower accuracy",
      "Calibration impossible"
    ],
    answer: "Encourage honest probabilities"
  },
  {
    topic: "Calibration",
    question: "Why does isotonic regression overfit on small datasets?",
    choices: [
      "Too few parameters",
      "Non-parametric flexibility overfits noise",
      "Uses sigmoid",
      "Needs normalization"
    ],
    answer: "Non-parametric flexibility overfits noise"
  },
  {
    topic: "Calibration",
    question: "Which is NOT quantile mapping for calibration?",
    choices: [
      "Platt scaling",
      "Isotonic regression",
      "Temperature scaling",
      "All are examples"
    ],
    answer: "Temperature scaling"
  }
];

export default calibrationQuestions;
