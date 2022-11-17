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
async function getDatabase(dir, modelDest) {
  fetch(
    "https://project-i-management-default-rtdb.firebaseio.com/" + dir + ".json"
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      // modelDest.set(dir, Object.values(data));
      console.log(Object.values(data));
      return Object.values(data);
      // return Object.values(data).stringify;
    });
}
function delFromDatabase(dir) {
  fetch(
    "https://project-i-management-default-rtdb.firebaseio.com/" + dir + ".json",
    {
      method: "DELETE",
    }
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      // modelDest.set(dir, Object.values(data));
      // console.log(Object.values(data));
    });
}
function addUser(data) {
  return postDatabase("Users", data);
}

function getUser(name) {
  // returns a user. undecided what type
  return getDatabase("User/" + name);
}
