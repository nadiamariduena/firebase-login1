import React from "react";

const Hero = ({ handleLogout }) => {
  // the hero props destructured
  return (
    <section className="hero">
      <nav className="navbar">
        <h1>WELCOME</h1>
        <button onClick={handleLogout}>Exit</button>
      </nav>

      <div className="top-hero">
        <div className="video-container">
          {/* <p>find a way to add a never ending scroll in react</p> */}
          <div className="video">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/73nw0yKjyQE"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
