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

export { recall };
