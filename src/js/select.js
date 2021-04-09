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

export { allAnswers, unselect };
