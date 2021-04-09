import { DOMSelectors } from "./Dom";
import {
  unselect,
  recall,
  start,
  load,
  nextPage,
  submitBtn,
  budgetLocalStorageBack,
  budgetLocalStorageNext,
  budgetLocalStorageFinal,
  goBack,
  goodLooks,
  doubleCheck,
} from "./functions";

// IIFE that runs game
(() => {
  DOMSelectors.startButton.addEventListener("click", () => {
    start();
    load();
  });
  DOMSelectors.nextButton.addEventListener("click", () => {
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
  DOMSelectors.previousButton.addEventListener("click", () => {
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
  DOMSelectors.submitButton.addEventListener("click", () => {
    // Just to log selected answers on final index
    budgetLocalStorageFinal();
    // Uses missed answers to see if there is need to show confirmation page
    doubleCheck();
  });
  // Restarts page
  DOMSelectors.restartButton.addEventListener("click", function reset() {
    location.reload();
  });
})();
