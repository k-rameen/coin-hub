//loonie
function calculateLoonieTotal() {
  let total = document.getElementById("userInput1").value;
  total = parseFloat(total);
  
  let silverPrice = document.getElementById("content1").innerText;
  silverPrice = parseFloat(silverPrice);

  let totalPrice = total*silverPrice;

  document.getElementById("looniePrice").innerText = "$" + totalPrice.toFixed(2);
}

//fifty cents
function calculateFiftyTotal() {
  let total = document.getElementById("userInput2").value;
  total = parseFloat(total);

  let silverPrice = document.getElementById("content2").innerText;
  silverPrice = parseFloat(silverPrice);

  let totalPrice = total*silverPrice;

  document.getElementById("fiftyPrice").innerText = "$" + totalPrice.toFixed(2);
}

//quarter
function calculateQuarterTotal() {
  let total = document.getElementById("userInput3").value;
  total = parseFloat(total);

  let silverPrice = document.getElementById("content3").innerText;
  silverPrice = parseFloat(silverPrice);

  let totalPrice = total*silverPrice;

  document.getElementById("quarterPrice").innerText = "$" + totalPrice.toFixed(2);
}

//dime
function calculateDimeTotal() {
  let total = document.getElementById("userInput4").value;
  total = parseFloat(total);

  let silverPrice = document.getElementById("content4").innerText;
  silverPrice = parseFloat(silverPrice);

  let totalPrice = total*silverPrice;

  document.getElementById("dimePrice").innerText = "$" + totalPrice.toFixed(2);
}

//nickel
function calculateNickelTotal() {
  let silverPrice = document.getElementById("silverNickel").value;
  silverPrice = parseFloat(silverPrice);
  
  let total = document.getElementById("userInput5").value;
  total = parseFloat(total);

    let totalPrice = total*silverPrice;

  document.getElementById("nickelPrice").innerText = "$" + totalPrice.toFixed(2);
}

//penny
function calculatePennyTotal() {
  let total = document.getElementById("userInput6").value;
  total = parseFloat(total);

  let silverPrice = document.getElementById("silverPenny").value;
  silverPrice = parseFloat(silverPrice);

  let totalPrice = total*silverPrice;

  document.getElementById("pennyPrice").innerText = "$" + totalPrice.toFixed(2);
}
