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
export { goBack, goodLooks, budgetLocalStorageBack };
