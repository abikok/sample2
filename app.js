// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAm5YzqWj3XvWi2b9aDDzs6SjoWm4bEY_Q",
    authDomain: "sample-fcb1d.firebaseapp.com",
    databaseURL: "https://sample-fcb1d-default-rtdb.firebaseio.com",
    projectId: "sample-fcb1d",
    storageBucket: "sample-fcb1d.firebasestorage.app",
    messagingSenderId: "212374268662",
    appId: "1:212374268662:web:e768394b5a351d75605ad7"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var database = firebase.database();

function saveNumber() {
    var number = document.getElementById("numberInput").value;
    database.ref('numbers/').set({
        number: number
    });
    alert('Number saved!');
}

function getNumber() {
    database.ref('numbers/').get().then(function(snapshot) {
        if (snapshot.exists()) {
            document.getElementById("output").innerText = "Stored Number: " + snapshot.val().number;
        } else {
            document.getElementById("output").innerText = "No number found!";
        }
    });
}
