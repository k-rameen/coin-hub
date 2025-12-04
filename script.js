//coin total
function calculateCoinTotal() {
  let silverPrice = parseFloat(document.getElementById("userInput").value);

  if (isNaN(silverPrice)) {
    silverPrice = 0;
  }

  let rows = document.querySelectorAll(".content");

  rows.forEach(cell => {
    let silverContent = parseFloat(cell.textContent);
    let rowName = cell.dataset.row; 

    let total = silverContent*silverPrice;

    document.getElementById(rowName + "Price").innerText = "$" + total.toFixed(2);
  });
  //nickel total
  let nickelContent = parseFloat(document.getElementById("silverNickel").value);

  if (!isNaN(nickelContent)) {
    let nickelTotal = nickelContent*silverPrice;

    document.getElementById("nickelPrice").innerText = "$" + nickelTotal.toFixed(2);
  }
  //penny total
  let pennyContent = parseFloat(document.getElementById("silverPenny").value);

  if (!isNaN(pennyContent)) {
    let pennyTotal = pennyContent*silverPrice;

    document.getElementById("pennyPrice").innerText = "$" + pennyTotal.toFixed(2);
  }

  calculateSilverSum();
  calculateTotalPrice();
}

//sum totals

//weight sum
function calculateWeightSum() {
  const weightCells = document.querySelectorAll("tbody .weight")
  let sum = 0;

  weightCells.forEach(cell => {
    const value = parseFloat(cell.textContent);

    if (!isNaN(value)) {
      sum += value;
    }
  });

  document.getElementById("totalWeight").textContent = sum.toFixed(2) + " g";
}

//silver content sum
function calculateSilverSum() {
  const coin = document.querySelectorAll(".content")
  
  let sum = 0;

  coin.forEach(cell => {
    const value = parseFloat(cell.textContent);

    if (!isNaN(value)) {
      sum += value;
    }
  });

  const nickel = parseFloat(document.getElementById("silverNickel").value) || 0;
  const penny = parseFloat(document.getElementById("silverPenny").value) || 0;

  sum += nickel + penny;

  document.getElementById("totalSilver").textContent = sum.toFixed(2) + " g";
}

//total price 
function calculateTotalPrice() {
  const priceCells = document.querySelectorAll("tbody .price")
  let sum = 0;

  priceCells.forEach(cell => {
    const value = parseFloat(cell.textContent.replace("$",""));

    if (!isNaN(value)) {
      sum += value;
    }
  });

  document.getElementById("totalPrice").textContent = "$" + sum.toFixed(2);
}
