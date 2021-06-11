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
  
user = localStorage.getItem("username")
room = localStorage.getItem("roomname")

function send() {
   var msg = document.getElementById("msg").value;
   firebase.database().ref(room).push({
         name: user,
         message: msg,
         like: 0

   })

   document.getElementById("msg").innerHTML = "";
}


      firebase.database().ref("/"+room).on('value', 
      function(snapshot) {
            document.getElementById("output").innerHTML = ""; 
            snapshot.forEach(function(childSnapshot) { 
            childKey  = childSnapshot.key; 
            childData = childSnapshot.val(); 
            if (childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
        var name = message_data["name"];
        var message = message_data["message"];
        var like = message_data["like"];
        var nwt = "<h4>" + name + "<img src='tick.png' class='user_tick'></h4>"
        var mwt = "<h4 class='message_h4'>" + message + "</h4>"
        var lwt = "<button class='btn btn-warning' onclick='updateLike(this.id)'>"
        var swt = "<span class='glyphicon glyphicon-thumbs-up'>Likes: " + like + "</span></button><hr>"

        var row = nwt + mwt + lwt + swt;
        document.getElementById("output").innerHTML += row;

      } });  }); 



      

function logout() {
      localStorage.removeItem("username");
      localStorage.removeItem("roomname");
      window.location.replace("index.html")
    }