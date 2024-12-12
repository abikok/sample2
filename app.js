// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    databaseURL: "YOUR_DATABASE_URL",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
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
