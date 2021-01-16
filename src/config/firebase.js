import firebase from 'firebase';

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDFaQ1yEBwjm5NwAlu2xygtzn3O5dSxFA4",
    authDomain: "hackland-2ac2a.firebaseapp.com",
    projectId: "hackland-2ac2a",
    storageBucket: "hackland-2ac2a.appspot.com",
    messagingSenderId: "784146388159",
    appId: "1:784146388159:web:8b2f061b186616c7c4e20a",
    measurementId: "G-N9ZKGLWWRV"
  };
  // Initialize Firebase
  export default firebase.initializeApp(firebaseConfig);