const path = require("path");
const hanoiPath = path.resolve(__dirname, "../task-01/task-01.js");

const { moveDisks, hanoi, towers } = require(hanoiPath);
describe("Towers of Hanoi", () => {
  beforeEach(() => {
    towers.A.tower = [4, 3, 2, 1];
    towers.B.tower = [];
    towers.C.tower = [];
  });

  test("correctly solves the puzzle for 4 discs", () => {
    try {
      hanoi(moveDisks, towers);
      expect(towers.A.tower).toEqual([]);
      expect(towers.B.tower).toEqual([]);
      expect(towers.C.tower).toEqual([4, 3, 2, 1]);
    } catch (error) {
      throw new Error("The disks are not in the right tower!");
    }
  });

  test("leaves all towers empty except for target tower", () => {
    try {
      hanoi(moveDisks, towers);
      expect(towers.A.tower.length).toBe(0);
      expect(towers.B.tower.length).toBe(0);
      expect(towers.C.tower.length).toBe(4);
    } catch (error) {
      throw new Error("The disks are not in the right tower!");
    }
  });
});
