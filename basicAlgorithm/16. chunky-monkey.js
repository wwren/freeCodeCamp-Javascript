function chunkArrayInGroups(arr, size) {
  let group = Math.ceil(arr.length /size);
  const storage = [];
  let j = 0;
  let numOfGroup = 1;
  while (group >= numOfGroup && j < arr.length) {
    let arrTemp = arr.slice(j, size*numOfGroup);
    storage.push(arrTemp);
    j += size;
    numOfGroup++;
  }
  return storage;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4);

