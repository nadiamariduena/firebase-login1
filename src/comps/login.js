import React from "react";

const Login = (props) => {
  /*
    Before start filling the login.js, you have to pass the PROPS from the parent
    which is App, check the step 1 in that file and add them accordingly like so:

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
      </div>
    </React.Fragment>

    
    
    */
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignup,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
  } = props;

  return (
    <section className="login">
      <div className="logInContainer">
        <label>Username</label>
        {/* --- */}
        <input
          type="text"
          autoFocus
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {/* ERRORS */}
        <p className="errorMsg">{emailError}</p>
        <label>Password</label>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {/* ERRORS */}
        <p className="errorMsg">{passwordError}</p>
      </div>
      {/*
       */}
      <div className="btnContainer">
        {/* STATES hasAccount
         */}

        {hasAccount ? (
          <>
            <button className="btn1" onClick={handleLogin}>
              Sign In
            </button>
            <p className="par1">
              Don't have an account ?
              <span onClick={() => setHasAccount(!hasAccount)}>Sign up</span>
            </p>
          </>
        ) : (
          <>
            <button className="btn2" onClick={handleSignup}>
              {" "}
              Sign Up
            </button>
            <p className="par2">
              Have an account
              <span onClick={() => setHasAccount(!hasAccount)}>Sign In</span>
              {/* If you notice, when you click SIGN In, it will send you to SIGN UP and viceversa but
                it will also change the button. */}
            </p>
          </>
        )}
      </div>
    </section>
  );
};

export default Login;
