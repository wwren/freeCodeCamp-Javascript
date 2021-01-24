function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  var result = [];
  arr.forEach(obj => result.push({name: obj.name, orbitalPeriod: convert(earthRadius, obj.avgAlt, GM)}));
  return result;
}

function convert(earthRadius, planetRadius, GM) {
  return Math.round(2*Math.PI*Math.sqrt(Math.pow(earthRadius+planetRadius, 3)/GM))
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);


