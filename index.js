const days = [
  "Dimanche",
  "Lundi",
  "Mardi",
  "Mercredi",
  "Jeudi",
  "Vendredi",
  "Samedi",
];
const months = [
  "Janvier",
  "Février",
  "Mars",
  "Avril",
  "Mai",
  "Juin",
  "Juillet",
  "Août",
  "Septembre",
  "Octobre",
  "Novembre",
  "Décembre",
];

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();
const dateTarget = new Date(tempYear, tempMonth, tempDay, 21, 00, 00);

const year = dateTarget.getFullYear();
const hours = dateTarget.getHours();
const mins = dateTarget.getMinutes();
const month = months[dateTarget.getMonth()];
const date = dateTarget.getDate();
const weekday = days[dateTarget.getDay()];

// intro
const idTarget = document.getElementById("date_target");
idTarget.textContent = `Attention il faut le nourrir avant le ${weekday} ${date} ${month} ${year} ${
  hours < 10 ? `0${hours}` : hours
}h${mins < 10 ? `0${mins}` : mins}`;
// conversion
const oneDay = 24 * 60 * 60 * 1000;
const oneHour = 60 * 60 * 1000;
const oneMinute = 60 * 1000;
// saisir les éléments
const daysTo = document.getElementById("day");
const hoursTo = document.getElementById("hour");
const minutesTo = document.getElementById("minute");
const secondsTo = document.getElementById("second");
const deadline = document.querySelector(".deadline");

setInterval(function countDown() {
  function format(value) {
    if (value > 9) {
      return value;
    } else {
      return (value = `0${value}`);
    }
  }
  const date = new Date();
  const inBetween = dateTarget.getTime() - date.getTime();
  const daysLeft = Math.floor(inBetween / oneDay);
  const hoursLeft = Math.floor((inBetween % oneDay) / oneHour);
  const minutesLeft = Math.floor(((inBetween % oneDay) % oneHour) / oneMinute);
  const secLeft = Math.floor(
    (((inBetween % oneDay) % oneHour) % oneMinute) / 1000
  );
  if (inBetween > 0) {
    const remainingTime = (daysTo.innerHTML = `<h3 class="value">${format(
      daysLeft
    )}</h3>`);
    hoursTo.innerHTML = `<h3 class="value">${format(hoursLeft)}</h3>`;
    minutesTo.innerHTML = `<h3 class="value">${format(minutesLeft)}</h3>`;
    secondsTo.innerHTML = `<h3 class="value">${format(secLeft)}</h3>`;
    return remainingTime;
  }
  if (inBetween < 0) {
    clearInterval(countDown);
    deadline.innerHTML = `<h4 class="expired">Le chien va bien devoir manger quelque chose</h4>`;
  }
}, 1000);
