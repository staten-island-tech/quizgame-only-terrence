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
export { nextPage, submitBtn, budgetLocalStorageNext };
