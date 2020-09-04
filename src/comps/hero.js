import React from "react";

const Hero = ({ handleLogout }) => {
  // the hero props destructured
  return (
    <section className="hero">
      <nav>
        <h1>hello hero</h1>
        <button onClick={handleLogout}>LogOut</button>
      </nav>
    </section>
  );
};

export default Hero;
