


console.log("fbP_manager")

fbP_initialize

function fbP_initialize() {
    console.log("%c fbP_initialize", "color: green");

    
       
  const FIREBASECONFIG = {
    // Your firebase npm
    // project settings , scroll down and look for something like this
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    apiKey: "AIzaSyBHK6-dNlG379t7E79p5smIZxLScVpKjhQ",
    authDomain: "comp-2025-samuel-moreira.firebaseapp.com",
    databaseURL: "https://comp-2025-samuel-moreira-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "comp-2025-samuel-moreira",
    storageBucket: "comp-2025-samuel-moreira.firebasestorage.app",
    messagingSenderId: "59624272140",
    appId: "1:59624272140:web:9de539433103134e4d5929",
    measurementId: "G-RRCPJ63H6N"
  };
   


  // Check if firebase already initialized
  if (!firebase.apps.length) {
    firebase.initializeApp(FIREBASECONFIG);
    database = firebase.database();
    console.log("%c FIREBASECONFIG", "color: green");
  }
}