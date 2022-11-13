
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