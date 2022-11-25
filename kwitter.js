firebaseConfig = {
    apiKey: "AIzaSyACEiDMMN71hwFJHGrNVHpIrFRDl_eJzuE",
    authDomain: "chatting-peach.firebaseapp.com",
    databaseURL: "https://chatting-peach-default-rtdb.firebaseio.com",
    projectId: "chatting-peach",
    storageBucket: "chatting-peach.appspot.com",
    messagingSenderId: "744437490073",
    appId: "1:744437490073:web:e2ac532b1603d664b53308"
};

function addUser() {
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);
    window.location = "kwitter_room.html";
    firebase.database().ref("/").child(user_name).update({
        purpose: "adding user"
    });


}