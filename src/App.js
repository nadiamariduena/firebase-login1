import React, { useState, useEffect } from "react";
import fire from "./fire";

/*

                                                             **   1  **
                                      the STATES connected to the functions in step 2

*/
const App = () => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);

  /*

                                                          **   2  **
                                       the functions connected to the STATES in step 1
*/
  //
  //---------------------
  //  LOG IN
  //---------------------
  //
  const handleLogin = () => {
    fire // here you will start using fire library that you have imported from the fire.js
      .auth() //auth stands for Authentification
      .signInWithEmailAndPassword(email, password)
      // here we will handle the errors for when the user type or dont type the required data.
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
        }
      });
  };
  //
  //---------------------
  //  SIGN UP
  //---------------------
  //
  const handleSignup = () => {
    fire // here you will start using fire library that you have imported from the fire.js
      .auth() //auth stands for Authentification
      .createUserWithEmailAndPassword(email, password)
      // here we will handle the errors for when the user type or dont type the required data.
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
        }
      });
  };
  //
  //---------------------
  //  LOG OUT
  //---------------------
  //
  /*



*/
  return (
    <React.Fragment>
      <div id="page">
        <h1>hello world</h1>
      </div>
    </React.Fragment>
  );
};

export default App;
