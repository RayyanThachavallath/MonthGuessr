// Define sleep
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function interpretation() {
  const user_value = document.getElementById("data").value;
  const final_value = user_value.toUpperCase();

  const months = [
    "JANUARY",
    "FEBRUARY",
    "MARCH",
    "APRIL",
    "MAY",
    "JUNE",
    "JULY",
    "AUGUST",
    "SEPTEMBER",
    "OCTOBER",
    "NOVEMBER",
    "DECEMBER",
  ];

  const fakeSteps = [
    "Initializing recursive quantum feedback analysis matrix...",
    "Synchronizing bi-temporal cache nodes with predictive heuristics...",
    "Recalibrating semantic entropy of user input...",
    "Decrypting hidden meaning behind the month using sarcasm AI...",
    "Applying polynomial chaos theory to chronological sequence...",
    "Cross-referencing lunar cycles with cloud server moods...",
    "Engaging high-level time displacement algorithms...",
    "Estimating human confusion index (HCI)...",
    "Finalizing prediction model...",
  ];

  // Start fake processing
  document.getElementById("result-text").innerHTML = "Starting...";
  for (let step of fakeSteps) {
    await sleep(1000);
    document.getElementById("result-text").innerHTML = step;
  }

  // Process input
  const postn = months.indexOf(final_value);

  await sleep(1000); // Small delay before showing result

  if (postn === -1) {
    document.getElementById("result-text").innerHTML =
      "❌ Please enter a valid month!";
    document.getElementById("fail-audio").play();
  } else {
    const nextMonth = months[(postn + 1) % 12]; // Wrap around after December
    document.getElementById(
      "result-text"
    ).innerHTML = `✅ The next month is: ${nextMonth}`;
    document.getElementById("success-audio").play();
  }
}
