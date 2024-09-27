import React from "react";

function Team() {
  return (
    <div className="container" style={{ marginBottom: "7rem" }}>
      <div className="row text-center" style={{ marginTop: "7rem" }}>
        <h2>People</h2>
      </div>
      <div className="row" style={{ marginLeft: "8rem" }}>
        <div className="col-6 mt-5">
          <img
            src="media\Nitesh.jpg"
            style={{ borderRadius: "100%", width: "350px", height: "350px" }}
          />
          <h4 className="fs-5 pt-4" style={{ marginLeft: "6.3rem" }}>
            Nitesh Kumar
          </h4>
          <h5 className="fs-6 pt-1 text-muted" style={{ marginLeft: "6.3rem" }}>
            Founder,CEO
          </h5>
        </div>
        <div
          className="col-6"
          style={{ marginTop: "6rem", lineHeight: "2rem" }}
        >
          <p>
            Nitesh bootstrapped and founded Zerodha in 2024 to overcome the{" "}
            <br></br>
            hurdles he faced during his decade long stint as a trader. Today,{" "}
            <br></br> Zerodha has changed the landscape of the Indian broking
            industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            <br></br>
            (SMAC) and the Market Data Advisory Committee (MDAC). <br></br>{" "}
            Indian capital markets.
          </p>
          <p>
            Playing Cricket is his zen.<br></br>
          </p>
          <p>
            Connect on &nbsp;
            <a href="#" style={{ textDecoration: "none" }}>
              <b>Homepage</b>
            </a>
            &nbsp;/&nbsp;
            <a href="#" style={{ textDecoration: "none" }}>
              <b>TradingQnA</b>
            </a>
            &nbsp;/&nbsp;
            <a href="#" style={{ textDecoration: "none" }}>
              <b>Twitter</b>
            </a>
            &nbsp;/
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
