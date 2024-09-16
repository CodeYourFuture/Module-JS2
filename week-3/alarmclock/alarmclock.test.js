
/* ======= TESTS - DO NOT MODIFY ===== 
There are some Tests in this file that will help you work out if your code is working.
*/

const path = require("path");
const { JSDOM } = require("jsdom");

let page = null;

beforeEach(async () => {
  page = await JSDOM.fromFile(path.join(__dirname, "index.html"), {
    resources: "usable",
    runScripts: "dangerously",
  });

  jest.useFakeTimers();

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
  jest.useRealTimers();
  page = null;
});



test("should set heading when button is clicked", () => {
  const heading = page.window.document.querySelector("#timeRemaining");
  const input = page.window.document.querySelector("#alarmSet");
  const button = page.window.document.querySelector("#set");

  input.value = "19";
  button.click();
  jest.runOnlyPendingTimers(); 

  expect(heading).toHaveTextContent("Time Remaining: 00:18");
});

test("should split values over 60 seconds into minutes and seconds", () => {
  const heading = page.window.document.querySelector("#timeRemaining");
  const input = page.window.document.querySelector("#alarmSet");
  const button = page.window.document.querySelector("#set");

  input.value = "119";
  button.click();
  jest.runOnlyPendingTimers(); 

  expect(heading).toHaveTextContent("Time Remaining: 01:58");});
