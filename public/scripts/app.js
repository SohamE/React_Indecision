"use strict";

var app = {
  title: "Indecision App!",
  desc: "This is some info.",
  options: []
};

var formSubmit = function formSubmit(e) {
  e.preventDefault();

  var option = e.target.elements.option;
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
    renderApp();
  }
};

var removeAll = function removeAll() {
  app.options = [];
  renderApp();
};

var appRoot = document.getElementById("app");

var renderApp = function renderApp() {
  var template = React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      app.title
    ),
    React.createElement(
      "p",
      null,
      app.desc
    ),
    React.createElement(
      "p",
      null,
      app.options.length > 0 ? "Here are your options" : "There are no options"
    ),
    React.createElement(
      "p",
      null,
      app.options.length
    ),
    React.createElement(
      "button",
      { onClick: removeAll },
      "Remove All"
    ),
    React.createElement(
      "ol",
      null,
      React.createElement(
        "li",
        null,
        "Item One"
      ),
      React.createElement(
        "li",
        null,
        "Item Two"
      )
    ),
    React.createElement(
      "form",
      { onSubmit: formSubmit },
      React.createElement("input", { type: "text", name: "option" }),
      React.createElement("input", { type: "submit" })
    )
  );

  ReactDOM.render(template, appRoot);
};

renderApp();
