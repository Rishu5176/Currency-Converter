const BASE_URL =
  "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");

// Add currencies to dropdowns
for (let select of dropdowns) {
  for (let currCode in countryList) {
    let option = document.createElement("option");

    option.innerText = currCode;
    option.value = currCode;

    if (select.name === "from" && currCode === "USD") {
      option.selected = true;
    }

    if (select.name === "to" && currCode === "INR") {
      option.selected = true;
    }

    select.append(option);
  }

  select.addEventListener("change", (e) => {
    updateFlag(e.target);
  });
}

// Update exchange rate
const updateExchangeRate = async () => {
  let amount = document.querySelector(".amount input");

  if (amount.value === "" || amount.value < 1) {
    amount.value = 1;
  }

  let from = fromCurr.value.toLowerCase();
  let to = toCurr.value.toLowerCase();

  let URL = `${BASE_URL}/${from}.json`;

  try {
    let response = await fetch(URL);
    let data = await response.json();

    let rate = data[from][to];
    let finalAmount = amount.value * rate;

    msg.innerText =
      `${amount.value} ${fromCurr.value} = ${finalAmount.toFixed(2)} ${toCurr.value}`;

  } catch (error) {
    console.log("Error:", error);
    msg.innerText = "Unable to get exchange rate";
  }
};

// Update country flag
const updateFlag = (element) => {
  let currCode = element.value;
  let countryCode = countryList[currCode];

  let img = element.parentElement.querySelector("img");

  img.src = `https://flagsapi.com/${countryCode}/flat/64.png`;
};

// Convert button
btn.addEventListener("click", (e) => {
  e.preventDefault();
  updateExchangeRate();
});

// Run when page loads
window.addEventListener("load", () => {
  updateFlag(fromCurr);
  updateFlag(toCurr);
  updateExchangeRate();
});