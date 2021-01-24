function checkCashRegister(price, cash, cid) {
  const lookup = [{"PENNY" : 0.01},
  {"NICKEL": 0.05},
  {"DIME": 0.1},
  {"QUARTER": 0.25},
  {"ONE": 1},
  {"FIVE": 5},
  {"TEN": 10},
  {"TWENTY": 20},
  {"ONE HUNDRED": 100}];

  lookup.sort((a, b) => parseFloat(Object.values(a)) > parseFloat(Object.values(b)) ? -1 : 1);

  const needNotes = lookup.findIndex(note => Object.values(note) <= cash - price);

  let availCid = cid.slice(0, cid.length - needNotes);

  let totalCid = 0;
  for (let note of availCid)
  {
    totalCid += note[1];
  }

  let change = cash - price;
  let changeCoins = [];

  if (totalCid < change)
  { 
    return {status: "INSUFFICIENT_FUNDS", change: []}
  } if (totalCid == change)
  {
    return {status: "CLOSED", change: cid};
  } else {
    for (let i = availCid.length - 1; i >= 0; i--)
    {
      let noteKey = lookup.find(note => Object.keys(note) == availCid[i][0]);
      let noteValue = Number(Object.values(noteKey));
      if (change >= noteValue)
      {
        let eachChange;

        if (change >= availCid[i][1])
        {
          eachChange = availCid[i][1];
        } 
        else 
        {
          console.log(change);
          eachChange = noteValue * Math.floor(change / noteValue);
          console.log(eachChange);
        }
        
        changeCoins.push([availCid[i][0], eachChange]);
        change = (change - eachChange).toFixed(2);

      }
    }

    return {status: "OPEN", change: changeCoins}
  }
}

checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])