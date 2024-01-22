// Your code here
const displayItemInfo = (item, index) => {
  console.log(
    `${index + 1}.) ${item.product.name} -- quantity: ${
      item.quantity
    } -- price:${item.product.price}`
  );
};

// Don't change this line:
module.exports = {
  displayItemInfo,
};
