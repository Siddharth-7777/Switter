
// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCwKw_tV9Yzd-gvKhpTk5YZQEiaGHFblVg",
    authDomain: "switter-ad52d.firebaseapp.com",
    databaseURL: "https://switter-ad52d-default-rtdb.firebaseio.com",
    projectId: "switter-ad52d",
    storageBucket: "switter-ad52d.appspot.com",
    messagingSenderId: "498494442320",
    appId: "1:498494442320:web:df0794ebc389288b8a3a55",
    measurementId: "G-JJWG9SNG3E"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  
  var username = localStorage.getItem("username")
  document.getElementById("welcome").innerHTML = "Welcome " + username + "!";


  
function addRoom() {
   var roomname = document.getElementById("room_name").value;
   firebase.database().ref("/").child(roomname).update({
     purpose: "adding room name"
   })

   localStorage.setItem("roomname", roomname);
   window.location = "switter_page.html"
}

function getData() {
  firebase.database().ref("/").on('value', 
  function(snapshot) 
  {
    document.getElementById("output").innerHTML = "";
    snapshot.forEach(
    function(childSnapshot) {
    childKey  = childSnapshot.key;
    Room_names = childKey;
    console.log("Room names are:" + Room_names);
    var row = "<div class='room_name' id=" + Room_names + "onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
    document.getElementById("output").innerHTML += row;
      });});}
getData();

function redirectToRoomName(name) {
   console.log(name)
   localStorage.setItem("roomname", name)
   window.location = "switter_page.html"
}

function logout() {
  localStorage.removeItem("username");
  localStorage.removeItem("roomname");
  window.location = "index.html"
}
