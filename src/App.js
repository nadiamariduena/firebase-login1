import React, { useState, useEffect } from "react";
import fire from "./fire";
import Login from "./comps/login";
import Hero from "./comps/hero";
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

                                                          **   7  **
                                      The following functions will serve to clean the ERRORS

*/
  const clearInputs = () => {
    // You will use the clearInputs()  function , everytime you have a user ,line:138:
    setEmail("");
    setPassword("");
  };
  //
  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  };
  /*                          AFTER SETTING UP the cleaning error, you will have to add them inside
                               the functions connected to the states  in step 2 and 3






                                                         **   2  **
                                       the functions connected to the STATES in step 1
                                       
                                                      //---------------------
                                                      //  LOG IN
                                                      //---------------------
                                                      //
  */

  const handleLogin = () => {
    clearErrors();
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

  /*


                                                          **   3  **
                                                      
                                                    //---------------------
                                                    //  SIGN UP
                                                    //---------------------
                                                    //
                                                        
*/

  const handleSignup = () => {
    clearErrors();
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
  /*


                                                          **   4  **
   
                                                        
                                                    //---------------------
                                                    //  LOG OUT
                                                    //---------------------
                                                    //                                               

*/

  const handleLogout = () => {
    fire.auth().signOut();
  };
  /*
  

                                                          **   5  **
 
    
                                                    //
                                                    //---------------------
                                                    //  LISTENER to see if user exists
                                                    //---------------------
                                                    //                                                      

                                          // after the function log out, we are going to NEED  
                                          listener to see if USER exist
*/

  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInputs();
        // if there is a User you want to SETUSER to that user(line:11)
        setUser(user);
      } else {
        // here you want also to SETUSER but you will give an empty string if there s not USER, like so  setUser("");
        setUser("");
      }
    });
  };
  /*

                                                          **   6  **
                                  If you remember, you also requiŕed the use EFFECT in line (1)


                                                  
                                                      //---------------------
                                                      //  USE EFFECT
                                                      //---------------------
    
    
    
    
    
                                                   
*/

  useEffect(() => {
    authListener();
  }, []);

  //                                --------------------------------------------------------------
  //
  //                                --------------------------------------------------------------
  //

  return (
    <React.Fragment>
      <div id="AppPage">
        {/* 
  
  the FOLLOWING below means: that it will check if the user has an account ? , if its true, it will send
          the USER to the hero.js  page , if it s false/ user has no account , it will send him to the Login page
  
  */}

        {user ? (
          <Hero handleLogout={handleLogout} />
        ) : (
          <Login
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            handleLogin={handleLogin}
            handleSignup={handleSignup}
            hasAccount={hasAccount}
            setHasAccount={setHasAccount}
            emailError={emailError}
            passwordError={passwordError}
            // All of the 10 props that you are passing here are connected to step 1 of this FILE
            // THIS PROPS will be passed and used in login.js.
          />
        )}
      </div>
    </React.Fragment>
  );
};

export default App;

/*




  //                                --------------------------------------------------------------
  //                          BEFORE THE CHANGES
  //                                --------------------------------------------------------------
  //
  return (
    <React.Fragment>
      <div id="page">
        <Login
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          handleLogin={handleLogin}
          handleSignup={handleSignup}
          hasAccount={hasAccount}
          setHasAccount={setHasAccount}
          emailError={emailError}
          passwordError={passwordError}
          // All of the 10 props that you are passing here are connected to step 1 of this FILE
          // THIS PROPS will be passed and used in login.js.
        />
        <Hero handleLogout={handleLogout}/>
      </div>
    </React.Fragment>
  );
};

export default App;





*/
