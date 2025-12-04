//loonie
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

  let nickelContent = parseFloat(document.getElementById("silverNickel").value);

  if (!isNaN(nickelContent)) {
    let nickelTotal = nickelContent*silverPrice;

    document.getElementById("nickelPrice").innerText = "$" + nickelTotal.toFixed(2);
  }

  let pennyContent = parseFloat(document.getElementById("silverPenny").value);

  if (!isNaN(pennyContent)) {
    let pennyTotal = pennyContent*silverPrice;

    document.getElementById("pennyPrice").innerText = "$" + pennyTotal.toFixed(2);
  }
}
  
