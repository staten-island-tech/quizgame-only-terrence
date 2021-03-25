// Array for questions and answers
const questions = [
  {
    question: "1. When was Pong first released?",
    answer: [
      { text: "1958", correct: false },
      { text: "1967", correct: false },
      { text: "1972", correct: true },
      { text: "1978", correct: false },
    ],
  },
  {
    question: "2. What is the best-selling video of all time?",
    answer: [
      { text: "GTA V", correct: true },
      { text: "Minecraft", correct: false },
      { text: "Tetris", correct: false },
      { text: "Terraria", correct: false },
    ],
  },
  {
    question: "3. Filler",
    answer: [
      { text: "Filler", correct: false },
      { text: "Filler", correct: false },
      { text: "Filler", correct: false },
      { text: "Filler", correct: false },
    ],
  },
  {
    question: "4. Filler",
    answer: [
      { text: "Filler", correct: true },
      { text: "Filler", correct: false },
      { text: "Filler", correct: false },
      { text: "Filler", correct: false },
    ],
  },
  {
    question: "5. Filler",
    answer: [
      { text: "Filler", correct: true },
      { text: "Filler", correct: false },
      { text: "Filler", correct: false },
      { text: "Filler", correct: false },
    ],
  },
  {
    question: "6. Filler",
    answer: [
      { text: "Filler", correct: true },
      { text: "Filler", correct: false },
      { text: "Filler", correct: false },
      { text: "Filler", correct: false },
    ],
  },
  {
    question: "7. Filler",
    answer: [
      { text: "Filler", correct: true },
      { text: "Filler", correct: false },
      { text: "Filler", correct: false },
      { text: "Filler", correct: false },
    ],
  },
  {
    question: "8. Filler",
    answer: [
      { text: "Filler", correct: true },
      { text: "Filler", correct: false },
      { text: "Filler", correct: false },
      { text: "Filler", correct: false },
    ],
  },
  {
    question: "9. Filler",
    answer: [
      { text: "Filler", correct: true },
      { text: "Filler", correct: false },
      { text: "Filler", correct: false },
      { text: "Filler", correct: false },
    ],
  },
  {
    question: "10. Filler",
    answer: [
      { text: "Filler", correct: true },
      { text: "Filler", correct: false },
      { text: "Filler", correct: false },
      { text: "Filler", correct: false },
    ],
  },
];

// Selects button element from HTML
const startbtn = document.getElementById("startbtn");
// Selects next button element from HTML
const nextbtn = document.getElementById("nextbtn");
// Creates variable by selecting ID of question template from HTML
const questionElement = document.getElementById("question-temp");
// Creates variable by selecting ID of answer template from HTML
const answerElement1 = document.getElementById("ans1");
const answerElement2 = document.getElementById("ans2");
const answerElement3 = document.getElementById("ans3");
const answerElement4 = document.getElementById("ans4");
// Sets variable for first set
let currentIndex = 0;
// Sets initial score
let initialScore = 0;

function start() {
  // Changes screens by swapping divs
  document.getElementById("intropage").style.zIndex = "1";
  document.getElementById("template").style.zIndex = "2";
}
function load() {
  // Starts replacing templates for when index is less than 9
  if (currentIndex <= 9) {
    questionElement.innerHTML = questions[currentIndex]["question"];
    answerElement1.innerHTML = questions[currentIndex]["answer"][0]["text"];
    answerElement2.innerHTML = questions[currentIndex]["answer"][1]["text"];
    answerElement3.innerHTML = questions[currentIndex]["answer"][2]["text"];
    answerElement4.innerHTML = questions[currentIndex]["answer"][3]["text"];
  }
}
startbtn.addEventListener("click", () => {
  start();
  load();
});

// Since it's not a final page yet, pressing next button will keep increasing index until it gets to max allowed index, which is 10, where it will trigger results() since it is > 9
function nextPage() {
  if (currentIndex < 10) {
    currentIndex++;
    load();
  }
}
// If it is at final page, represented by index of 9 change HTML of next button to Submit
function resultsBtn() {
  if (currentIndex === 9) {
    nextbtn.innerHTML = "Results";
  }
}
// Only if the index of above 9, which is final page, change screens to results page
function submit() {
  if (currentIndex > 9) {
    document.getElementById("template").style.zIndex = "1";
    document.getElementById("results").style.zIndex = "2";
  }
}
nextbtn.addEventListener("click", () => {
  nextPage();
  resultsBtn();
  submit();
});

function goBack() {
  // If index is not equal to 0:
  if (currentIndex != 0) {
    // Minus 1 from index
    --currentIndex;
    load();
    // Change next button back to next if it turned to submit
    nextbtn.innerHTML = "Next";
  }
}
prevbtn.addEventListener("click", () => {
  goBack();
  goodLooks();
});
// If index = 0, don't display previous button
function goodLooks() {
  if (currentIndex === 0) {
    prevbtn.style.display = "none";
  }
}
goodLooks();
function nextPage() {
  if (currentIndex < 10) {
    currentIndex++;
    load();
    prevbtn.style.display = "inline-block";
  }
}
