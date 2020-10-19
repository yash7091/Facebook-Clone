// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase"
const firebaseConfig = {
    apiKey: "AIzaSyA8g3kvfic3G3fEtFhSWwaBcAwwUHZWfHY",
    authDomain: "facebook-clone-c54b4.firebaseapp.com",
    databaseURL: "https://facebook-clone-c54b4.firebaseio.com",
    projectId: "facebook-clone-c54b4",
    storageBucket: "facebook-clone-c54b4.appspot.com",
    messagingSenderId: "80021191942",
    appId: "1:80021191942:web:354aa41dee3f87dafd7287",
    measurementId: "G-SS8VXFQ4N3"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  export {auth , provider};
  export default db;
   