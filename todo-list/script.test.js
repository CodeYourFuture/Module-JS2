const path = require("path");
const { JSDOM } = require("jsdom");
const { default: userEvent } = require("@testing-library/user-event");

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

describe("Mandatory tasks", () => {
  test.only("displays the initial list of todos", () => {
    const todoList = page.window.document.querySelector("ul");
    const listItems = [...page.window.document.querySelectorAll("li")];

    expect(todoList).toHaveTextContent("wash the dishes");
    expect(todoList).toHaveTextContent("do the shopping");
    expect(listItems.length).toBe(2);
  });

  test.only("each todo has a delete and tick icon", () => {
    const listItems = [...page.window.document.querySelectorAll("li")];

    listItems.forEach((_, index) => {
      const tickIcon = page.window.document.querySelector(
        `li:nth-child(${index + 1}) i.fa-check`
      );
      const binIcon = page.window.document.querySelector(
        `li:nth-child(${index + 1}) i.fa-trash`
      );

      expect(tickIcon).toBeInTheDocument();
      expect(binIcon).toBeInTheDocument();
    });
  });

  test.only("can add a new todo to the list", () => {
    const todoList = page.window.document.querySelector("ul");
    const button = page.window.document.querySelector("button");
    const input = page.window.document.querySelector("input");
    const todoText = "Do CYF coursework";

    userEvent.type(input, todoText);
    userEvent.click(button);

    expect(todoList).toHaveTextContent(todoText);

    const listItems = [...page.window.document.querySelectorAll("li")];
    expect(listItems.length).toBe(3);
  });

  test.only("can strike through a todo when it is completed", () => {
    const li = page.window.document.querySelector("li");
    const tickIcon = page.window.document.querySelector("li i");

    userEvent.click(tickIcon);

    expect(li).toHaveStyle({
      textDecoration: "line-through",
    });
  });

  test.only("can undo a strikethrough on a todo", () => {
    const li = page.window.document.querySelector("li");
    const tickIcon = page.window.document.querySelector("li i");
    userEvent.click(tickIcon);

    expect(li).toHaveStyle({
      textDecoration: "line-through",
    });

    userEvent.click(tickIcon);

    expect(li).not.toHaveStyle({
      textDecoration: "line-through",
    });
  });

  test.only("can delete a todo from the list", () => {
    const todoList = page.window.document.querySelector("ul");
    const button = page.window.document.querySelector("button");
    const input = page.window.document.querySelector("input");
    const todoText = "Do CYF coursework";

    userEvent.type(input, todoText);
    userEvent.click(button);

    expect(todoList).toHaveTextContent(todoText);
    const listItems = [...page.window.document.querySelectorAll("li")];
    expect(listItems.length).toBe(3);

    const binIcon = page.window.document.querySelector(
      "li:nth-child(3) i.fa-trash"
    );
    userEvent.click(binIcon);

    expect(todoList).not.toHaveTextContent(todoText);
  });
});

describe("Advanced tasks", () => {
  test.only("can remove all completed todos", () => {
    const todoList = page.window.document.querySelector("ul");
    const button = page.window.document.querySelector("button");
    const input = page.window.document.querySelector("input");

    userEvent.type(input, "do CYF coursework");
    userEvent.click(button);

    userEvent.clear(input);
    userEvent.type(input, "make a sandwich");
    userEvent.click(button);

    userEvent.clear(input);
    userEvent.type(input, "take a break");
    userEvent.click(button);

    const tickIcon2 = page.window.document.querySelector(
      "li:nth-child(2) i.fa-check"
    );
    userEvent.click(tickIcon2);
    const tickIcon4 = page.window.document.querySelector(
      "li:nth-child(4) i.fa-check"
    );
    userEvent.click(tickIcon4);

    const removeAllCompletedButton = page.window.document.querySelector(
      "#remove-all-completed"
    );
    userEvent.click(removeAllCompletedButton);

    const listItems = [...page.window.document.querySelectorAll("li")];
    expect(listItems.length).toBe(3);
    expect(todoList).toHaveTextContent("wash the dishes");
    expect(todoList).toHaveTextContent("do CYF coursework");
    expect(todoList).toHaveTextContent("take a break");

    expect(todoList).not.toHaveTextContent("do the shopping");
    expect(todoList).not.toHaveTextContent("make a sandwich");
  });
});
