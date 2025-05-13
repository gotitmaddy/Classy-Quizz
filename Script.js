const quizData = [
  { question: "What’s the capital of France?", options: ["Berlin", "Madrid", "Paris", "Lisbon"], correctIndex: 2 },
  { question: "Which planet is known as the Red Planet?", options: ["Earth", "Mars", "Jupiter", "Venus"], correctIndex: 1 },
  { question: "What is 2 + 2?", options: ["3", "4", "5", "22"], correctIndex: 1 }
];

let userName = "";
let userAvatar = "";
let currentQuestion = 0;
let score = 0;
let answered = false;
let timeLeft = 15;
let timerInterval = null;

function selectAvatar(emoji) {
  userAvatar = emoji;
  document.querySelectorAll(".avatar").forEach(a => a.style.border = "");
  event.target.style.border = "2px solid #4f46e5";
}

function startQuiz() {
  const nameInput = document.getElementById("nameInput").value.trim();
  if (!nameInput || !userAvatar) {
    alert("Please enter your name and choose an avatar.");
    return;
  }
  userName = nameInput;
  document.getElementById("start-screen").style.display = "none";
  const quizBox = document.getElementById("quiz-box");
  quizBox.style.display = "block";
  quizBox.classList.add("fade-in");
  renderQuiz();
}

function renderQuiz() {
  answered = false;
  timeLeft = 15;
  updateTimerDisplay();
  document.getElementById("nextBtn").style.display = "none";
  document.getElementById("result").style.display = "none";

  const q = quizData[currentQuestion];
  document.getElementById("question").textContent = q.question;
  document.getElementById("counter").textContent = `Question ${currentQuestion + 1} of ${quizData.length}`;
  document.getElementById("user-info").textContent = `${userAvatar} ${userName}`;

  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  q.options.forEach((option, index) => {
    const btn = document.createElement("div");
    btn.textContent = option;
    btn.className = "option fade-in";
    btn.onclick = () => selectOption(btn, index);
    optionsDiv.appendChild(btn);
  });

  startTimer();
}

function startTimer() {
  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    timeLeft--;
    updateTimerDisplay();
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      autoFail();
    }
  }, 1000);
}

function updateTimerDisplay() {
  document.getElementById("timer").textContent = `${timeLeft}s`;
}

function selectOption(elem, index) {
  if (answered) return;
  answered = true;
  clearInterval(timerInterval);

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

function autoFail() {
  answered = true;
  const correct = quizData[currentQuestion].correctIndex;
  document.querySelectorAll(".option")[correct].classList.add("correct");
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
  document.getElementById("timer").style.display = "none";
  document.getElementById("counter").style.display = "none";

  const result = document.getElementById("result");
  result.textContent = `${userAvatar} ${userName}, you scored ${score} out of ${quizData.length}!`;
  result.style.display = "block";
}
