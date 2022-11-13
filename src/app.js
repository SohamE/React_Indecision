const app = {
  title: "Indecision App!",
  desc: "This is some info.",
  options: [],
};

const formSubmit = (e) => {
  e.preventDefault();

  const option = e.target.elements.option;
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
    renderApp();
  }
};

const removeAll = () => {
    app.options = [];
    renderApp();
}

var appRoot = document.getElementById("app");

const renderApp = () => {
  let template = (
    <div>
      <h1>{app.title}</h1>
      <p>{app.desc}</p>
      <p>
        {app.options.length > 0
          ? "Here are your options"
          : "There are no options"}
      </p>
      <p>{app.options.length}</p>
      <button onClick={removeAll}>Remove All</button>
      <ol>
        <li>Item One</li>
        <li>Item Two</li>
      </ol>
      <form onSubmit={formSubmit}>
        <input type="text" name="option" />
        <input type="submit" />
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
};

renderApp();
