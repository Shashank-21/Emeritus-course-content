const fs = require("fs");
const path = require("path");
const { JSDOM } = require("jsdom");

describe("Navbar and NavLink Classes", () => {
  let document;

  beforeAll(() => {
    const htmlContent = fs.readFileSync(
      path.resolve(__dirname, "../index.html"),
      "utf8"
    );
    const dom = new JSDOM(htmlContent);
    document = dom.window.document;
  });

  it("should have the navbar class", () => {
    try {
      const navbar = document.querySelector(".navbar");
      expect(navbar.classList).toContain("navbar");
    } catch (error) {
      throw new Error('Expected navbar to have class "navbar"');
    }
  });

  it("should have the navbar-expand-lg class", () => {
    try {
      const navbar = document.querySelector(".navbar");
      expect(navbar.classList).toContain("navbar-expand-lg");
    } catch (error) {
      throw new Error('Expected navbar to have class "navbar-expand-lg"');
    }
  });

  it("should have the navbar-light class", () => {
    try {
      const navbar = document.querySelector(".navbar");
      expect(navbar.classList).toContain("navbar-light");
    } catch (error) {
      throw new Error('Expected navbar to have class "navbar-light"');
    }
  });

  it("should have the bg-light class", () => {
    try {
      const navbar = document.querySelector(".navbar");
      expect(navbar.classList).toContain("bg-light");
    } catch (error) {
      throw new Error('Expected navbar to have class "bg-light"');
    }
  });

  it("should have a container-fluid class within the navbar", () => {
    try {
      const containerFluid = document.querySelector(".navbar .container-fluid");
      expect(containerFluid.classList).toContain("container-fluid");
    } catch (error) {
      throw new Error(
        'Expected container within navbar to have class "container-fluid"'
      );
    }
  });

  it("should have a navbar-brand with correct ID", () => {
    try {
      const navbarBrand = document.querySelector(".navbar-brand");
      expect(navbarBrand.id).toBe("homeLink");
    } catch (error) {
      throw new Error('Expected navbar-brand to have ID "homeLink"');
    }
  });

  it("should have the first nav-link with correct ID", () => {
    try {
      const aboutLink = document.querySelector("#aboutLink");
      expect(aboutLink.classList).toContain("nav-link");
    } catch (error) {
      throw new Error('Expected the first nav-link to have ID "aboutLink"');
    }
  });

  it("should have the second nav-link with correct ID", () => {
    try {
      const menuLink = document.querySelector("#menuLink");
      expect(menuLink.classList).toContain("nav-link");
    } catch (error) {
      throw new Error('Expected the second nav-link to have ID "menuLink"');
    }
  });
});
