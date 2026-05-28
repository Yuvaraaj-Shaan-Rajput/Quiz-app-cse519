const visionQuestions = [
  {
    topic: "Vision",
    question: "What distinguishes convolutional layers from fully connected layers?",
    choices: [
      "Larger parameter count",
      "Non-linear activations only",
      "Requires labels",
      "Weight sharing across spatial locations"
    ],
    answer: "Weight sharing across spatial locations"
  },
  {
    topic: "Vision",
    question: "Weight sharing in CNNs enables:",
    choices: [
      "Faster convergence",
      "Detect same feature anywhere",
      "Exact rotation invariance",
      "Remove bias"
    ],
    answer: "Detect same feature anywhere"
  },
  {
    topic: "Vision",
    question: "ResNet residual connections address:",
    choices: [
      "Overfitting",
      "Vanishing/exploding gradients",
      "Spatial locality",
      "Class imbalance"
    ],
    answer: "Vanishing/exploding gradients"
  },
  {
    topic: "Vision",
    question: "Why was ImageNet influential?",
    choices: [
      "Introduced unsupervised learning",
      "Large labeled dataset",
      "Removed CNNs",
      "Focused on segmentation"
    ],
    answer: "Large labeled dataset"
  },
  {
    topic: "Vision",
    question: "Grad-CAM visualizes:",
    choices: [
      "Filters",
      "Reconstruction errors",
      "Gradients over image regions",
      "Training distribution"
    ],
    answer: "Gradients over image regions"
  },
  {
    topic: "Vision",
    question: "Segmentation differs from classification because:",
    choices: [
      "Pixel-level labels",
      "Unsupervised",
      "Needs bounding boxes",
      "Structured outputs"
    ],
    answer: "Pixel-level labels"
  },
  {
    topic: "Vision",
    question: "Challenge specific to segmentation:",
    choices: [
      "Deep optimization",
      "Balancing resolution vs receptive field",
      "Too much capacity",
      "Shared representations"
    ],
    answer: "Balancing resolution vs receptive field"
  },
  {
    topic: "Vision",
    question: "Core idea of U-Net:",
    choices: [
      "Fully connected bottleneck",
      "Skip connections",
      "Adversarial training",
      "Recurrent layers"
    ],
    answer: "Skip connections"
  },
  {
    topic: "Vision",
    question: "Image embedding is:",
    choices: [
      "Pixel probability map",
      "Compressed vector representation",
      "Text description",
      "Generative output"
    ],
    answer: "Compressed vector representation"
  },
  {
    topic: "Vision",
    question: "Linear probe means:",
    choices: [
      "Train all layers",
      "Train final classifier only",
      "Contrastive loss",
      "Remove embedding"
    ],
    answer: "Train final classifier only"
  },
  {
    topic: "Vision",
    question: "Few-shot learning addresses:",
    choices: [
      "Large datasets",
      "Abundant supervision",
      "Limited labeled data",
      "Training instability"
    ],
    answer: "Limited labeled data"
  },
  {
    topic: "Vision",
    question: "Zero-shot learning requires:",
    choices: [
      "Pixel labels",
      "New labeled data",
      "External semantic info",
      "Bayesian inference"
    ],
    answer: "External semantic info"
  },
  {
    topic: "Vision",
    question: "Self-supervised learning:",
    choices: [
      "No data",
      "Synthetic labels from data",
      "Human labels",
      "Reinforcement"
    ],
    answer: "Synthetic labels from data"
  },
  {
    topic: "Vision",
    question: "Why is self-supervised attractive?",
    choices: [
      "Avoids NN",
      "Interpretability",
      "Replaces supervised",
      "Uses unlabeled data"
    ],
    answer: "Uses unlabeled data"
  },
  {
    topic: "Vision",
    question: "Inpainting trains model to:",
    choices: [
      "Predict labels",
      "Segment objects",
      "Generate captions",
      "Fill missing regions"
    ],
    answer: "Fill missing regions"
  },
  {
    topic: "Vision",
    question: "Colorization teaches:",
    choices: [
      "Exact pixels",
      "Discrete labels",
      "Camera calibration",
      "Semantic understanding"
    ],
    answer: "Semantic understanding"
  },
  {
    topic: "Vision",
    question: "Image captioning is:",
    choices: [
      "Classification",
      "Image-to-image",
      "Image-to-text generation",
      "Clustering"
    ],
    answer: "Image-to-text generation"
  },
  {
    topic: "Vision",
    question: "Captioning is multimodal because:",
    choices: [
      "Multiple cameras",
      "Vision + language",
      "Multiple datasets",
      "Multiple losses"
    ],
    answer: "Vision + language"
  },
  {
    topic: "Vision",
    question: "Image embeddings in captioning:",
    choices: [
      "Replace LM",
      "Initialize pixels",
      "Provide visual context",
      "Enforce grammar"
    ],
    answer: "Provide visual context"
  },
  {
    topic: "Vision",
    question: "Generative vs discriminative models:",
    choices: [
      "Generative predicts labels",
      "Generative models distribution",
      "Discriminative needs no data",
      "Discriminative generates"
    ],
    answer: "Generative models distribution"
  },
  {
    topic: "Vision",
    question: "Core idea of GANs:",
    choices: [
      "Likelihood optimization",
      "Adversarial training",
      "Bayesian modeling",
      "Supervised prediction"
    ],
    answer: "Adversarial training"
  },
  {
    topic: "Vision",
    question: "Mode collapse is:",
    choices: [
      "Noisy samples",
      "Ignore discriminator",
      "Limited diversity",
      "Discriminator overfits"
    ],
    answer: "Limited diversity"
  },
  {
    topic: "Vision",
    question: "Why is tabular data hard for GANs?",
    choices: [
      "No labels",
      "Mixed types + imbalance",
      "Small datasets",
      "No correlations"
    ],
    answer: "Mixed types + imbalance"
  },
  {
    topic: "Vision",
    question: "CTGAN conditional generator addresses:",
    choices: [
      "Normalization",
      "Rare categories",
      "CNN overfitting",
      "Resolution"
    ],
    answer: "Rare categories"
  },
  {
    topic: "Vision",
    question: "CTGAN log-frequency sampling:",
    choices: [
      "Uniform distributions",
      "Oversample rare categories",
      "Reduce compute",
      "Simplify eval"
    ],
    answer: "Oversample rare categories"
  },
  {
    topic: "Vision",
    question: "WGAN-GP role:",
    choices: [
      "Pixel normalization",
      "Stable training via gradients",
      "Faster convergence",
      "Discrete sampling"
    ],
    answer: "Stable training via gradients"
  },
  {
    topic: "Vision",
    question: "PacGAN reduces mode collapse by:",
    choices: [
      "Add noise",
      "Multiple samples to critic",
      "Remove discriminator",
      "KL divergence"
    ],
    answer: "Multiple samples to critic"
  },
  {
    topic: "Vision",
    question: "Gumbel-Softmax is used to:",
    choices: [
      "Sample noise",
      "Differentiable categorical sampling",
      "Reduce loss",
      "Normalize features"
    ],
    answer: "Differentiable categorical sampling"
  }
];

export default visionQuestions;
