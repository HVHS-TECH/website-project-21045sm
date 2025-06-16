/***************************************************************/
// fb_login.js
// Term 2 / 2025
// Samuel Moreira
// logs the players info to firebase and saves them as a user
// 
// 
/***************************************************************/

function loginPage() {
    window.location = "login.html"
}

/*************************************/
//
//
//
//
//
/*************************************/
function fb_login() {
  const auth = firebase.auth();
  console.log("logging in");

  auth.onAuthStateChanged((user) => {
    if (user) {
      console.log("logged in");
      console.log(user);
      const uid = user.uid;
      console.log(uid);
      //fb_register()
      //fb_saveRegistrationInfo()
      firebase.database().ref('users/'+user.uid).set({
        //gameName: HTML_screen_name.value,
        googleName: user.displayName,
        photo: user.photoURL,
        email: user.email
        
      });
      //take the user to the game
      windowLocationGame2PMenu()
    } else {
      console.log("not logged in");
      const provider = new firebase.auth.GoogleAuthProvider();
 
      auth.signInWithPopup(provider)
        .then((result) => {
          const token = result.credential.accessToken;
          const user = result.user;
          console.log("User signed in:");
          console.log(user);
          //take the user to the game
          windowLocationGame2PMenu()
          //fb_register()
          //fb_saveRegistrationInfo()
        })
        .catch((error) => {
          console.error("Error during sign-in:", error);
        });
    }
  });
}