function restockShelves(storageItemCount, restockPerTrip) {
  let tripNumber = 0;
  let restockInfo = "";

  while (storageItemCount > 0) {
    let itemsToRestock = Math.min(storageItemCount, restockPerTrip);
    storageItemCount -= itemsToRestock;
    tripNumber++;

    // Todo: Create a variable named `tripInfo` which stores the trip information in this format:
    // "Trip {tripNumber}: Restocked {itemsToRestock} items."
    let tripInfo =
      "Trip " + trips + ": " + "Restocked " + itemsToRestock + " items.";

    restockInfo += tripInfo;
  }

  return restockInfo;
}

module.exports = { restockShelves };
