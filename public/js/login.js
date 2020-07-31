var users = [{ username: "admin", password: "HappyPassword" }];

function login() {
  var username = document.getElementsByName("name")[0].value;
  console.log(username);
  console.log(users[0].username);
  if (username == users[0].username) {
    window.localStorage.username = username;
    var url = "http://localhost:3000/" + username;
    window.location.replace(url);
    console.log("I think that we called the relocate function");
  }
}

function makeUnicornsFly() {
  console.log("wifiiiiiiii");
  document.getElementById("new-username").style.display = "inline-block";
  document.getElementById("text-username").style.display = "none";
  document.getElementById("new-username").focus();
}
function backHome() {
  if (localStorage.username) {
    url = "http://localhost:3000/" + "";
    window.location.replace(url);
    localStorage.clear();
  }
}

if (localStorage.length === 0) {
  document.getElementById("button-login").style.display = "block";
  document.getElementById("authorized").style.display = "none";
  document.getElementById("back").style.display = "none";
}

if (localStorage.username) {
  document.getElementById("button-login").style.display = "none";
  document.getElementById("text-username").innerHTML = localStorage.username;
  document.getElementById("new-username").value = localStorage.username;
}

function saveNewName() {
  let newName = (localStorage.username = document.getElementById(
    "new-username"
  ).value);

  console.log(newName);
}

// function resizeInput() {
//   $(this).attr("size", $(this).val().length);
// }

// $('input[type="text"]')
//   // event handler
//   .keyup(resizeInput)
//   // resize on page load
//   .each(resizeInput);
