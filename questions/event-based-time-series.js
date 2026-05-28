const eventBasedTimeSeriesQuestions = [
  {
    topic: "Event Based Time Series",
    question: "Changepoint detection is primarily used to:",
    choices: [
      "Predict future values of a time series.",
      "Identify times when the data process changes.",
      "Remove noise from a changing signal.",
      "Enforce stationarity globally."
    ],
    answer: "Identify times when the data process changes."
  },
  {
    topic: "Event Based Time Series",
    question: "In forecasting, changepoint detection is useful because:",
    choices: [
      "It guarantees lower variance predictions after certain stages.",
      "It allows models to reset or retrain after structural changes.",
      "It removes the need for historical data.",
      "It enforces linearity."
    ],
    answer: "It allows models to reset or retrain after structural changes."
  },
  {
    topic: "Event Based Time Series",
    question: "Which of the following is an example of an event that may cause a changepoint?",
    choices: [
      "Random noise fluctuations, such as sensor jitter.",
      "A fixed seasonal pattern, such as annual demand cycles.",
      "A market shock, such as COVID-19.",
      "Measurement rounding error, such as discretized price quotes."
    ],
    answer: "A market shock, such as COVID-19."
  },
  {
    topic: "Event Based Time Series",
    question: "Changepoint detection relaxes the stationarity assumption by assuming:",
    choices: [
      "The process is stationary everywhere.",
      "Stationarity holds only between changepoints.",
      "The data is i.i.d. between changepoints",
      "The noise variance is zero everywhere."
    ],
    answer: "Stationarity holds only between changepoints."
  },
  {
    topic: "Event Based Time Series",
    question: "CUSUM detects changepoints by:",
    choices: [
      "Fitting a global regression model over data.",
      "Accumulating deviations from a baseline mean.",
      "Comparing all pairs of segments.",
      "Tracking seasonal components."
    ],
    answer: "Accumulating deviations from a baseline mean."
  },
  {
    topic: "Event Based Time Series",
    question: "The CUSUM statistic increases when:",
    choices: [
      "Deviations cancel out over time.",
      "Small deviations persist in the same direction.",
      "Noise variance decreases over time.",
      "The threshold is reduced."
    ],
    answer: "Small deviations persist in the same direction."
  },
  {
    topic: "Event Based Time Series",
    question: "A key advantage of CUSUM is that it:",
    choices: [
      "Requires storing the full time series.",
      "Is computationally expensive.",
      "Uses low memory and low computation.",
      "Requires knowing the post-change mean."
    ],
    answer: "Uses low memory and low computation."
  },
  {
    topic: "Event Based Time Series",
    question: "Page–Hinkley differs from CUSUM by:",
    choices: [
      "Accumulating deviations from the mean forever.",
      "Comparing current behavior to the best behavior so far.",
      "Assuming a fixed baseline mean.",
      "Ignoring cumulative effects."
    ],
    answer: "Comparing current behavior to the best behavior so far."
  },
  {
    topic: "Event Based Time Series",
    question: "The Page–Hinkley test is designed to:",
    choices: [
      "React to single noisy spikes.",
      "Detect sustained degradation in behavior.",
      "Estimate future trends over long periods.",
      "Remove seasonality."
    ],
    answer: "Detect sustained degradation in behavior."
  },
  {
    topic: "Event Based Time Series",
    question: "PELT is best described as:",
    choices: [
      "A purely online detection method.",
      "A greedy heuristic.",
      "A global optimization approach.",
      "A smoothing technique."
    ],
    answer: "A global optimization approach."
  },
  {
    topic: "Event Based Time Series",
    question: "The PELT objective balances:",
    choices: [
      "Bias and variance in training data.",
      "Fit quality and changepoint complexity.",
      "Noise and signal.",
      "Memory and computation."
    ],
    answer: "Fit quality and changepoint complexity."
  },
  {
    topic: "Event Based Time Series",
    question: "PELT differs from CUSUM and Page–Hinkley because it:",
    choices: [
      "Operates only in an online, streaming manner.",
      "Relies primarily on cumulative sum statistics.",
      "Searches for a globally optimal set of changepoints.",
      "Ignores the quality of fit within segments."
    ],
    answer: "Searches for a globally optimal set of changepoints."
  },
  {
    topic: "Event Based Time Series",
    question: "In ML systems, changepoint detection is often used to:",
    choices: [
      "Improve test accuracy.",
      "Detect data or model drift.",
      "Reduce model size.",
      "Enforce convexity."
    ],
    answer: "Detect data or model drift."
  }
];

export default eventBasedTimeSeriesQuestions;