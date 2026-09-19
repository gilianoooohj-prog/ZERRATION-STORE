import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return (/*#__PURE__*/
    React.createElement("main", null, /*#__PURE__*/
    React.createElement("header", null, /*#__PURE__*/
    React.createElement("div", { class: "icon" }, "\u269B\uFE0F"), " Site Powered by React"
    )
    ));

}

const root = ReactDOM.createRoot(document.getElementById("app"));

root.render(/*#__PURE__*/React.createElement(App, null));
let buyerCount = 127;

const buyers = ["Acursio", "Rizky", "Fahmi", "Dimas", "Rafa", "Alvin"];

function showPurchaseNotification() {
  const notification = document.getElementById("purchaseNotification");
  const buyerName = document.getElementById("buyerName");

  const randomBuyer = buyers[Math.floor(Math.random() * buyers.length)];

  buyerName.textContent = randomBuyer;

  notification.classList.add("show");

  setTimeout(() => {
    notification.classList.remove("show");
  }, 4000);
}

function buyProduct() {
  buyerCount++;

  document.getElementById("buyerCount").textContent = buyerCount;

  showPurchaseNotification();
}

// Demo activity
setTimeout(showPurchaseNotification, 3000);

setInterval(() => {
  showPurchaseNotification();
}, 15000);