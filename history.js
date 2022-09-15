const histories = document.getElementById("histories");

function addHistory(questionText, timeTaken, errorCount, typingSpeed) {
  const newRow = document.createElement("div");
  newRow.classList.add("card");

  newRow.innerHTML = `
  <h3 class="p-1">${questionText}</h3>
  <div>
  <p class="p-1">You took: <span class="bold">${Math.round(timeTaken)}</span> seconds</p>
  <p>Your Typing Speed: <span class="bold">${typingSpeed}</span> WpM</p>
  <p>You made <span class="bold red">${errorCount}</span> mistakes</p>
  </div>
  `;

  histories.appendChild(newRow);

  let previousTests = JSON.parse(localStorage.getItem("testHistory")) || [];
  previousTests.push({ questionText, timeTaken, errorCount, typingSpeed });
  localStorage.setItem("testHistory", JSON.stringify(previousTests));

  displayHistory();
}

function displayHistory() {
  histories.innerHTML = "";
  const previousTests = JSON.parse(localStorage.getItem("testHistory")) || [];

  previousTests.forEach((test) => {
    const newRow = document.createElement("div");
    newRow.classList.add("card");

    newRow.innerHTML = `
  <h3 class="p-1">${test.questionText}</h3>
  <p class="p-1">You took: <span class="bold">${Math.round(test.timeTaken)}</span> seconds</p>
    <p>Your Typing Speed: <span class="bold">${test.typingSpeed}</span> Wpm</p>
    <p>You made <span class="bold red">${test.errorCount}</span> mistakes</p>
  `;

    histories.appendChild(newRow);
  });
}
