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
