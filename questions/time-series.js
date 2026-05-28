const timeSeriesQuestions = [
  {
    topic: "Time Series",
    question: "A time series is best defined as:",
    choices: [
      "A collection of independent samples.",
      "A sequence of observations indexed by time.",
      "A random vector with unordered components.",
      "A dataset with categorical features."
    ],
    answer: "A sequence of observations indexed by time."
  },
  {
    topic: "Time Series",
    question: "The main goal of time series modeling is to:",
    choices: [
      "Remove all correlations from the data.",
      "Estimate a static distribution.",
      "Forecast future values from past observations.",
      "Convert data into i.i.d. samples."
    ],
    answer: "Forecast future values from past observations."
  },
  {
    topic: "Time Series",
    question: "Why is randomly shuffling time series data usually harmful?",
    choices: [
      "It increases estimator variance.",
      "It destroys temporal structure.",
      "It violates Gaussianity.",
      "It increases bias."
    ],
    answer: "It destroys temporal structure."
  },
  {
    topic: "Time Series",
    question: "Concept drift occurs when:",
    choices: [
      "Only the noise variance changes.",
      "The joint distribution changes over time.",
      "The model order is misspecified.",
      "The data is non-Gaussian."
    ],
    answer: "The joint distribution changes over time."
  },
  {
    topic: "Time Series",
    question: "Covariate shift means:",
    choices: [
      "Pr(y|x) changes but Pr(x) is fixed.",
      "Pr(x) changes but Pr(y|x) is fixed.",
      "Both Pr(x) and Pr(y|x) change.",
      "Neither distribution changes."
    ],
    answer: "Pr(x) changes but Pr(y|x) is fixed."
  },
  {
    topic: "Time Series",
    question: "A process is weakly stationary if:",
    choices: [
      "All joint distributions are time-invariant.",
      "Mean, variance, and covariance are time-dependent.",
      "Mean, variance, and covariance structure are time-invariant.",
      "Samples are independent."
    ],
    answer: "Mean, variance, and covariance structure are time-invariant."
  },
  {
    topic: "Time Series",
    question: "Differencing is primarily used to:",
    choices: [
      "Increase sample size and reduce stationary.",
      "Remove trends and induce stationarity.",
      "Reduce noise variance.",
      "Remove seasonality only."
    ],
    answer: "Remove trends and induce stationarity."
  },
  {
    topic: "Time Series",
    question: "A key drawback of simple moving averages is:",
    choices: [
      "High variance.",
      "Model misspecification.",
      "Forecast lag.",
      "Overfitting."
    ],
    answer: "Forecast lag."
  },
  {
    topic: "Time Series",
    question: "Exponential smoothing differs from moving averages because it:",
    choices: [
      "Uses a fixed window.",
      "Weights all past points equally.",
      "Emphasizes recent observations.",
      "Assumes linear dynamics."
    ],
    answer: "Emphasizes recent observations."
  },
  {
    topic: "Time Series",
    question: "An AR(p) model predicts yt using:",
    choices: [
      "Past noise terms only.",
      "Past p observations.",
      "Future p observations.",
      "External covariates."
    ],
    answer: "Past p observations."
  },
  {
    topic: "Time Series",
    question: "The autocorrelation function (ACF) measures:",
    choices: [
      "Correlation between features.",
      "Correlation between xt and xt−∆.",
      "Variance over time.",
      "Partial correlations only."
    ],
    answer: "Correlation between xt and xt−∆."
  },
  {
    topic: "Time Series",
    question: "The PACF at lag k measures:",
    choices: [
      "Total correlation at lag k.",
      "Correlation excluding all past lags.",
      "Direct dependence after removing intermediate lags.",
      "Noise variance at lag k after removing intermediate lags."
    ],
    answer: "Direct dependence after removing intermediate lags."
  },
  {
    topic: "Time Series",
    question: "A PACF plot is mainly used to:",
    choices: [
      "Estimate noise variance.",
      "Choose AR order p.",
      "Choose MA order q.",
      "Test stationarity."
    ],
    answer: "Choose AR order p."
  },
  {
    topic: "Time Series",
    question: "The Yule–Walker equations rely on:",
    choices: [
      "Nonstationarity.",
      "Known noise variance.",
      "Autocovariance structure.",
      "Numerical optimization only."
    ],
    answer: "Autocovariance structure."
  },
  {
    topic: "Time Series",
    question: "ARMA models extend AR models by:",
    choices: [
      "Adding differencing.",
      "Modeling persistence of shocks.",
      "Including seasonality.",
      "Removing noise terms."
    ],
    answer: "Modeling persistence of shocks."
  },
  {
    topic: "Time Series",
    question: "ARIMA(p, d, q) models apply ARMA to:",
    choices: [
      "Raw data.",
      "Log-transformed data.",
      "Differenced data.",
      "Seasonal components only."
    ],
    answer: "Differenced data."
  },
  {
    topic: "Time Series",
    question: "A forgetting factor in online learning is used to:",
    choices: [
      "Increase stability.",
      "Emphasize older data.",
      "Adapt to nonstationarity.",
      "Reduce dimensionality."
    ],
    answer: "Adapt to nonstationarity."
  }
];

export default timeSeriesQuestions;