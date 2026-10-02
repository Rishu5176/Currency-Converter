# 💱 Currency Converter

A simple, responsive, and user-friendly **Currency Converter Web Application** built using **HTML, CSS, and JavaScript**.

The application allows users to enter an amount, select a source currency and a target currency, and retrieve the latest available exchange rate through a currency exchange API. Currency flags are automatically updated based on the selected currencies.

---

## 📌 Project Overview

The **Currency Converter** is a frontend web application designed to make currency conversion quick and easy.

Users can:

* Enter an amount to convert
* Select the currency they want to convert **from**
* Select the currency they want to convert **to**
* View the corresponding country flags
* Get the converted amount
* Receive an exchange-rate message dynamically

The project uses JavaScript to dynamically populate the currency dropdowns, fetch exchange-rate data from an external API, calculate the converted amount, and update the interface without reloading the page.

---

## ✨ Features

### 💰 Currency Conversion

Enter an amount and select two currencies to calculate the converted value.

Example:

```text
1 USD = 96 INR
```

The displayed result is dynamically generated using the exchange-rate data received from the API.

### 🌍 Multiple Currencies

The application provides a large list of currency codes through a JavaScript country-code mapping. For example:

```text
USD → US
INR → IN
EUR → FR
GBP → GB
JPY → JP
AUD → AU
CAD → CA
```

The mapping is used to associate currencies with their corresponding country codes.

### 🚩 Dynamic Country Flags

When the user changes a currency, JavaScript automatically changes the corresponding flag.

The application uses:

```text
https://flagsapi.com/
```

to display currency-related country flags.

### 🔄 Dynamic Currency Selection

The currency dropdowns are generated dynamically using the currency list instead of manually writing every `<option>` in HTML.

### ⚡ API-Based Exchange Rates

The application retrieves exchange-rate information using:

```text
https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies
```

JavaScript fetches the relevant currency data and extracts the exchange rate between the selected currencies.

### 📱 Responsive Interface

The application uses CSS Flexbox and responsive sizing to create a centered currency-converter interface.

---

## 🛠️ Technologies Used

| Technology       | Purpose                                                |
| ---------------- | ------------------------------------------------------ |
| **HTML5**        | Structure of the web application                       |
| **CSS3**         | Styling, layout, colors, spacing and responsive design |
| **JavaScript**   | Currency conversion logic and DOM manipulation         |
| **Currency API** | Fetching exchange-rate information                     |
| **Flags API**    | Displaying country flags                               |
| **Font Awesome** | Currency swap icon                                     |

The HTML page links the stylesheet, Font Awesome, country-code JavaScript file, and main JavaScript file.

---

## 📂 Project Structure

```text
Currency-Converter/
│
├── index.html
├── style.css
├── script.js
├── country_codes.js
└── README.md
```

### `index.html`

Contains the main structure of the application, including:

* Amount input
* From-currency dropdown
* To-currency dropdown
* Currency flags
* Exchange-rate message
* Conversion button

The main interface is contained inside a `.container` and uses a form for the conversion controls.

### `style.css`

Responsible for the visual appearance of the application, including:

* Centered layout
* Background color
* Container styling
* Input styling
* Dropdown layout
* Currency flags
* Conversion button
* Spacing and typography

For example, the converter container uses a white background, rounded corners, padding, and a defined width.

### `script.js`

Contains the main application logic:

* Loading currency options
* Handling currency selection
* Updating flags
* Fetching exchange rates
* Calculating converted amounts
* Displaying results
* Handling errors

The conversion function retrieves the selected currencies, calls the API, calculates the final amount, and updates the message displayed to the user.

### `country_codes.js`

Contains the currency-to-country-code mapping used to determine which flag should be displayed for each selected currency.

---

## ⚙️ How It Works

The application follows this basic flow:

```text
User enters amount
        ↓
Selects FROM currency
        ↓
Selects TO currency
        ↓
JavaScript gets currency codes
        ↓
Currency API is requested
        ↓
Exchange rate is retrieved
        ↓
Amount × Exchange Rate
        ↓
Converted amount displayed
```

---

## 🔍 JavaScript Functionality

### 1. Loading Currency Options

JavaScript selects all currency dropdowns:

```javascript
const dropdowns = document.querySelectorAll(".dropdown select");
```

It then loops through `countryList` and dynamically creates `<option>` elements.

---

### 2. Default Currencies

The application initially selects:

```text
FROM → USD
TO   → INR
```

This is configured when the dropdown options are created.

---

### 3. Fetching Exchange Rates

When the conversion button is clicked, the application obtains the selected currencies and creates an API URL:

```javascript
let URL = `${BASE_URL}/${from}.json`;
```

It then uses `fetch()` to retrieve the exchange-rate data.

---

### 4. Calculating the Result

The exchange rate is extracted from the API response:

```javascript
let rate = data[from][to];
```

The final amount is calculated using:

```javascript
let finalAmount = amount.value * rate;
```

The result is then displayed with two decimal places.

---

### 5. Updating Currency Flags

When the user changes a currency, the `updateFlag()` function:

1. Gets the selected currency code
2. Finds its country code
3. Builds the flag URL
4. Updates the `<img>` element

```javascript
let countryCode = countryList[currCode];

img.src = `https://flagsapi.com/${countryCode}/flat/64.png`;
```

---

### 6. Error Handling

If the exchange-rate API request fails, the application catches the error and displays:

```text
Unable to get exchange rate
```

This is handled using `try...catch`.

---

## 🖥️ User Interface

The application contains:

```text
┌──────────────────────────────┐
│      Currency Converter      │
│                              │
│ Enter Amount                 │
│ ┌──────────────────────────┐ │
│ │           1              │ │
│ └──────────────────────────┘ │
│                              │
│  FROM       ⇄        TO      │
│  🇺🇸 USD             🇮🇳 INR │
│                              │
│  1 USD = 96 INR              │
│                              │
│ ┌──────────────────────────┐ │
│ │   Get Exchange Rate       │ │
│ └──────────────────────────┘ │
└──────────────────────────────┘
```

The actual HTML includes the amount field, two currency selectors, flags, exchange-rate message, and conversion button.

---

## 🚀 How to Run the Project

### Step 1: Clone the Repository

```bash
git clone YOUR_REPOSITORY_URL
```

### Step 2: Open the Project

```bash
cd Currency-Converter
```

### Step 3: Open the Application

Simply open:

```text
index.html
```

in your web browser.

You can also use **Live Server** in Visual Studio Code for a better development experience.

---

## 📋 Example

Suppose the user enters:

```text
Amount: 100
From: USD
To: INR
```

The application retrieves the current available USD exchange-rate data and calculates:

```text
100 USD = [calculated amount] INR
```

The result is displayed dynamically on the page.

---

## 🧠 Concepts Practiced

This project helped practice several important frontend development concepts:

* HTML forms
* CSS Flexbox
* Responsive layouts
* JavaScript DOM manipulation
* JavaScript events
* `fetch()` API
* Async/Await
* JSON data handling
* Dynamic HTML element creation
* Template literals
* Object/property access
* Error handling with `try...catch`
* Working with external APIs

---

## 🔮 Future Improvements

Possible improvements for future versions include:

* 🔄 Add a dedicated currency swap button
* 📊 Add historical exchange-rate charts
* 🕒 Add historical currency conversion
* ⭐ Save frequently used currency pairs
* 🌙 Add dark mode
* 📱 Further improve mobile responsiveness
* 💾 Store the last selected currencies using `localStorage`
* 🧮 Add conversion history
* 🔔 Display API/update timestamps
* 🌐 Add more advanced currency search functionality

---

## 🎯 Learning Objective

The main objective of this project was to build a practical JavaScript application while learning how frontend applications communicate with external APIs.

It demonstrates how **HTML, CSS, and JavaScript can be combined with an external API to create a dynamic real-world web application**.

---

## 👨‍💻 Author

**Rishu Kumar Rana**

B.Tech Computer Science & Engineering Graduate

Interested in:

* Web Development
* JavaScript
* Data Analytics
* Python
* Data Science

---

## ⭐ If You Like This Project

If you found this project useful or interesting, consider giving the repository a ⭐ on GitHub.

---

## 📄 License

This project is created for **learning and educational purposes**.
