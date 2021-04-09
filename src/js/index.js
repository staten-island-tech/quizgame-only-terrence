import { questions } from "./questions";
//Creates changeable array to store user answers
let userAnswers = [, , , , , , , , , ,];
// Sets variable for first set
let currentIndex = 0;
// Set variable for missed answers
let missedAnswers = 0;
// Sets initial score
let initialScore = 0;
// Get all answer elements
const allAnswers = document.querySelectorAll("div.questionbox button");
for (i = 0; i < allAnswers.length; i++) {
  let button = allAnswers[i];
  button.addEventListener("click", function selected() {
    // Loop through all answer elements
    for (i = 0; i < allAnswers.length; i++) {
      // Remove the class 'active' if it exists
      allAnswers[i].classList.remove("active");
    }
    // Add 'active' classs to the element that was clicked
    this.classList.add("active");
  });
}
const unselect = () => {
  // Loop through all answer elements
  for (i = 0; i < allAnswers.length; i++) {
    // Remove the class 'active' if it exists
    allAnswers[i].classList.remove("active");
  }
};
const recall = () => {
  // Takes the current index to find corresponding user answer from answers array (current since increment already happened)
  const nextAnswer = userAnswers[currentIndex];
  // Grabs the element that has that same ID (reason why it is stored in ID form)
  const recallSelected = document.getElementById(nextAnswer);
  // As long as the nextAnswer is not null, run this function
  if (nextAnswer != null) {
    // Reselects answer
    recallSelected.classList.add("active");
  }
};
const start = () => {
  // Changes screens by changing display
  document.getElementById("intropage").style.display = "none";
  document.getElementById("template").style.display = "flex";
  for (i = 0; i < userAnswers.length; i++) {
    userAnswers[i] = null;
  }
};
const load = () => {
  // Starts replacing templates for when index is less than 9
  if (currentIndex <= 9) {
    document.getElementById("question-temp").innerHTML =
      questions[currentIndex]["question"];
    document.getElementById("ans1").innerHTML =
      questions[currentIndex]["answer"][0]["text"];
    document.getElementById("ans2").innerHTML =
      questions[currentIndex]["answer"][1]["text"];
    document.getElementById("ans3").innerHTML =
      questions[currentIndex]["answer"][2]["text"];
    document.getElementById("ans4").innerHTML =
      questions[currentIndex]["answer"][3]["text"];
  }
};
document.getElementById("startbtn").addEventListener("click", () => {
  start();
  load();
});
// Since it's not a final page yet, pressing next button will keep increasing index until it gets to max allowed index, which is 9
const nextPage = () => {
  if (currentIndex < 9) {
    currentIndex++;
    load();
    prevbtn.style.display = "inline-block";
  }
};
// If it is at final page, represented by index of 9 change HTML of next button to Submit
const submitBtn = () => {
  if (currentIndex === 9) {
    nextbtn.style.display = "none";
    document.getElementById("submitbtn").style.display = "inline-block";
  }
};
const budgetLocalStorageNext = () => {
  // Searches for all DOM elements with class of active
  const selectedAnswer = document.querySelector(".active");
  // As long as the selectedAnswer is not null, run this function
  if (selectedAnswer != null) {
    // Replace the corresponding slot based on index of answers array with the id of element
    // Since this activates AFTER increment, -1 from index to find previous
    userAnswers[currentIndex - 1] = selectedAnswer.id;
  } else {
    // If there is no answer, replace instead with null
    userAnswers[currentIndex - 1] = null;
  }
};
document.getElementById("nextbtn").addEventListener("click", () => {
  // First increments currentIndex
  nextPage();
  // Stores user answer based on element w/ active class
  budgetLocalStorageNext();
  // As long as it isn't at final page, removes any element w/ active class to unselect
  unselect();
  // Changes nextbtn to Submit if at final index value
  submitBtn();
  // If user wants to go back or forward, search from answers array to reselect btns
  recall();
});
const goBack = () => {
  // If index is not equal to 0:
  if (currentIndex != 0) {
    // Minus 1 from index
    --currentIndex;
    load();
    // Change next button back to next if it turned to submit
    nextbtn.innerHTML = "Next";
  }
};
const goodLooks = () => {
  // If index = 0, don't display previous button
  if (currentIndex === 0) {
    prevbtn.style.display = "none";
  }
  // If it isn't final page, going back will change submitbtn back to nextbtn
  if (currentIndex < 9) {
    nextbtn.style.display = "inline-block";
    document.getElementById("submitbtn").style.display = "none";
  }
};
goodLooks();
const budgetLocalStorageBack = () => {
  // Searches for all DOM elements with class of active
  const selectedAnswer = document.querySelector(".active");
  // As long as the selectedAnswer is not null, run this function
  if (selectedAnswer != null) {
    // Replace the corresponding slot based on index of answers array with the id of element
    // Since this activates AFTER decrement, +1 from index to find next
    userAnswers[currentIndex + 1] = selectedAnswer.id;
  } else {
    // If there is no answer, replace instead with null
    userAnswers[currentIndex + 1] = null;
  }
};
document.getElementById("prevbtn").addEventListener("click", () => {
  // First decrements currentIndex
  goBack();
  // Stores user answer based on element w/ active class (Difference is currentIndex + 1 instead of - 1])
  budgetLocalStorageBack();
  // Removes any element w/ active class to unselect
  unselect();
  // If user wants to go back or forward, search from answers array to reselect btns
  recall();
  // Visual change to make unnecessary prevbtn invisible on first page
  goodLooks();
});
const grader = () => {
  // loops through everything in answers array
  for (i = 0; i < userAnswers.length; i++) {
    // If answers is not null, which means if user put in an answer
    if (userAnswers[i] != null) {
      // First sets the number from the answerElement ids, ex "3" from ans3
      let substitute = userAnswers[i].charAt(3);
      // Correlates it with the question of the same index, then the subtracts 1 from the substitute since indexes start from 0, and then checks correct value
      let choice = questions[i].answer[substitute - 1].correct;
      // If it is true add 1 to score
      if (choice === true) {
        initialScore++;
      }
      // If it is false add nothing
      else if (choice === false) {
        initialScore;
      }
    }
    // If there is no user answer, add nothing
    else if (userAnswers[i] === null) {
      initialScore;
    }
  }
};
const resultsPage = () => {
  // Switches to results page by swapping displays
  document.getElementById("template").style.display = "none";
  document.getElementById("results").style.display = "flex";
  document.getElementById(
    "name"
  ).innerText = `You got ${initialScore}/10 correct!`;
  // Different responses based on score
  if (initialScore < 5) {
    document.getElementById("text").innerHTML =
      "You don't know much about video games";
  }
  if (initialScore > 5 && initialScore < 10) {
    document.getElementById("text").innerHTML =
      "You know some things about video games";
  }
  if (initialScore === 10) {
    document.getElementById("text").innerHTML =
      "You know a lot about video games";
  }
};

const budgetLocalStorageFinal = () => {
  // Searches for all DOM elements with class of active
  const selectedAnswer = document.querySelector(".active");
  // As long as the selectedAnswer is not null, run this function
  if (selectedAnswer != null) {
    // Replace the corresponding slot based on index of answers array with the id of element
    // Since this activates at final page, only need to select currentIndex
    userAnswers[currentIndex] = selectedAnswer.id;
  } else {
    // If there is no answer, replace instead with null
    userAnswers[currentIndex] = null;
  }
};
const missedAnswersChecker = () => {
  // Loops through all indexes of answers array and check for nulls
  for (i = 0; i < userAnswers.length; i++) {
    if (userAnswers[i] === null) {
      // Adds 1 to missedAnswers if found
      missedAnswers++;
    }
  }
};
const doubleCheck = () => {
  // If there are missed answers, display confirmation page
  if (missedAnswers > 0) {
    document.getElementById("confirmation").style.display = "flex";
    document.getElementById(
      "prompt"
    ).innerHTML = `You are missing ${missedAnswers} answers. Do you still want to submit?`;
    // Creates transparent overlay that prevents interaction with background
    document.getElementById("overlay").style.zIndex = "1";
    document.getElementById("confirmation").style.zIndex = "2";
    // If yes button is clicked, go to results page
    document.getElementById("yes").addEventListener("click", () => {
      grader();
      resultsPage();
    });
    // If no if clicked, revert previous actions and missed answers since it will be recalculated
    document.getElementById("no").addEventListener("click", () => {
      document.getElementById("confirmation").style.display = "none ";
      document.getElementById("prompt").innerHTML = "";
      document.getElementById("overlay").style.zIndex = "-1";
      document.getElementById("confirmation").style.zIndex = "0";
      missedAnswers = 0;
    });
  }
  // Otherwise go to results page
  else if (missedAnswers === 0) {
    grader();
    resultsPage();
  }
};
document.getElementById("submitbtn").addEventListener("click", () => {
  // Just to log selected answers on final index
  budgetLocalStorageFinal();
  // First calculates missed answers
  missedAnswersChecker();
  // Uses missed answers to see if there is need to show confirmation page
  doubleCheck();
});

// Restarts page
document.getElementById("restart").addEventListener("click", function reset() {
  location.reload();
});
