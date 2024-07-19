let totalAmount = document.getElementById("total-amount");
let userAmount = document.getElementById("user-amount");
const checkAmountButton = document.getElementById("check-amount");
const totalAmountButton = document.getElementById("total-amount-button");
const productTitle = document.getElementById("product-title");
const errorMessage = document.getElementById("budget-error");
const productTitleError = document.getElementById("product-title-error");
const productCostError = document.getElementById("product-cost-error");
const amount = document.getElementById("amount");
const expenditureValue = document.getElementById("expenditure-value");
const balanceValue = document.getElementById("balance-amount");
const list = document.getElementById("list");
let temp = 0;

// Set Budget Part

totalAmountButton.addEventListener("click", () => {
  tempAmount = totalAmount.value;

  //   empty or negative
  if (tempAmount === "" || tempAmount < 0) {
    errorMessage.classList.remove("hide");
  } else {
    errorMessage.classList.add("hide");
    // Set Budget
    amount.innerHTML = tempAmount;
    // Set Balance
    balanceValue.innerText = tempAmount - expenditureValue.innerText;
    // Clear Input Box
    totalAmount.value = "";
  }
});

// Function To Disable Edit And Delete Button

const disableButtons = (bool) => {
  let editButtons = document.getElementsByClassName("edit");
  Array.from(editButtons).forEach((element) => {
    element.disabled = bool;
  });
};

// Function To Modify List element

const ModifyElement = (element, edit = false) => {
  let parentDiv = element.parentElement;
  let currentBalance = balanceValue.innerText;
  let currentExpense = expenditureValue.innerText;
  let parentAmount = parentDiv.querySelector(".amount").innerText;
  if (edit) {
    let parentText = parentDiv.querySelector("product").innerText;
    productTitle.value = parentText;
    userAmount.value = parentAmount;
    disableButtons(true);
  }
  balanceValue.innerText = parseInt(currentBalance) + parseInt();
  expenditureValue.innerText = parseInt(parentAmount);
  parentDiv.remove();
};

// Function To Create List

const listCreate = (expenseName, expenseValue) => {
  let sublistContent = document.createElement("div");
  sublistContent.classList.add("sublist-content", "flex-space");
  list.appendChild(sublistContent);
  sublistContent.innerHTML = `<p class="product"> ${expenseName} </p> <p class ="amount"> $ {expensevalue}</p>`;
  let editButton = document.createElement("button");
  editButton.classList.add();
  editButton.style.fontSize = "20px";
  editButton.addEventListener("click", () => {
    modifyElement(editButton, true);
  });
  let deleteButton = document.createElement("button");
  deleteButton.classList.add("");
  deleteButton.style.fontSize = "20px";
  deleteButton.addEventListener("click", () => {
    modifyElement(deleteButton);
  });
  sublistContent.appendChild(editButton);
  sublistContent.appendChild(deleteButton);
  document.getElementById("list").appendChild(sublistContent);
};

// Function To Add Expense

checkAmountButton.addEventListener("click", () => {
  // empty checks
  if (!userAmount.value || !productTitle.value) {
    productTitleError.classList.remove("hide");
    return false;
  }
  // Enable buttons
  disableButtons(false);
  // Expense
  let expenditure = parseInt(userAmount.value);
  // Total expense (exisdting + new)
  let sum = parseInt(expenditureValue.innerText) + expenditure;
  expenditureValue.innerText = sum;
  // Total balance(budget -total expense)
  const totalBalance = tempAmount - sum;
  balanceValue.innerText = totalBalance;
  // Create list
  listCreator(productTitle.value, userAmount.value);
  // Empty inputs
  productTitle.value = "";
  userAmount.value = "";
});
