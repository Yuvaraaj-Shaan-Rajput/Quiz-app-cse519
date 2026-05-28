const confidenceIntervalsQuestions = [
  {
    topic: "Confidence Intervals",
    question: "A 95% confidence interval for µ means:",
    choices: [
      "There is a 95% probability that µ lies in the interval",
      "95% of sample means lie in the interval",
      "95% of intervals constructed contain µ",
      "Interval contains 95% of population"
    ],
    answer: "95% of intervals constructed contain µ"
  },
  {
    topic: "Confidence Intervals",
    question: "As sample size n increases, a confidence interval:",
    choices: [
      "Widens",
      "Narrows",
      "Stays the same",
      "Widens if variance unknown"
    ],
    answer: "Narrows"
  },
  {
    topic: "Confidence Intervals",
    question: "The z-statistic is defined as:",
    choices: [
      "x̄ − µ",
      "(x̄ − µ)√n",
      "(x̄ − µ)/(σ/√n)",
      "σ/√n"
    ],
    answer: "(x̄ − µ)/(σ/√n)"
  },
  {
    topic: "Confidence Intervals",
    question: "Standard error for proportion is:",
    choices: [
      "p(1-p)",
      "√(p(1-p)·n)",
      "√(p(1-p)/n)",
      "p/√n"
    ],
    answer: "√(p(1-p)/n)"
  },
  {
    topic: "Confidence Intervals",
    question: "Null hypothesis represents:",
    choices: [
      "Preferred outcome",
      "Baseline or no-effect assumption",
      "Strongest effect",
      "Most likely explanation"
    ],
    answer: "Baseline or no-effect assumption"
  },
  {
    topic: "Confidence Intervals",
    question: "A p-value measures:",
    choices: [
      "Probability null is true",
      "Probability of observing data as extreme given H0",
      "Chance of Type II error",
      "Confidence level"
    ],
    answer: "Probability of observing data as extreme given H0"
  },
  {
    topic: "Confidence Intervals",
    question: "Zohran poll drop (26% → 25%, p=0.41) implies:",
    choices: [
      "Reject H0",
      "Fail to reject H0",
      "Accept H1",
      "Inconclusive due to size"
    ],
    answer: "Fail to reject H0"
  },
  {
    topic: "Confidence Intervals",
    question: "When sample size increases and p-value drops, why?",
    choices: [
      "Effect size increased",
      "Standard error decreased",
      "Null changed",
      "Threshold lowered"
    ],
    answer: "Standard error decreased"
  },
  {
    topic: "Confidence Intervals",
    question: "Why does two-sided test fail when one-sided rejects?",
    choices: [
      "Data changed",
      "Alpha split across tails",
      "Sample smaller",
      "Null stricter"
    ],
    answer: "Alpha split across tails"
  },
  {
    topic: "Confidence Intervals",
    question: "Why do two-sided tests make rejection harder?",
    choices: [
      "Need more samples",
      "More stringent critical value",
      "Lower power always",
      "Not for proportions"
    ],
    answer: "More stringent critical value"
  },
  {
    topic: "Confidence Intervals",
    question: "Type I error is:",
    choices: [
      "Fail to reject false H0",
      "Reject true H0",
      "Correct rejection",
      "Correct non-rejection"
    ],
    answer: "Reject true H0"
  },
  {
    topic: "Confidence Intervals",
    question: "Type II error is:",
    choices: [
      "Fail to reject false H0",
      "Reject true H0",
      "Correct rejection",
      "Correct non-rejection"
    ],
    answer: "Fail to reject false H0"
  },
  {
    topic: "Confidence Intervals",
    question: "Power of a test equals:",
    choices: [
      "α",
      "1 - α",
      "β",
      "1 - β"
    ],
    answer: "1 - β"
  },
  {
    topic: "Confidence Intervals",
    question: "Control group in A/B testing is:",
    choices: [
      "New design",
      "Baseline condition",
      "High engagement users",
      "Excluded users"
    ],
    answer: "Baseline condition"
  },
  {
    topic: "Confidence Intervals",
    question: "Conversion rate is:",
    choices: [
      "Total users",
      "Exposure count",
      "Fraction completing action",
      "Difference in outcomes"
    ],
    answer: "Fraction completing action"
  },
  {
    topic: "Confidence Intervals",
    question: "Pooled proportion is:",
    choices: [
      "(pA + pB)/2",
      "(xA + xB)/(nA + nB)",
      "pA * pB",
      "|xA - xB|/(nA + nB)"
    ],
    answer: "(xA + xB)/(nA + nB)"
  },
  {
    topic: "Confidence Intervals",
    question: "Variance of difference in proportions under H0:",
    choices: [
      "p(1-p)(nA+nB)",
      "p(1-p)(1/nA + 1/nB)",
      "pA(1-pA)/nA + pB(1-pB)/nB",
      "(pA - pB)^2"
    ],
    answer: "p(1-p)(1/nA + 1/nB)"
  },
  {
    topic: "Confidence Intervals",
    question: "Familywise error rate without correction:",
    choices: [
      "α",
      "α/K",
      "Up to Kα",
      "α^K"
    ],
    answer: "Up to Kα"
  },
  {
    topic: "Confidence Intervals",
    question: "Bonferroni correction threshold:",
    choices: [
      "α",
      "α*K",
      "α/K",
      "√(α/K)"
    ],
    answer: "α/K"
  },
  {
    topic: "Confidence Intervals",
    question: "Bonferroni is based on:",
    choices: [
      "CLT",
      "Union bound",
      "Bayes theorem",
      "LLN"
    ],
    answer: "Union bound"
  },
  {
    topic: "Confidence Intervals",
    question: "Repeated p-value checking does what?",
    choices: [
      "Valid",
      "Inflates Type I error",
      "Reduces power",
      "Equals SPRT"
    ],
    answer: "Inflates Type I error"
  },
  {
    topic: "Confidence Intervals",
    question: "Wald’s SPRT compares:",
    choices: [
      "Means",
      "Confidence intervals",
      "Likelihood ratio",
      "p-values"
    ],
    answer: "Likelihood ratio"
  }
];

export default confidenceIntervalsQuestions;
