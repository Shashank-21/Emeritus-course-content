It is time to restock the shelves. In this task, you will simulate the process of restocking shelves using the `while` loop.

{Check It!|assessment}(test-812468280)

|||guidance

```js
function restockShelves(storageItemCount, restockPerTrip) {
  let trips = 0;
  let restockInfo = "";

  while (storageItemCount > 0) {
    let itemsToRestock = Math.min(storageItemCount, restockPerTrip);
    storageItemCount -= itemsToRestock;
    trips++;
    restockInfo +=
      "Trip " + trips + ": " + "Restocked " + itemsToRestock + " items.";
  }

  return restockInfo;
}

module.exports = { restockShelves };
```

|||
