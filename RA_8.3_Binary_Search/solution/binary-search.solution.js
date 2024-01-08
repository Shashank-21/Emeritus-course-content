function binarySearch(array, num) {
  let start = 0;
  let end = array.length - 1;
  let steps = 0;

  while (start <= end) {
    steps++;
    let mid = Math.floor((start + end) / 2);

    if (array[mid] === num) {
      return { index: mid, steps };
    } else if (array[mid] < num) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return { index: -1, steps };
}

if (typeof module !== "undefined") {
  module.exports = { binarySearch };
}
