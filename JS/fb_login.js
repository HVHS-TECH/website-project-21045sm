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
//fb_login
//logs in the user with google authentication
//called by login.html/fb_setup
//Input: login button clicked
//Output: user is logged into the website with their account 
//and their info is saved to firebase
/*************************************/
//function fb_login() {
//  const auth = firebase.auth();
//  console.log("logging in");
//
//  auth.onAuthStateChanged((user) => {
//    if (user) {
//      console.log("logged in");
//      console.log(user);
//      const uid = user.uid;
//      console.log(uid);
//      firebase.database().ref('users/'+user.uid).set({
//        googleName: user.displayName,
//        photo: user.photoURL,
//        email: user.email
//        
//      });
//      //take the user to the game
//      windowLocationGame2PMenu()
//    } else {
//      console.log("not logged in");
//      const provider = new firebase.auth.GoogleAuthProvider();
// 
//      auth.signInWithPopup(provider)
//        .then((result) => {
//          const token = result.credential.accessToken;
//          const user = result.user;
//          console.log("User signed in:");
//          console.log(user);
//          //take the user to the game
//          windowLocationGame2PMenu()
//        })
//        .catch((error) => {
//          console.error("Error during sign-in:", error);
//        });
//    }
//  });
//}