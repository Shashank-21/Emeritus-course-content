const { displayItemInfo } = require("./task-02.js");

const shoppingCart = [
  {
    product: {
      name: "Detergent",
      price: 10,
    },
    quantity: 2,
  },
  {
    product: {
      name: "Toothpaste",
      price: 4,
    },
    quantity: 4,
  },
  {
    product: {
      name: "Cereal",
      price: 12,
    },
    quantity: 2,
  },
];

const listItems = (shoppingCart) => {
  if (typeof displayItemInfo === "undefined") {
    console.log(shoppingCart);
    return;
  }
  shoppingCart.forEach(displayItemInfo);
};

console.clear();
console.log(
  "**********************************************************************"
);
console.log("Your shopping cart:\n");
console.log(shoppingCart);
console.log("");
console.log(
  "**********************************************************************"
);
console.log("");
console.log("Your shopping cart, just a bit nicer!:\n");
listItems(shoppingCart);
console.log("");
console.log(
  "**********************************************************************"
);

module.exports = {
  listItems,
  shoppingCart,
};
