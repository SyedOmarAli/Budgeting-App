// Variables declaration
let userBgt = document.getElementById("user-bgt"); // input field for entering budget
let setBgt = document.getElementById("set-bgt"); // button for storing budget
let ctgDesc = document.getElementById("ctg-desc"); // input field for category desc
let ctgAmnt = document.getElementById("ctg-amnt"); // input field for category amount
let setExpense = document.getElementById("set-exp"); // button for setting expense
let expAmnt = document.getElementById("exp-amnt"); // total budget will be printed here
let desc = document.getElementById("desc");
let amount = document.getElementById("amount"); 
let totalExpense = document.getElementById("t-exp");

setBgt.onclick = function (event) {
    event.preventDefault();
    if (userBgt.value !== "") {
        localStorage.setItem("userBgt", userBgt.value);

    }
    else {
        alert("Enter Budget amount");
    }
    expAmnt.innerHTML = localStorage.getItem("userBgt");
}



setExpense.onclick = function (event) {
    event.preventDefault();
    if (ctgDesc.value !== "" && ctgAmnt.value !== "") {
        localStorage.setItem("ctgDesc", ctgDesc.value);
        localStorage.setItem("ctgAmnt", ctgAmnt.value);
    }
    else {
        alert("Cannot Submit");
    }

    for(let i = 0; i < localStorage.length; i++) {
        localStorage.setItem("ctgDesc", ctgDesc.value);
        localStorage.setItem("ctgAmnt", ctgAmnt.value);
    }
     

    desc.innerHTML = localStorage.getItem("ctgDesc");
    amount.innerHTML = localStorage.getItem("ctgAmnt");
    totalExpense.innerHTML = localStorage.getItem("ctgAmnt"); 
}

