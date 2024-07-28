const price = 19.5; // Example price
let cid = [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
];

const CURRENCY_UNIT = {
  "PENNY": 0.01,
  "NICKEL": 0.05,
  "DIME": 0.1,
  "QUARTER": 0.25,
  "ONE": 1,
  "FIVE": 5,
  "TEN": 10,
  "TWENTY": 20,
  "ONE HUNDRED": 100
};

document.getElementById('purchase-btn').addEventListener('click', () => {
  const cash = parseFloat(document.getElementById('cash').value);
  const changeDueElement = document.getElementById('change-due');

  if (cash < price) {
    alert("Customer does not have enough money to purchase the item");
  } else if (cash === price) {
    changeDueElement.textContent = "No change due - customer paid with exact cash";
  } else {
    const change = getChange(price, cash, cid);
    if (change.status === "INSUFFICIENT_FUNDS") {
      changeDueElement.textContent = "Status: INSUFFICIENT_FUNDS";
    } else if (change.status === "CLOSED") {
      changeDueElement.textContent = `Status: CLOSED ${formatChange(change.change)}`;
    } else {
      changeDueElement.textContent = `Status: OPEN ${formatChange(change.change)}`;
    }
  }
});

function getChange(price, cash, cid) {
  let changeDue = cash - price;
  let totalCid = cid.reduce((acc, curr) => acc + curr[1], 0).toFixed(2);

  if (Number(totalCid) < changeDue) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  let changeArray = cid.reverse().map(currency => {
    let currencyValue = CURRENCY_UNIT[currency[0]];
    let currencyAmount = 0;

    while (changeDue >= currencyValue && currency[1] > 0) {
      changeDue = (changeDue - currencyValue).toFixed(2);
      currency[1] -= currencyValue;
      currencyAmount += currencyValue;
    }

    return [currency[0], currencyAmount];
  }).filter(currency => currency[1] > 0);

  if (changeDue > 0) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  let newTotalCid = cid.reduce((acc, curr) => acc + curr[1], 0).toFixed(2);
  if (newTotalCid == 0) {
    return { status: "CLOSED", change: changeArray.reverse() };
  }

  return { status: "OPEN", change: changeArray };
}

function formatChange(changeArray) {
  return changeArray.map(currency => `${currency[0]}: $${currency[1].toFixed(2)}`).join(' ');
}
