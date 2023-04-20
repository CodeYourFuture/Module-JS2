const path = require("path");
const { JSDOM } = require("jsdom");
const { default: userEvent } = require("@testing-library/user-event");
const { timeStamp } = require("console");

let page = null;

beforeEach(async () => {
  page = await JSDOM.fromFile(path.join(__dirname, "index.html"), {
    resources: "usable",
    runScripts: "dangerously",
  });

  // do this so students can use element.innerText which jsdom does not implement
  Object.defineProperty(page.window.HTMLElement.prototype, "innerText", {
    get() {
      return this.textContent;
    },
    set(value) {
      this.textContent = value;
    },
  });

  return new Promise((res) => {
    page.window.document.addEventListener("load", res);
  });
});

afterEach(() => {
  page = null;
});

describe("Reading list", () => {
  test("renders a list of books with author and title", () => {
    const readingList = page.window.document.querySelector("ul");

    expect(readingList).toHaveTextContent("The Design of Everyday Things");
    expect(readingList).toHaveTextContent("Don Norman");

    expect(readingList).toHaveTextContent("The Most Human Human");
    expect(readingList).toHaveTextContent("Brian Christian");

    expect(readingList).toHaveTextContent("The Pragmatic Programmer");
    expect(readingList).toHaveTextContent("Andrew Hunt");
  });
  test("each book in the list has an image", () => {
    const list = page.window.document.querySelectorAll("li");
    list.forEach((listItem) => {
      expect(listItem.querySelector("img")).toBeInTheDocument();
    });
  });
  test("background color changes depending on whether book has been read", () => {
    const firstLi = page.window.document.querySelector("ul> :first-child");
    expect(firstLi).toHaveStyle({ backgroundColor: "red" });

    const secondLi = page.window.document.querySelector("ul> :nth-child(2)");
    expect(secondLi).toHaveStyle({ backgroundColor: "green" });

    const thirdLi = page.window.document.querySelector("ul > :nth-child(3)");
    expect(thirdLi).toHaveStyle({ backgroundColor: "green" });
  });
});
