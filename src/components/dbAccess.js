function postDatabase(dir, data) {
  // adds user
  fetch(
    "https://project-i-management-default-rtdb.firebaseio.com/" + dir + ".json",
    {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}
function pushDatabase(dir, data) {
  // adds user
  fetch(
    "https://project-i-management-default-rtdb.firebaseio.com/" + dir + ".json",
    {
      method: "PUSH",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}
function getDatabase(dir, modelDest) {
  fetch(
    "https://project-i-management-default-rtdb.firebaseio.com/" + dir + ".json"
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      // modelDest.set(dir, Object.values(data));
      console.log(Object.values(data));
    });
}
function delFromDatabase(dir, key) {
  fetch(
    "https://project-i-management-default-rtdb.firebaseio.com/" + dir + ".json",
    {
      method: "DELETE",
      body: JSON.stringify(key),
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      modelDest.set(dir, Object.values(data));
      // console.log(Object.values(data));
    });
}
function addUser(data) {
  postDatabase("Users", data);
}
