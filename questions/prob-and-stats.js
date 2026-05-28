const probabilityTheoryAndStatisticsQuestions = [
  {
    topic: "Probability Theory and Statistics",
    question: "Circle all statements that are TRUE (for arbitrary events A, B unless otherwise stated).",
    choices: [
      "0 ≤ Pr(A) ≤ 1",
      "Pr(A) > 1",
      "Pr(A) = 1 − Pr(Ac)",
      "Pr(A, B) = Pr(A|B) Pr(B)",
      "Pr(A, B) = Pr(A) Pr(B)",
      "Pr(A|B) = Pr(B|A)",
      "Pr(A ∪ B) = Pr(A) + Pr(B)",
      "Pr(A ∪ B) = Pr(A) + Pr(B) − Pr(A, B)",
      "Pr(A ∪ B) ≤ Pr(A) + Pr(B)",
      "Pr(A, B) ≤ Pr(A)",
      "Pr(A|B) = Pr(A,B) / Pr(B) (if Pr(B) > 0)",
      "Σi Pr(Ai) = 1 if {Ai} are mutually exclusive and exhaustive",
      "Pr(A) = Σi Pr(A|Bi) Pr(Bi) if {Bi} partition Ω",
      "Pr(A|B) = Pr(A)",
      "If A, B independent, then Pr(A, B) = Pr(A) Pr(B)",
      "If A, B independent, then Pr(A|B) = Pr(A)",
      "If Pr(A, B) = 0, then A and B are independent",
      "If A and B are mutually exclusive, then Pr(A, B) = 0",
      "If A, B are mutually exclusive, then Pr(A ∪ B) = Pr(A) + Pr(B)",
      "Pr(A) + Pr(Ac) = 1"
    ],
    answer: [
      "0 ≤ Pr(A) ≤ 1",
      "Pr(A) = 1 − Pr(Ac)",
      "Pr(A, B) = Pr(A|B) Pr(B)",
      "Pr(A ∪ B) = Pr(A) + Pr(B) − Pr(A, B)",
      "Pr(A ∪ B) ≤ Pr(A) + Pr(B)",
      "Pr(A, B) ≤ Pr(A)",
      "Pr(A|B) = Pr(A,B) / Pr(B) (if Pr(B) > 0)",
      "Σi Pr(Ai) = 1 if {Ai} are mutually exclusive and exhaustive",
      "Pr(A) = Σi Pr(A|Bi) Pr(Bi) if {Bi} partition Ω",
      "If A, B independent, then Pr(A, B) = Pr(A) Pr(B)",
      "If A, B independent, then Pr(A|B) = Pr(A)",
      "If A and B are mutually exclusive, then Pr(A, B) = 0",
      "If A, B are mutually exclusive, then Pr(A ∪ B) = Pr(A) + Pr(B)",
      "Pr(A) + Pr(Ac) = 1"
    ],
    multi: true
  },
  {
    topic: "Probability Theory and Statistics",
    question: "A valid p.m.f. must:",
    choices: [
      "Be differentiable",
      "Sum to 1 and be nonnegative",
      "Integrate to 1",
      "Be symmetric"
    ],
    answer: "Sum to 1 and be nonnegative"
  },
  {
    topic: "Probability Theory and Statistics",
    question: "A CDF is:",
    choices: [
      "Pr(X = x)",
      "Pr(X ≤ x)",
      "Pr(X > x)",
      "Derivative of variance"
    ],
    answer: "Pr(X ≤ x)"
  },
  {
    topic: "Probability Theory and Statistics",
    question: "The derivative of a CDF is:",
    choices: [
      "Variance",
      "p.m.f.",
      "p.d.f.",
      "Expectation"
    ],
    answer: "p.d.f."
  },
  {
    topic: "Probability Theory and Statistics",
    question: "A valid p.d.f. must:",
    choices: [
      "Sum to 1",
      "Integrate to 1",
      "Be discrete",
      "Be Gaussian"
    ],
    answer: "Integrate to 1"
  },
  {
    topic: "Probability Theory and Statistics",
    question: "If X ∼ N(µ, σ²), then E[X] =",
    choices: [
      "0",
      "σ",
      "µ",
      "σ²"
    ],
    answer: "µ"
  },
  {
    topic: "Probability Theory and Statistics",
    question: "χ²m is:",
    choices: [
      "Sum of m Gaussians",
      "Sum of squared Gaussians",
      "Ratio of Gaussians",
      "Uniform"
    ],
    answer: "Sum of squared Gaussians"
  },
  {
    topic: "Probability Theory and Statistics",
    question: "Student’s t is:",
    choices: [
      "Light-tailed",
      "Heavy-tailed",
      "Discrete",
      "Uniform"
    ],
    answer: "Heavy-tailed"
  },
  {
    topic: "Probability Theory and Statistics",
    question: "As ν → ∞, tν:",
    choices: [
      "Diverges",
      "Becomes χ²",
      "Converges to Gaussian",
      "Becomes uniform"
    ],
    answer: "Converges to Gaussian"
  },
  {
    topic: "Probability Theory and Statistics",
    question: "Empirical mean equals:",
    choices: [
      "Σxi",
      "(1/m) Σxi",
      "(1/(m−1)) Σxi",
      "Σx²i"
    ],
    answer: "(1/m) Σxi"
  },
  {
    topic: "Probability Theory and Statistics",
    question: "Empirical covariance (mean 0) is:",
    choices: [
      "Σxi",
      "(1/m) ΣxixTi",
      "Σx²i",
      "E[X]²"
    ],
    answer: "(1/m) ΣxixTi"
  },
  {
    topic: "Probability Theory and Statistics",
    question: "Expectation of discrete X:",
    choices: [
      "Σx xpX(x)",
      "∫ f(x)dx",
      "ΣpX(x)",
      "∫ xdx"
    ],
    answer: "Σx xpX(x)"
  },
  {
    topic: "Probability Theory and Statistics",
    question: "Variance equals:",
    choices: [
      "E[X]²",
      "E[(X − E[X])²]",
      "∫ f(x)dx",
      "Pr(X = µ)"
    ],
    answer: "E[(X − E[X])²]"
  },
  {
    topic: "Probability Theory and Statistics",
    question: "If A and B independent and Pr(A) = 0.5, Pr(B) = 0.2, then Pr(A, B) =",
    choices: [
      "0.7",
      "0.1",
      "0.5",
      "0.2"
    ],
    answer: "0.1"
  }
];

export default probabilityTheoryAndStatisticsQuestions;