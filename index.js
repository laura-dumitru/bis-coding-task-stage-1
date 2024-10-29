const nyElement = document.getElementById("my-element2")
const christmasElement = document.getElementById("my-element")
const valentinesElement = document.getElementById("my-element3")

function calculateDaysUntil(date) {
  const today = new Date()
  // if date is in the past add 1 to fix the minus value
  if (date < today) {
    date.setFullYear(today.getFullYear() + 1)
  }
  return Math.round((date - today) / (1000 * 60 * 60 * 24))
}

function updateChristmasDate() {
  const christmasDay = new Date("2024-12-25")
  const nyDay = new Date("2025-01-01")
  const vDay = new Date("2024-02-14")

  // calling the function calculateDaysUntil to calculate the days from today to each target day and storing the result in a variable
  const daysUntilChristmas = calculateDaysUntil(christmasDay)
  const daysUntilNY = calculateDaysUntil(nyDay)
  const daysUntilValentines = calculateDaysUntil(vDay)

  christmasElement.innerText = daysUntilChristmas

  nyElement.innerText = daysUntilNY

  valentinesElement.innerText = daysUntilValentines
}

updateChristmasDate()
const headings = document.querySelectorAll("h2")

//Looping over all the headings and adding an event listener. On click each element is shown one at a time not all together
headings.forEach((heading, index) => {
  heading.addEventListener("click", () => {
    if (index === 0) {
      christmasElement.style.opacity = "1"
    } else if (index === 1) {
      nyElement.style.opacity = "1"
    } else {
      valentinesElement.style.opacity = "1"
    }
  })
})
