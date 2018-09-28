function merge(lSplit, rSplit) {
  let merged = [];
  let lLength = lSplit.length;
  let rLength = rSplit.length;
  let lIndex = 0;
  let rIndex = 0;

  while (lIndex < lLength && rIndex < rLength) {
    if (lSplit[lIndex] < rSplit[rIndex]) {
      merged.push(lSplit[lIndex]);
      lIndex += 1;
    } else {
      merged.push(rSplit[rIndex]);
      rIndex += 1;
    };
  };

  return merged.concat(lSplit.slice(lIndex)).concat(rSplit.slice(rIndex));
};

function mergeSort(list) {
  const length = list.length;
  if (length < 2) {
    return list;
  } 
  const middle = Math.floor(list.length / 2);
  const lSplit = list.slice(0, middle);
  const rSplit = list.slice(middle);

  return merge(mergeSort(lSplit), mergeSort(rSplit));
};

module.exports = {merge,mergeSort}