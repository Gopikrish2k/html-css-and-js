const btnEl = document.getElementById("btn");
const birthdayEl = document.getElementById("birthday");
const resultEl = document.getElementById("result");

function calculateAge() {
  const birthdayValue = birthdayEl.value;
  if (birthdayValue === "") {
    alert("Please enter your birthday");
  } else {
    const { years, months, days } = getAge(birthdayValue);
    const ageMessage = `Your age is ${years} ${years > 1 ? "years" : "year"}, ${months} ${months > 1 ? "months" : "month"}, and ${days} ${days > 1 ? "days" : "day"} old.`;
    resultEl.innerText = ageMessage;
    alert(ageMessage);
  }
}

function getAge(birthdayValue) {
  const currentDate = new Date();
  const birthdayDate = new Date(birthdayValue);
  let years = currentDate.getFullYear() - birthdayDate.getFullYear();
  let months = currentDate.getMonth() - birthdayDate.getMonth();
  let days = currentDate.getDate() - birthdayDate.getDate();

  if (days < 0) {
    months--;
    days += new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  return { years, months, days };
}

btnEl.addEventListener("click", calculateAge);
