import React from "react";

function Hero() {
  return (
    <div className="conatiner text-center mt-5 border-bottom">
      <h1 className="p-3">Technology</h1>
      <h4 className="fs-5 text-muted mb-3">
        Sleek, modern, and intuitive trading platforms
      </h4>
      <p style={{marginBottom: "8rem"}}>
        Check out our{" "}
        <a href="#" style={{ textDecoration: "none" }}>
          investment offerings <i class="fa-solid fa-arrow-right-long"></i>
        </a>{" "}
      </p>
    </div>
  );
}

export default Hero;
