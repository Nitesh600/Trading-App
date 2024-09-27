import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row mt-5">
        <h1 className="text-center mb-3 ">Pricing</h1>
        <h5 className="text-center text-muted">
          Free equity investments and flat ₹20 intraday and F&O trades
        </h5>
        <div className="col-2" style={{ margin: "7rem 0 0 14rem" }}>
          <img src="media\pricing0.svg" style={{ width: "120%" }} />
          <h3 className="mt-5 mb-4">Free equity delivery</h3>
          <p className="fs-6">
            All equity delivery investments (NSE, BSE)
            <br />, are absolutely free — ₹ 0 brokerage.
          </p>
        </div>
        <div className="col-6 text-center" style={{ margin: "7rem 0 0 4rem" }}>
          <div className="row">
            <div className="col">
              <img src="media\price 20.svg" style={{ width: "90%" }} />
              <h3 className="mt-5 mb-4">Intraday and F&O trades</h3>
              <p className="fs-6">
                Flat ₹ 20 or 0.03% (whichever is lower) <br />
                per executed order on intraday trades <br /> across equity,
                currency, and commodity <br /> trades. Flat ₹20 on all option
                trades.
              </p>
            </div>
            <div className="col" style={{ margin: "1rem 0 0 3rem" }}>
              <img src="media\pricing0.svg" style={{ width: "90%" }} />
              <h3 className="mt-5 mb-4">Free direct MF</h3>
              <p className="fs-6">
            All direct mutual fund investments are<br/>  absolutely free — ₹ 0
                commissions & DP charges.
              </p>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Hero;
