function checkCashRegister(price, cash, cid) {
  const currencyUnits = [
    ["PENNY", 0.01],
    ["NICKEL", 0.05],
    ["DIME", 0.1],
    ["QUARTER", 0.25],
    ["ONE", 1],
    ["FIVE", 5],
    ["TEN", 10],
    ["TWENTY", 20],
    ["ONE HUNDRED", 100]
  ];

  let changeDue = cash - price;
  let changeArray = [];
  let totalCID = 0;

  for (let i = 0; i < cid.length; i++) {
    totalCID += cid[i][1];
  }

  if (totalCID < changeDue) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  } else if (totalCID === changeDue) {
    return { status: "CLOSED", change: cid };
  } else {
    for (let i = currencyUnits.length - 1; i >= 0; i--) {
      const currencyName = currencyUnits[i][0];
      const currencyValue = currencyUnits[i][1];
      const availableCurrency = cid[i][1];
      
      if (changeDue >= currencyValue) {
        const maxCount = Math.floor(availableCurrency / currencyValue);
        const count = Math.min(Math.floor(changeDue / currencyValue), maxCount);
        const changeAmount = count * currencyValue;

        if (count > 0) {
          changeArray.push([currencyName, changeAmount]);
          changeDue -= changeAmount;
          changeDue = Math.round(changeDue * 100) / 100; // Round to handle precision errors
        }
      }
    }

    if (changeDue > 0) {
      return { status: "INSUFFICIENT_FUNDS", change: [] };
    }

    return { status: "OPEN", change: changeArray };
  }
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);