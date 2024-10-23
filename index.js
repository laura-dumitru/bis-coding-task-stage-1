function calculateDaysUntil (date){
  const today = new Date();
if (date < today) {
  date.setFullYear(today.getFullYear() + 1);
}
return Math.round((date - today) / (1000 * 60 * 60 * 24));
  }
 
function updateChristmasDate() {
  const christmasDay = new Date("2024-12-25");
  const nyDay = new Date("2025-01-01");
  const vDay = new Date("2024-02-14");

  const daysUntilChristmas = calculateDaysUntil(christmasDay);
  const daysUntilNY = calculateDaysUntil(nyDay);
  const daysUntilValentines = calculateDaysUntil(vDay);

  const christmasElement = document.getElementById("my-element");
  christmasElement.innerText = daysUntilChristmas;
  
  const nyElement = document.getElementById("my-element2");
  nyElement.innerText = daysUntilNY;
  
  const valentinesElement = document.getElementById("my-element3");
  valentinesElement.innerText = daysUntilValentines;
  
}

updateChristmasDate();
