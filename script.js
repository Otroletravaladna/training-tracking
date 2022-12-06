const submit = document.querySelector("#submit");
const form = document.querySelector("form");
const tableBody = document.querySelector("tbody");

let expenses = [
    // {purchase: 'Boleto El Tio-Temple', place: 'Terminal', date: '2022-12-03', price: '500', payment: 'cash'}
];

function Purchase() {
    this.purchase = document.querySelector("#purchase").value;
    this.place = document.querySelector("#purchase-place").value;
    this.date = document.querySelector("#purchase-date").value;
    this.price = document.querySelector("#purchase-price").value;
    this.payment = document.querySelector("#payment").value;
}

Purchase.prototype.createRow = function() {
    let newRow = document.createElement("tr");
    let dataPur = document.createElement("td");
    let dataPlace = document.createElement("td");
    let dataDate = document.createElement("td");
    let dataEval = document.createElement("td");
    let dataPrice = document.createElement("td");
    tableBody.appendChild(newRow);
    newRow.append(dataPur, dataPlace, dataDate, dataEval, dataPrice);
    dataPur.textContent = this.purchase;
    dataPlace.textContent = this.place;
    dataDate.textContent = this.date;
    dataEval.textContent = "";
    dataPrice.textContent = this.price;
}

window.addEventListener("DOMContentLoaded", (e) =>{
    e.preventDefault();
    if (archive != null) {
        for(const item of archive){
            let newRow = document.createElement("tr");
            let dataPur = document.createElement("td");
            let dataPlace = document.createElement("td");
            let dataDate = document.createElement("td");
            let dataEval = document.createElement("td");
            let dataPrice = document.createElement("td");
            tableBody.appendChild(newRow);
            newRow.append(dataPur, dataPlace, dataDate, dataEval, dataPrice);
            dataPur.textContent = item.purchase;
            dataPlace.textContent = item.place;
            dataDate.textContent = item.date;
            dataEval.textContent = "";
            dataPrice.textContent = item.price;
        }
    }
})

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let newExpense = new Purchase();
    expenses.push(newExpense);
    newExpense.createRow();

    localStorage.setItem("ExpensesList", JSON.stringify(expenses));
})

let newObject = window.localStorage.getItem("ExpensesList");
let archive = (JSON.parse(newObject));
console.log(archive);


