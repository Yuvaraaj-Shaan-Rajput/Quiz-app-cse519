
const topics = {
  "Basic Data": "./questions/basic-data.js",
  "Probability & Statistics": "./questions/prob-and-stats.js",
  "Continuous Distributions": "./questions/continuous-distribution.js",
  "Regression": "./questions/regression.js",
  "Classification": "./questions/classification.js",
  "Decision Trees": "./questions/decision-trees.js",
  "Graphs": "./questions/graphs.js",
  "Geospatial": "./questions/geospatial.js",
  "Embeddings": "./questions/embeddings.js",
  "Tabular Data": "./questions/tabular-data.js",
  "Time Series": "./questions/time-series.js",
  "Event-Based Time Series": "./questions/event-based-time-series.js",
  "Confidence Intervals": "./questions/confidence-intervals.js",
  "Calibration": "./questions/calibration.js",
  "Vision": "./questions/vision.js",
  "Text & NLP": "./questions/text-nlp.js",
  "Data Labels": "./questions/data-labels.js",
  "Big Data Science": "./questions/big-data-science.js",
  "Agentic AI": "./questions/agentic-ai.js",
  "Causal Inference": "./questions/causal-inference.js"
};

const topicsContainer = document.getElementById('topics-container');

const homeScreen = document.getElementById('home-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultsScreen = document.getElementById('results-screen');

const quizTitle = document.getElementById('quiz-title');
const progress = document.getElementById('progress');
const questionText = document.getElementById('question-text');
const choicesContainer = document.getElementById('choices-container');

const submitBtn = document.getElementById('submit-btn');
const nextBtn = document.getElementById('next-btn');
const restartBtn = document.getElementById('restart-btn');
const backBtn = document.getElementById('back-btn');

const feedback = document.getElementById('feedback');
const scoreText = document.getElementById('score-text');
const wrongAnswers = document.getElementById('wrong-answers');

let currentQuestions = [];
let currentIndex = 0;
let score = 0;
let incorrect = [];

Object.entries(topics).forEach(([name, path]) => {

  const btn = document.createElement('button');

  btn.className = 'topic-btn';
  btn.textContent = name;

  btn.addEventListener('click', () => {
    startQuiz(name, path);
  });

  topicsContainer.appendChild(btn);

});

async function startQuiz(name, path) {

  const module = await import(path);

  currentQuestions = shuffle([...module.default]);

  currentIndex = 0;
  score = 0;
  incorrect = [];

  quizTitle.textContent = name;

  homeScreen.classList.add('hidden');
  resultsScreen.classList.add('hidden');
  quizScreen.classList.remove('hidden');

  renderQuestion();

}

function renderQuestion() {

  const q = currentQuestions[currentIndex];

  progress.textContent = `Question ${currentIndex + 1} of ${currentQuestions.length}`;

  questionText.textContent = q.question;

  choicesContainer.innerHTML = '';
  feedback.innerHTML = '';

  nextBtn.classList.add('hidden');

  q.choices.forEach(choice => {

    const label = document.createElement('label');
    label.className = 'choice';

    const input = document.createElement('input');

    input.type = q.multi ? 'checkbox' : 'radio';
    input.name = 'answer';
    input.value = choice;

    label.appendChild(input);
    label.append(` ${choice}`);

    choicesContainer.appendChild(label);

  });

}

submitBtn.addEventListener('click', () => {

  const q = currentQuestions[currentIndex];

  if (q.multi) {

    const selected = [...document.querySelectorAll('input[type="checkbox"]:checked')]
      .map(el => el.value);

    const correct =
      selected.length === q.answer.length &&
      selected.every(v => q.answer.includes(v));

    if (correct) {

      score++;

      feedback.innerHTML = `<p class="correct">Correct.</p>`;

    } else {

      feedback.innerHTML = `
        <p class="wrong">
          Incorrect.<br>
          Correct answer: ${q.answer.join(', ')}
        </p>
      `;

      incorrect.push({
        question: q.question,
        yourAnswer: selected.join(', ') || 'No answer',
        correct: q.answer.join(', ')
      });

    }

  } else {

    const selected = document.querySelector('input[type="radio"]:checked');

    if (!selected) {

      feedback.innerHTML = `
        <p class="wrong">
          Select an answer first. The browser regrettably cannot interpret vibes.
        </p>
      `;

      return;

    }

    if (selected.value === q.answer) {

      score++;

      feedback.innerHTML = `<p class="correct">Correct.</p>`;

    } else {

      feedback.innerHTML = `
        <p class="wrong">
          Incorrect.<br>
          Correct answer: ${q.answer}
        </p>
      `;

      incorrect.push({
        question: q.question,
        yourAnswer: selected.value,
        correct: q.answer
      });

    }

  }

  nextBtn.classList.remove('hidden');

});

nextBtn.addEventListener('click', () => {

  currentIndex++;

  if (currentIndex >= currentQuestions.length) {
    showResults();
  } else {
    renderQuestion();
  }

});

function showResults() {

  quizScreen.classList.add('hidden');
  resultsScreen.classList.remove('hidden');

  scoreText.textContent = `Final Score: ${score}/${currentQuestions.length}`;

  wrongAnswers.innerHTML = '';

  if (incorrect.length === 0) {

    wrongAnswers.innerHTML = `
      <p class="correct">
        Perfect score. Suspiciously graduate-student behavior.
      </p>
    `;

    return;

  }

  incorrect.forEach(item => {

    const div = document.createElement('div');

    div.className = 'wrong-box';

    div.innerHTML = `
      <p><strong>Question:</strong> ${item.question}</p>
      <p><strong>Your Answer:</strong> ${item.yourAnswer}</p>
      <p><strong>Correct Answer:</strong> ${item.correct}</p>
    `;

    wrongAnswers.appendChild(div);

  });

}

restartBtn.addEventListener('click', goHome);
backBtn.addEventListener('click', goHome);

function goHome() {

  quizScreen.classList.add('hidden');
  resultsScreen.classList.add('hidden');

  homeScreen.classList.remove('hidden');

}

function shuffle(arr) {

  for (let i = arr.length - 1; i > 0; i--) {

    const j = Math.floor(Math.random() * (i + 1));

    [arr[i], arr[j]] = [arr[j], arr[i]];

  }

  return arr;

}
