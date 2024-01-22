const path = require("path");
const taskFolderPath = path.resolve(__dirname, "task-02");
const { shoppingCart } = require(path.resolve(taskFolderPath, "app.js"));
const { displayItemInfo } = require(path.resolve(taskFolderPath, "task-02.js"));

describe("Shopping Cart Functions", () => {
  let initialCart;
  beforeEach(() => {
    initialCart = JSON.parse(JSON.stringify(shoppingCart));
  });

  test("ListItems function test - index is mentioned", () => {
    const consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});
    shoppingCart.forEach((item, index) => {
      displayItemInfo(item, index);
      try {
        expect(consoleSpy).toHaveBeenCalledWith(
          expect.stringContaining((index + 1).toString())
        );
      } catch (error) {
        throw new Error(
          `You haven't used the item number (${index + 1}) in your console log`
        );
      }
    });
    consoleSpy.mockRestore();
  });
  test("ListItems function test - name is mentioned", () => {
    const consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});
    shoppingCart.forEach((item, index) => {
      displayItemInfo(item, index);
      try {
        expect(consoleSpy).toHaveBeenCalledWith(
          expect.stringContaining(item.product.name)
        );
      } catch (error) {
        throw new Error(
          `You haven't used the product name (${item.product.name}) in your console log`
        );
      }
    });
    consoleSpy.mockRestore();
  });
  test("ListItems function test - price is mentioned", () => {
    const consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});
    shoppingCart.forEach((item, index) => {
      displayItemInfo(item, index);
      try {
        expect(consoleSpy).toHaveBeenCalledWith(
          expect.stringContaining(item.product.price.toString())
        );
      } catch (error) {
        throw new Error(
          `You haven't used the product name (${item.product.price}) in your console log`
        );
      }
    });
    consoleSpy.mockRestore();
  });
  test("ListItems function test - quantity is mentioned", () => {
    const consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});
    shoppingCart.forEach((item, index) => {
      displayItemInfo(item, index);
      try {
        expect(consoleSpy).toHaveBeenCalledWith(
          expect.stringContaining(item.quantity.toString())
        );
      } catch (error) {
        throw new Error(
          `You haven't used the quantity (${item.quantity}) in your console log`
        );
      }
    });
    consoleSpy.mockRestore();
  });
});
