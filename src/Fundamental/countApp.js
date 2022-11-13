let count = 0;

const addOne = () => {
  count++;
  console.log(count);
  renderCounterApp();
};
const minusOne = () => {
  count--;
  console.log(count);
  renderCounterApp();
};
const resetCount = () => {
  count = 0;
  console.log(count);
  renderCounterApp();
};

var appRoot = document.getElementById("app");

const renderCounterApp = () => {
  const templateTwo = (
    <div>
      <h1>Count: {count}</h1>
      <button id="addOne" onClick={addOne} className="button">
        +1
      </button>
      <button onClick={minusOne}>-1</button>
      <button onClick={resetCount}>reset</button>
    </div>
  );

  ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();