const removeFromArray = function(coll, ...removeItems) {
  const resultColl = [];
  for (let index = 0; index < coll.length; index++) {
    if (removeItems.includes(coll[index])) {
      continue;
    }
    resultColl.push(coll[index]);
  }
  return resultColl;
};

// Do not edit below this line
module.exports = removeFromArray;
