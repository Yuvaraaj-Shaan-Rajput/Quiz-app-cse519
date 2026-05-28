const geospatialQuestions = [
  {
    topic: "Geospatial",
    question: "Which of the following are examples of geospatial data?",
    choices: [
      "A table of house prices indexed by latitude and longitude.",
      "A dataset of restaurant reviews without any location information.",
      "Air quality sensor readings recorded at fixed monitoring stations.",
      "Daily stock prices indexed only by time.",
      "Census income statistics aggregated by ZIP code.",
      "A list of movie ratings with user IDs.",
      "Crime incidents recorded with street addresses.",
      "Word embeddings trained from text documents."
    ],
    answer: [
      "A table of house prices indexed by latitude and longitude.",
      "Air quality sensor readings recorded at fixed monitoring stations.",
      "Census income statistics aggregated by ZIP code.",
      "Crime incidents recorded with street addresses."
    ],
    multi: true
  },
  {
    topic: "Geospatial",
    question: "Why does geography often reveal structure hidden in tabular data?",
    choices: [
      "Spatial data is always higher dimensional.",
      "Location encodes context and constraints.",
      "Coordinates remove noise automatically.",
      "Maps eliminate confounding variables."
    ],
    answer: "Location encodes context and constraints."
  },
  {
    topic: "Geospatial",
    question: "OpenStreetMap is primarily used to obtain:",
    choices: [
      "Labeled training datasets containing zip codes.",
      "Satellite imagery of rivers and fields.",
      "Geographic features and infrastructure.",
      "Economic indicators."
    ],
    answer: "Geographic features and infrastructure."
  },
  {
    topic: "Geospatial",
    question: "Clustering is best described as:",
    choices: [
      "Supervised classification of locations.",
      "Label assignment based on known categories.",
      "Grouping based on similarity.",
      "Dimensionality reduction."
    ],
    answer: "Grouping based on similarity."
  },
  {
    topic: "Geospatial",
    question: "In clustering, similarity is determined by:",
    choices: [
      "The algorithm alone.",
      "The feature representation.",
      "The geographic map.",
      "The plotting library."
    ],
    answer: "The feature representation."
  },
  {
    topic: "Geospatial",
    question: "K-means clustering requires the user to specify:",
    choices: [
      "A distance threshold.",
      "A neighborhood radius.",
      "The number of clusters.",
      "A noise tolerance."
    ],
    answer: "The number of clusters."
  },
  {
    topic: "Geospatial",
    question: "In K-means, each cluster is represented by:",
    choices: [
      "A medoid.",
      "A centroid.",
      "A boundary polygon.",
      "A density core."
    ],
    answer: "A centroid."
  },
  {
    topic: "Geospatial",
    question: "K-means assigns points to clusters based on:",
    choices: [
      "Connectivity.",
      "Density reachability.",
      "Nearest centroid distance.",
      "Graph cuts."
    ],
    answer: "Nearest centroid distance."
  },
  {
    topic: "Geospatial",
    question: "A major privacy risk of geospatial data is that:",
    choices: [
      "Coordinates are inaccurate.",
      "Aggregation always removes identity.",
      "Locations can re-identify individuals.",
      "Maps require user consent."
    ],
    answer: "Locations can re-identify individuals."
  },
  {
    topic: "Geospatial",
    question: "Data deserts refer to areas that:",
    choices: [
      "Have too many sensors.",
      "Are geographically isolated.",
      "Have limited data collection.",
      "Are excluded by clustering."
    ],
    answer: "Have limited data collection."
  },
  {
    topic: "Geospatial",
    question: "Why can geospatial models trained on historical data reinforce bias?",
    choices: [
      "They discard temporal variation in the data.",
      "They treat historical enforcement patterns as ground truth.",
      "They remove demographic attributes from the dataset.",
      "They rely exclusively on satellite-based measurements."
    ],
    answer: "They treat historical enforcement patterns as ground truth."
  },
  {
    topic: "Geospatial",
    question: "Spatial clustering can expose confounding because:",
    choices: [
      "Variables often co-vary in space.",
      "Spatial data is causal by default.",
      "Geography removes noise.",
      "Maps enforce independence."
    ],
    answer: "Variables often co-vary in space."
  },
  {
    topic: "Geospatial",
    question: "A key causal question in geospatial analysis is:",
    choices: [
      "Which cluster has the lowest variance?",
      "Would the pattern persist without the intervention?",
      "How many clusters should be chosen for model generalization?",
      "Which map projection is most optimal?"
    ],
    answer: "Would the pattern persist without the intervention?"
  }
];

export default geospatialQuestions;