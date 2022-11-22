const address = "https://project-i-management-default-rtdb.firebaseio.com/";

async function fetchData(dir) {
  let response = await fetch(address + dir + ".json");
  data = await response.json();
  return data;
}
// example call of the above function
// fill in the needed name / domain

// const res = fetchData("User/Dean");
// res.then((e) => {
//   const a = Object.values(e)[0];
//   this.$el.html("<h1>" + a.pw + "</h1>");
//   console.log(a);
// });

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

function delFromDatabase(dir) {
  // needs work
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
