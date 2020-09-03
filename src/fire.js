import firebase from "firebase";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyArcIrTNOoTFDEy3a9KXGpOyMKgtBP6bTU",
  authDomain: "loginone-dd3ab.firebaseapp.com",
  databaseURL: "https://loginone-dd3ab.firebaseio.com",
  projectId: "loginone-dd3ab",
  storageBucket: "loginone-dd3ab.appspot.com",
  messagingSenderId: "538025086051",
  appId: "1:538025086051:web:88a9cdb69502885efcfc56",
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

export default fire;
