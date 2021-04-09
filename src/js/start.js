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
export { start, load };
