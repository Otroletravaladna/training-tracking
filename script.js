const submit = document.querySelector("#submit");
const form = document.querySelector("form");
const tableBody = document.querySelector("tbody");

function Purchase() {
    this.purchase = document.querySelector("#purchase").value;
    this.place = document.querySelector("#purchase-place").value;
    this.date = document.querySelector("#purchase-date").value;
    this.evaluation = document.querySelector("#eval").value;
    this.payment = document.querySelector("#payment").value;
    this.price = document.querySelector("#purchase-price").value;
}

Purchase.prototype.createRow = function() {
    let newRow = document.createElement("tr");
    let dataPur = document.createElement("td");
    let dataPlace = document.createElement("td");
    let dataDate = document.createElement("td");
    let dataEval = document.createElement("td");
    let dataPay = document.createElement("td");
    let dataPrice = document.createElement("td");
    tableBody.appendChild(newRow);
    newRow.append(dataPur, dataPlace, dataDate, dataEval,dataPay, dataPrice);
    dataPur.textContent = this.purchase;
    dataPlace.textContent = this.place;
    dataDate.textContent = this.date;
    dataEval.textContent = this.evaluation;
    dataPrice.textContent = this.price;
    dataPay.textContent = this.payment;
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
            let dataPay = document.createElement("td");
            let dataPrice = document.createElement("td");
            tableBody.appendChild(newRow);
            newRow.append(dataPur, dataPlace, dataDate, dataEval, dataPay, dataPrice);
            dataPur.textContent = item.purchase;
            dataPlace.textContent = item.place;
            dataDate.textContent = item.date;
            dataEval.textContent = item.evaluation
            dataPrice.textContent = item.price;
            dataPay.textContent = item.payment;
        }
    }
})

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let newExpense = new Purchase();
    archive.push(newExpense);
    newExpense.createRow();

    localStorage.setItem("ExpensesList", JSON.stringify(archive));

  
})


let archive = JSON.parse(localStorage.getItem("ExpensesList")) || [];

const sum = archive.reduce((total, item) => {
    return total + Number(item.price);
}, 0);

const tfoot  = document.querySelector(".foot-row");
const sumColumn = document.createElement("td");
tfoot.appendChild(sumColumn);

sumColumn.textContent = sum;
