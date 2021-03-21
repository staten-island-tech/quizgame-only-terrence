// Array for questions and answers
const questions = [
  {
    question: "1. When was Minecraft released?",
    answer: [
      { text: "2009", correct: "true" },
      { text: "2010", correct: "false" },
      { text: "2011", correct: "false" },
      { text: "2012", correct: "false" },
    ],
  },
  {
    question: "2. When was League of Legends released?",
    answer: [
      { text: "2010", correct: "true" },
      { text: "2011", correct: "false" },
      { text: "2012", correct: "false" },
      { text: "2013", correct: "false" },
    ],
  },
  {
    question: "3. When was GTA V released?",
    answer: [
      { text: "2013", correct: "true" },
      { text: "2014", correct: "false" },
      { text: "2015", correct: "false" },
      { text: "2016", correct: "false" },
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

function start() {
  // changes screens by swapping divs
  document.getElementById("intropage").style.zIndex = "1";
  document.getElementById("template").style.zIndex = "2";
  // Starts replacing templates for when index is less than 2
  if (currentIndex < 2) {
    questionElement.innerHTML = questions[currentIndex]["question"];
    answerElement1.innerHTML = questions[currentIndex]["answer"][0]["text"];
    answerElement2.innerHTML = questions[currentIndex]["answer"][1]["text"];
    answerElement3.innerHTML = questions[currentIndex]["answer"][2]["text"];
    answerElement4.innerHTML = questions[currentIndex]["answer"][3]["text"];
  } else {
    // When it recognizes it's at the final index, changes "Next" button to "Submit" button
    if (currentIndex === 2) {
      questionElement.innerHTML = questions[currentIndex]["question"];
      answerElement1.innerHTML = questions[currentIndex]["answer"][0]["text"];
      answerElement2.innerHTML = questions[currentIndex]["answer"][1]["text"];
      answerElement3.innerHTML = questions[currentIndex]["answer"][2]["text"];
      answerElement4.innerHTML = questions[currentIndex]["answer"][3]["text"];
      nextbtn.innerHTML = "Submit";
    }
  }
}
// Makes start button look for clicks and starts function if clicked
startbtn.addEventListener("click", start);

function resultsPage() {
  // When it's at final page the button will change and prompt this
  if (nextbtn.innerHTML === "Submit") {
    document.getElementById("template").style.zIndex = "1";
    document.getElementById("results").style.zIndex = "2";
  } else {
    // Since it's not a final page yet, pressing next button will keep increasing index until it gets to final page and invoke if
    if (currentIndex <= 2) {
      currentIndex++;
      start();
    }
  }
}
// Makes next button look for clicks and starts function if clicked
nextbtn.addEventListener("click", resultsPage);
