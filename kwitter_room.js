
var firebaseConfig = {
      apiKey: "AIzaSyBebx5EjQjL8bdj-vpmw0xk0YP-fLzXBpw",
      authDomain: "kwitter-39455.firebaseapp.com",
      databaseURL: "https://kwitter-39455-default-rtdb.firebaseio.com",
      projectId: "kwitter-39455",
      storageBucket: "kwitter-39455.appspot.com",
      messagingSenderId: "84832273334",
      appId: "1:84832273334:web:121a5c8f1934677072b717"
    };

    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
