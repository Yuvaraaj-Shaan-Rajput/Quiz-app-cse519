const bigDataScienceQuestions = [
  {
    topic: "Big Data Science",
    question: "Which distinguish parallel vs distributed computing?",
    choices: [
      "Parallel uses multiple processors in one machine",
      "Distributed uses multiple networked nodes",
      "Distributed partitions data/tasks",
      "Parallel requires network communication",
      "Distributed involves node communication"
    ],
    answer: [
      "Parallel uses multiple processors in one machine",
      "Distributed uses multiple networked nodes",
      "Distributed partitions data/tasks",
      "Distributed involves node communication"
    ],
    multi: true
  },
  {
    topic: "Big Data Science",
    question: "High Performance Computing refers to:",
    choices: [
      "Consumer laptops",
      "Supercomputers/clusters",
      "Cloud storage",
      "Small scripts"
    ],
    answer: "Supercomputers/clusters"
  },
  {
    topic: "Big Data Science",
    question: "Advantages of parallel computing include:",
    choices: [
      "Reduced execution time",
      "Handle larger datasets",
      "Guaranteed cost reduction",
      "Improved throughput"
    ],
    answer: [
      "Reduced execution time",
      "Handle larger datasets",
      "Improved throughput"
    ],
    multi: true
  },
  {
    topic: "Big Data Science",
    question: "GPU suited for parallel workloads because:",
    choices: [
      "Many small cores",
      "Higher single-thread",
      "Slower memory",
      "Sequential only"
    ],
    answer: "Many small cores"
  },
  {
    topic: "Big Data Science",
    question: "A data lake stores:",
    choices: [
      "Structured only",
      "Raw unprocessed data",
      "Relational only",
      "Normalized records"
    ],
    answer: "Raw unprocessed data"
  },
  {
    topic: "Big Data Science",
    question: "Data warehouses are characterized by:",
    choices: [
      "Structured schema-on-write",
      "Optimized for analytics",
      "Raw storage",
      "ETL processes"
    ],
    answer: [
      "Structured schema-on-write",
      "Optimized for analytics",
      "ETL processes"
    ],
    multi: true
  },
  {
    topic: "Big Data Science",
    question: "Schema means:",
    choices: [
      "Data organization definition",
      "Database engine",
      "Raw data",
      "Query language"
    ],
    answer: "Data organization definition"
  },
  {
    topic: "Big Data Science",
    question: "Schema-on-read means:",
    choices: [
      "Schema at write",
      "Schema at read",
      "No schema",
      "Strict relational rules"
    ],
    answer: "Schema at read"
  },
  {
    topic: "Big Data Science",
    question: "Examples of big data file formats:",
    choices: [
      "CSV",
      "JSON",
      "Parquet",
      "JPEG"
    ],
    answer: ["CSV", "JSON", "Parquet"],
    multi: true
  },
  {
    topic: "Big Data Science",
    question: "ETL stands for:",
    choices: [
      "Extract Transform Load",
      "Evaluate Test Learn",
      "Execute Transfer Log",
      "Encode Train Label"
    ],
    answer: "Extract Transform Load"
  },
  {
    topic: "Big Data Science",
    question: "Workflow orchestration tools:",
    choices: [
      "Schedule pipelines",
      "Retry failures",
      "Only ML models",
      "Handle dependencies"
    ],
    answer: [
      "Schedule pipelines",
      "Retry failures",
      "Handle dependencies"
    ],
    multi: true
  },
  {
    topic: "Big Data Science",
    question: "MapReduce is:",
    choices: [
      "Distributed programming model",
      "Visualization library",
      "GPU framework",
      "SQL engine"
    ],
    answer: "Distributed programming model"
  },
  {
    topic: "Big Data Science",
    question: "Advantages of Spark over MapReduce:",
    choices: [
      "In-memory speed",
      "Iterative support",
      "ML/graph libraries",
      "Guaranteed lower cost"
    ],
    answer: [
      "In-memory speed",
      "Iterative support",
      "ML/graph libraries"
    ],
    multi: true
  },
  {
    topic: "Big Data Science",
    question: "Dashboard in big data:",
    choices: [
      "Visual metrics",
      "Runs ETL",
      "Stores raw data",
      "Controls GPU"
    ],
    answer: "Visual metrics"
  },
  {
    topic: "Big Data Science",
    question: "Monitoring pipelines includes:",
    choices: [
      "Track jobs",
      "Measure throughput",
      "Ignore anomalies",
      "Detect drift"
    ],
    answer: [
      "Track jobs",
      "Measure throughput",
      "Detect drift"
    ],
    multi: true
  },
  {
    topic: "Big Data Science",
    question: "Differential privacy aims to:",
    choices: [
      "Protect individual data",
      "Speed computation",
      "Compress data",
      "Remove redundancy"
    ],
    answer: "Protect individual data"
  },
  {
    topic: "Big Data Science",
    question: "Data drift refers to:",
    choices: [
      "Distribution changes",
      "Static data",
      "Label noise",
      "Loss of parallelism"
    ],
    answer: "Distribution changes"
  },
  {
    topic: "Big Data Science",
    question: "Serverless computing:",
    choices: [
      "Auto-managed cloud execution",
      "Local only",
      "No servers exist",
      "On-prem only"
    ],
    answer: "Auto-managed cloud execution"
  },
  {
    topic: "Big Data Science",
    question: "A/B testing goal:",
    choices: [
      "Compare variants",
      "Assign servers",
      "Remove stats",
      "Test all params"
    ],
    answer: "Compare variants"
  },
  {
    topic: "Big Data Science",
    question: "Good workflow practices:",
    choices: [
      "Define dependencies",
      "Auto retries",
      "No monitoring",
      "Optimize scheduling"
    ],
    answer: [
      "Define dependencies",
      "Auto retries",
      "Optimize scheduling"
    ],
    multi: true
  },
  {
    topic: "Big Data Science",
    question: "Serverless benefit:",
    choices: [
      "Auto scaling",
      "Pay per execution",
      "Zero latency",
      "No logic needed"
    ],
    answer: "Auto scaling"
  },
  {
    topic: "Big Data Science",
    question: "Inverted index maps:",
    choices: [
      "Docs to links",
      "Terms to docs",
      "Queries to ranks",
      "Docs to embeddings"
    ],
    answer: "Terms to docs"
  },
  {
    topic: "Big Data Science",
    question: "IDF in BM25:",
    choices: [
      "Penalize repeats",
      "Downweight common terms",
      "Normalize length",
      "Smooth TF"
    ],
    answer: "Downweight common terms"
  },
  {
    topic: "Big Data Science",
    question: "PageRank represents:",
    choices: [
      "Shortest path",
      "Random walk probability",
      "Degree centrality",
      "Clustering coeff"
    ],
    answer: "Random walk probability"
  },
  {
    topic: "Big Data Science",
    question: "Personalized PageRank:",
    choices: [
      "Weighted edges",
      "Biased teleportation",
      "Remove dangling nodes",
      "Normalize scores"
    ],
    answer: "Biased teleportation"
  },
  {
    topic: "Big Data Science",
    question: "MIPS is used to:",
    choices: [
      "Compute PageRank",
      "Find similar vectors",
      "Sort by length",
      "Graph traversal"
    ],
    answer: "Find similar vectors"
  },
  {
    topic: "Big Data Science",
    question: "KD-trees perform poorly when:",
    choices: [
      "High dimensions",
      "Duplicate points",
      "Few queries",
      "Clustered data"
    ],
    answer: "High dimensions"
  },
  {
    topic: "Big Data Science",
    question: "Graph ANN differs because:",
    choices: [
      "Compare all vectors",
      "Needs labels",
      "Traverse local neighbors",
      "Tree partitioning"
    ],
    answer: "Traverse local neighbors"
  },
  {
    topic: "Big Data Science",
    question: "Search graph connects to:",
    choices: [
      "Random docs",
      "Keyword docs",
      "Nearest neighbors",
      "Same length docs"
    ],
    answer: "Nearest neighbors"
  },
  {
    topic: "Big Data Science",
    question: "Local optimum means:",
    choices: [
      "Neighbors worse than node",
      "Global best",
      "Cluster center",
      "Max degree"
    ],
    answer: "Neighbors worse than node"
  },
  {
    topic: "Big Data Science",
    question: "Greedy graph search fails because:",
    choices: [
      "Needs full traversal",
      "Gets stuck locally",
      "Quadratic scaling",
      "Uniform degree"
    ],
    answer: "Gets stuck locally"
  },
  {
    topic: "Big Data Science",
    question: "Parallel graph search helps to:",
    choices: [
      "Reduce dimensions",
      "Remove reranking",
      "Guarantee exact",
      "Escape local regions"
    ],
    answer: "Escape local regions"
  },
  {
    topic: "Big Data Science",
    question: "HNSW improves search by:",
    choices: [
      "Hierarchical layers",
      "Hashing",
      "Vector compression",
      "Distance thresholds"
    ],
    answer: "Hierarchical layers"
  },
  {
    topic: "Big Data Science",
    question: "Second-stage reranker purpose:",
    choices: [
      "Speed ANN",
      "Refine results",
      "Remove index",
      "Calibrate similarity"
    ],
    answer: "Refine results"
  }
];

export default bigDataScienceQuestions;
