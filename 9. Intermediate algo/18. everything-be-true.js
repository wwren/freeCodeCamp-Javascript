function truthCheck(collection, pre) {
  const falsy = ["" , NaN , undefined , false, null, 0];

  for (let obj of collection)
  {
    if (falsy.includes(obj[pre]))
    {
      return false;
    }
  }

  return true;
}

truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true}, {"name": "FastForward", "onBoat": null}], "onBoat")