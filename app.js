let payDate = document.getElementById("pay_date");
let ctgDesc = document.getElementById("ctg_desc");
let category = document.getElementById("category");
let expAmount = document.getElementById("exp_amount");
let budgetAmount = document.getElementById("budget_amount");

let totalBudget = document.getElementById("t_budget");
let totalExpense = document.getElementById("t_expense");
let remBalance = document.getElementById("r_balance");
let delBtn = document.getElementById("del_btn");





function submitBudget() {
  if (budgetAmount.value !== "") {
    totalBudget.innerHTML = budgetAmount.value;
  }
  else {
    alert("Enter budget")
  }
  budgetAmount.value = "";

}

function submitDetail() {
  if (payDate.value !== "" && ctgDesc.value !== "" && category.value !== "" && expAmount.value !== "") {
    let table = document.getElementById("table");
    let totalExpAmnt = parseInt(totalExpense.textContent) || 0; // Get the current total expense amount or set to 0 if empty
    let expenseAmnt = parseInt(expAmount.value); // Get the new expense amount
    totalExpense.textContent = totalExpAmnt + expenseAmnt; // Update the total expense amount
    let totalBgt = parseInt(totalBudget.textContent);
    remBalance.textContent = totalBgt - totalExpense.textContent;
    table.innerHTML += `
      <tbody>
        <tr>
          <th scope="row">${category.value}</th>
          <td>${ctgDesc.value}</td>
          <td>${expenseAmnt}</td>
          <td>${payDate.value} <img src="./delete.png" alt="delete" id="del_btn" class="delete-btn"> </td>
        </tr>
      </tbody>
      </table>
    `;
  } else {
    alert("Please enter details properly");
  }

  category.value = "";
  ctgDesc.value = "";
  expAmount.value = "";
  payDate.value = "";
}


table.addEventListener("click", function (event) {
  if (event.target.classList.contains("delete-btn")) {
    deleteExpense(event.target);
  }
});

function deleteExpense(deleteButton) {
  let row = deleteButton.parentNode.parentNode;
  let amountCell = row.querySelector("td:nth-child(3)");
  let expenseAmnt = parseInt(amountCell.textContent);
  row.remove();

  let totalExpAmnt = parseInt(totalExpense.textContent) || 0;
  totalExpense.textContent = totalExpAmnt - expenseAmnt;
  let totalBgt = parseInt(totalBudget.textContent);
  remBalance.textContent = totalBgt - totalExpense.textContent;
}