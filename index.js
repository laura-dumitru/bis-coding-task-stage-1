function updateChristmasDate() {
  const today = new Date();
  const christmasDay = new Date("2024-12-25");

  const daysUntilChristmas = Math.round((christmasDay - today) / (1000 * 60 * 60 * 24));

  const christmasElement = document.getElementById("my-element");
  christmasElement.innerText = daysUntilChristmas;
}

function updateNYDate() {
  const today = new Date();
  const nyDay = new Date("2025-01-01");

  const daysUntilNY = Math.round((nyDay - today) / (1000 * 60 * 60 * 24));

  const nyElement = document.getElementById("my-element2");
  nyElement.innerText = daysUntilNY;
}

updateChristmasDate();
updateNYDate();
