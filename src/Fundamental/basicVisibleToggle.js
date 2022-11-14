let visible = false;

const showInfo = () => {
  visible = !visible;
  renderApp();
};

const appRoot = document.getElementById("app");

const renderApp = () => {
  const app = (
    <div>
      <button onClick={showInfo}>{visible ? 'Hide Details' : 'Show Details'}</button>
      {visible && (
        <div>
          <p>I am visible</p>
        </div>
      )}
    </div>
  );
  
  
  ReactDOM.render(app, appRoot);
}

renderApp();