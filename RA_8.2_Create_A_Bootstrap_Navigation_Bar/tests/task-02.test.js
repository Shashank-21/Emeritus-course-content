const fs = require("fs");
const path = require("path");
const { JSDOM } = require("jsdom");

describe("Restaurant Card Classes", () => {
  let document;

  beforeAll(() => {
    const htmlContent = fs.readFileSync(
      path.resolve(__dirname, "../task-02/index.html"), // Adjust the path as necessary
      "utf8"
    );
    const dom = new JSDOM(htmlContent);
    document = dom.window.document;
  });

  const restaurantIds = [
    "restaurant1",
    "restaurant2",
    "restaurant3",
    "restaurant4",
    "restaurant5",
  ];

  restaurantIds.forEach((id, index) => {
    describe(`Restaurant ${index + 1}`, () => {
      let restaurantEl;

      beforeAll(() => {
        restaurantEl = document.getElementById(id);
      });

      it(`should have the correct Tailwind CSS classes for ${id}`, () => {
        const expectedClasses = [
          "bg-white",
          "rounded-lg",
          "overflow-hidden",
          "shadow-lg",
          "p-4",
          "w-full",
        ];
        const missingClassList = [];

        expectedClasses.forEach((cls) => {
          if (!restaurantEl.classList.contains(cls)) {
            missingClassList.push(cls);
          }
        });

        if (missingClassList.length) {
          throw new Error(
            `Expected ${id} to have the Tailwind CSS classes: ${expectedClasses
              .map((cls) => `'${cls}'`)
              .join(", ")}. The classes missing are: ${missingClassList
              .map((cls) => `'${cls}'`)
              .join(", ")}.`
          );
        }
      });

      it(`should have an image with the correct Tailwind CSS classes in ${id}`, () => {
        const imgEl = restaurantEl.querySelector("img");
        const expectedImgClasses = ["w-full", "h-60", "object-cover"];
        const missingImgClassList = [];

        expectedImgClasses.forEach((cls) => {
          if (!imgEl.classList.contains(cls)) {
            missingImgClassList.push(cls);
          }
        });

        if (missingImgClassList.length) {
          throw new Error(
            `Expected ${id} to have an image with the correct Tailwind CSS classes: ${missingImgClassList
              .map((cls) => `'${cls}'`)
              .join(", ")}.`
          );
        }
      });

      it(`should have a heading with the correct Tailwind CSS classes in ${id}`, () => {
        const headingEl = restaurantEl.querySelector("h2");
        const expectedHeadingClasses = ["font-semibold", "text-xl", "mt-2"];
        const missingHeadingClassList = [];

        expectedHeadingClasses.forEach((cls) => {
          if (!headingEl.classList.contains(cls)) {
            missingHeadingClassList.push(cls);
          }
        });

        if (missingHeadingClassList.length) {
          throw new Error(
            `Expected ${id} to have a heading with the correct Tailwind CSS classes: ${missingHeadingClassList
              .map((cls) => `'${cls}'`)
              .join(", ")}.`
          );
        }
      });

      it(`should have a paragraph with the correct Tailwind CSS classes in ${id}`, () => {
        const paragraphEl = restaurantEl.querySelector("p");
        try {
          expect(paragraphEl.classList).toContain("text-gray-600");
        } catch (error) {
          throw new Error(
            `Expected ${id} to have a paragraph with the class 'text-gray-600'`
          );
        }
      });
    });
  });
});
