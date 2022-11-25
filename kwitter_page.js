var firebaseConfig = {
      apiKey: "AIzaSyACEiDMMN71hwFJHGrNVHpIrFRDl_eJzuE",
      authDomain: "chatting-peach.firebaseapp.com",
      databaseURL: "https://chatting-peach-default-rtdb.firebaseio.com",
      projectId: "chatting-peach",
      storageBucket: "chatting-peach.appspot.com",
      messagingSenderId: "744437490073",
      appId: "1:744437490073:web:e2ac532b1603d664b53308"
};

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}

function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  childData = childSnapshot.val();
                  if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code

                        //End code
                  }
            });
      });
}
getData();

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send() {
      msg = document.getElementById("msg").value:
            firebase.database().ref(room_name).push({
                  name: user_name,
                  message: msg,

            });

      document.getElementById("msg").value = "";
}