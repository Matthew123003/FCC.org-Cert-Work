function checkCashRegister(price, cash, cid) {
    const currencyUnits = [
          { name: "ONE HUNDRED", value: 100.00 },
          { name: "TWENTY", value: 20.00 },
          { name: "TEN", value: 10.00 },
          { name: "FIVE", value: 5.00 },
          { name: "ONE", value: 1.00 },
          { name: "QUARTER", value: 0.25 },
          { name: "DIME", value: 0.10 },
          { name: "NICKEL", value: 0.05 },
          { name: "PENNY", value: 0.01 }
      ];
  
      let changeDue = cash - price;
      let change = [];
      let cidTotal = 0;
  
      // Calculate total in cash drawer and create a map for quick lookup
      let cidMap = new Map(cid);
      for (let [unit, amount] of cid) {
          cidTotal += amount;
      }
      cidTotal = parseFloat(cidTotal.toFixed(2));
  
      // Exact change or insufficient funds check
      if (cidTotal < changeDue) {
          return { status: "INSUFFICIENT_FUNDS", change: [] };
      } else if (cidTotal === changeDue) {
          return { status: "CLOSED", change: cid };
      }
  
      // Calculate change
      for (let i = 0; i < currencyUnits.length; i++) {
          const { name, value } = currencyUnits[i];
          let amount = 0;
  
          while (cidMap.get(name) > 0 && changeDue >= value) {
              changeDue -= value;
              cidMap.set(name, cidMap.get(name) - value);
              amount += value;
              changeDue = parseFloat(changeDue.toFixed(2));
          }
  
          if (amount > 0) {
              change.push([name, amount]);
          }
      }
  
      // Check if changeDue is fully paid
      if (changeDue > 0) {
          return { status: "INSUFFICIENT_FUNDS", change: [] };
      }
  
      return { status: "OPEN", change: change };
  }