const quizData = [
  {
    question: "What’s the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Lisbon"],
    correctIndex: 2
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    correctIndex: 1
  },
  {
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "22"],
    correctIndex: 1
  }
];

let currentQuestion = 0;
let score = 0;
let answered = false;

function renderQuiz() {
  answered = false;
  document.getElementById("nextBtn").style.display = "none";
  document.getElementById("result").style.display = "none";

  const q = quizData[currentQuestion];
  document.getElementById("question").textContent = q.question;

  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  q.options.forEach((option, index) => {
    const btn = document.createElement("div");
    btn.textContent = option;
    btn.className = "option";
    btn.onclick = () => selectOption(btn, index);
    optionsDiv.appendChild(btn);
  });
}

function selectOption(elem, index) {
  if (answered) return;
  answered = true;

  const correct = quizData[currentQuestion].correctIndex;
  if (index === correct) {
    elem.classList.add("correct");
    score++;
  } else {
    elem.classList.add("wrong");
    document.querySelectorAll(".option")[correct].classList.add("correct");
  }

  document.getElementById("nextBtn").style.display = "block";
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    renderQuiz();
  } else {
    showResult();
  }
}

function showResult() {
  document.getElementById("question").style.display = "none";
  document.getElementById("options").style.display = "none";
  document.getElementById("nextBtn").style.display = "none";
  const result = document.getElementById("result");
  result.textContent = `You scored ${score} out of ${quizData.length}!`;
  result.style.display = "block";
}

renderQuiz();
