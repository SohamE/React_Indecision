let template = (
  <div>
    <h1>Indecision App! </h1>
    <p>This is some info</p>
    <ol>
      <li>Item One</li>
      <li>Item Two</li>
    </ol>
  </div>
);

let user = {
  name: "Blake",
  age: 12,
  location: "NY",
};

let getLocation = (userLocation) => {
  if (userLocation) {
    return <p>Location: {userLocation}</p>;
  }
};

const template2 = (
  <div>
    <h1>{user.name ? user.name : 'Anonymous'}</h1>
    {(user.age && user.age > 18) && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
  </div>
);

var appRoot = document.getElementById("app");

ReactDOM.render(template2, appRoot);
