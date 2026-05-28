const graphQuestions = [
  {
    topic: "Graphs",
    question: "A graph is best described as:",
    choices: [
      "A table of features with independent rows.",
      "Entities and the relationships between them.",
      "Time series indexed by nodes.",
      "A matrix that must be symmetric."
    ],
    answer: "Entities and the relationships between them."
  },
  {
    topic: "Graphs",
    question: "What is an adjacency matrix?",
    choices: [
      "A matrix that stores feature values for each node.",
      "A matrix that encodes which pairs of nodes are connected by edges.",
      "A matrix that records shortest-path distances between nodes.",
      "A matrix that normalizes node degrees to probabilities."
    ],
    answer: "A matrix that encodes which pairs of nodes are connected by edges."
  },
  {
    topic: "Graphs",
    question: "A directed graph differs from an undirected graph because:",
    choices: [
      "Edges have weights that can be positive or negative.",
      "Edges encode asymmetric (directional) relationships.",
      "Nodes have labels that may not be numeric.",
      "The adjacency matrix must be sparse."
    ],
    answer: "Edges encode asymmetric (directional) relationships."
  },
  {
    topic: "Graphs",
    question: "A bipartite graph is characterized by:",
    choices: [
      "Having exactly two connected components in the graph.",
      "Nodes partitioned into two disjoint sets with edges only across sets.",
      "Allowing edges to have two possible directions.",
      "Having all nodes share the same degree value."
    ],
    answer: "Nodes partitioned into two disjoint sets with edges only across sets."
  },
  {
    topic: "Graphs",
    question: "The degree matrix D of a graph is:",
    choices: [
      "The adjacency matrix squared.",
      "A diagonal matrix of node degrees.",
      "A normalized transition matrix.",
      "The inverse of the Laplacian."
    ],
    answer: "A diagonal matrix of node degrees."
  },
  {
    topic: "Graphs",
    question: "In a random walk with transition matrix T:",
    choices: [
      "Rows of T sum to one.",
      "Columns of T sum to one.",
      "T is always symmetric.",
      "T equals the Laplacian."
    ],
    answer: "Rows of T sum to one."
  },
  {
    topic: "Graphs",
    question: "Random walks are useful in graphs primarily because they:",
    choices: [
      "Encode global structure through local transitions.",
      "Guarantee shortest-path discovery.",
      "Eliminate the need for node features.",
      "Remove degree heterogeneity."
    ],
    answer: "Encode global structure through local transitions."
  },
  {
    topic: "Graphs",
    question: "Node classification assumes that:",
    choices: [
      "All nodes have known labels.",
      "Labels are independent of graph structure.",
      "Nearby or connected nodes tend to share labels.",
      "The graph is fully connected."
    ],
    answer: "Nearby or connected nodes tend to share labels."
  },
  {
    topic: "Graphs",
    question: "Graph-based regularization encourages solutions that:",
    choices: [
      "Penalize large parameter norms.",
      "Are sparse in feature space.",
      "Assign similar labels to connected nodes.",
      "Maximize classification margin."
    ],
    answer: "Assign similar labels to connected nodes."
  },
  {
    topic: "Graphs",
    question: "Community detection aims to:",
    choices: [
      "Identify nodes with high influence across a network.",
      "Partition nodes into densely connected groups.",
      "Identify shortest paths.",
      "Label nodes independently."
    ],
    answer: "Partition nodes into densely connected groups."
  },
  {
    topic: "Graphs",
    question: "A graph cut measures:",
    choices: [
      "The diameter of the graph.",
      "How well the graph can be separated into parts.",
      "The number of connected components.",
      "The spectral radius of the adjacency matrix."
    ],
    answer: "How well the graph can be separated into parts."
  },
  {
    topic: "Graphs",
    question: "Cheeger’s inequality connects:",
    choices: [
      "Node degree and PageRank.",
      "Minimum cut and maximum flow.",
      "Graph conductance and Laplacian eigenvalues.",
      "Random walks and shortest paths."
    ],
    answer: "Graph conductance and Laplacian eigenvalues."
  },
  {
    topic: "Graphs",
    question: "A small second eigenvalue λ2 of the Laplacian suggests:",
    choices: [
      "Strong global connectivity.",
      "A good graph partition.",
      "High clustering coefficient.",
      "Uniform node degrees."
    ],
    answer: "A good graph partition."
  },
  {
    topic: "Graphs",
    question: "If the smallest d eigenvalues of the graph Laplacian are close to zero, this most likely indicates that:",
    choices: [
      "The graph can be approximately partitioned into d clusters.",
      "The graph contains d nodes with unusually large degree values.",
      "The data should be embedded into exactly d dimensions.",
      "Random walks on the graph mix uniformly after d steps."
    ],
    answer: "The graph can be approximately partitioned into d clusters."
  },
  {
    topic: "Graphs",
    question: "Spectral embeddings are based on:",
    choices: [
      "Eigenvectors of the graph Laplacian.",
      "Singular vectors of the feature matrix.",
      "Shortest-path trees.",
      "Random feature projections."
    ],
    answer: "Eigenvectors of the graph Laplacian."
  },
  {
    topic: "Graphs",
    question: "Applying K-means after spectral embedding works because:",
    choices: [
      "Embeddings linearize community structure.",
      "K-means optimizes graph cuts directly.",
      "Eigenvectors encode node labels.",
      "Distances become uniform."
    ],
    answer: "Embeddings linearize community structure."
  },
  {
    topic: "Graphs",
    question: "Node centrality is best described as:",
    choices: [
      "A measure of how many edges exist in the entire graph.",
      "A way to quantify the relative importance of nodes within a network.",
      "A method for partitioning a graph into communities.",
      "A technique for embedding nodes into a low-dimensional space."
    ],
    answer: "A way to quantify the relative importance of nodes within a network."
  },
  {
    topic: "Graphs",
    question: "Degree centrality measures:",
    choices: [
      "How influential a node’s neighbors are.",
      "How often a node lies on shortest paths.",
      "How many immediate connections a node has.",
      "How close a node is to all other nodes."
    ],
    answer: "How many immediate connections a node has."
  },
  {
    topic: "Graphs",
    question: "Betweenness centrality highlights nodes that:",
    choices: [
      "How influential a node’s neighbors are.",
      "How often a node lies on shortest paths.",
      "How many immediate connections a node has.",
      "How close a node is to all other nodes."
    ],
    answer: "How often a node lies on shortest paths."
  },
  {
    topic: "Graphs",
    question: "Closeness centrality captures:",
    choices: [
      "How influential a node’s neighbors are.",
      "How often a node lies on shortest paths.",
      "How many immediate connections a node has.",
      "How close a node is to all other nodes."
    ],
    answer: "How close a node is to all other nodes."
  },
  {
    topic: "Graphs",
    question: "Eigenvector centrality assigns high scores to nodes that:",
    choices: [
      "How influential a node’s neighbors are.",
      "How often a node lies on shortest paths.",
      "How many immediate connections a node has.",
      "How close a node is to all other nodes."
    ],
    answer: "How influential a node’s neighbors are."
  },
  {
    topic: "Graphs",
    question: "PageRank computes:",
    choices: [
      "Eigenvectors of the graph adjacency matrix.",
      "The unique stationary distribution of a damped random walk after many steps.",
      "Shortest-path distances between all node pairs in the graph.",
      "Local degree-based scores that depend only on immediate neighbors."
    ],
    answer: "The unique stationary distribution of a damped random walk after many steps."
  },
  {
    topic: "Graphs",
    question: "The manifold assumption states that:",
    choices: [
      "Data lies exactly in a low-dimensional Euclidean subspace.",
      "Data is globally nonlinear but locally well-approximated by linear structure.",
      "Observed features are statistically independent given labels.",
      "Graph structure fully determines the geometry of the data."
    ],
    answer: "Data is globally nonlinear but locally well-approximated by linear structure."
  },
  {
    topic: "Graphs",
    question: "In manifold learning, a geodesic distance refers to:",
    choices: [
      "The straight-line distance between two points in ambient space.",
      "The shortest path constrained to lie on a surface or manifold.",
      "The number of edges between two nodes in a graph.",
      "A projection of high-dimensional data onto a linear subspace."
    ],
    answer: "The shortest path constrained to lie on a surface or manifold."
  },
  {
    topic: "Graphs",
    question: "Classical MDS reduces to PCA when:",
    choices: [
      "Distances are geodesic.",
      "The graph is fully connected.",
      "Distances are squared Euclidean.",
      "Features are normalized."
    ],
    answer: "Distances are squared Euclidean."
  },
  {
    topic: "Graphs",
    question: "Isomap differs from MDS because it:",
    choices: [
      "Uses shortest-path distances on a neighborhood graph.",
      "Constructs embeddings by directly optimizing Laplacian eigenvectors.",
      "Requires class labels to preserve manifold structure.",
      "Enforces local linear reconstruction constraints."
    ],
    answer: "Uses shortest-path distances on a neighborhood graph."
  },
  {
    topic: "Graphs",
    question: "LLE assumes that:",
    choices: [
      "Global distances are preserved.",
      "Data is locally linear.",
      "Eigenvectors encode labels.",
      "Graphs are weighted."
    ],
    answer: "Data is locally linear."
  }
];

export default graphQuestions;