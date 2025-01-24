import React from "react";

function Universe() {
  return (
    <div className="container" style={{ marginTop: "7rem" }}>
      <div className="row">
        <h2 className="text-center mb-4">The Zerodha Universe</h2>
        <p className="text-center ">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="col-4 p-3 mt-5">
          <img style={{width: "198px", height: "55px"}} src="media\zerodhaFundhouse.png" />
          <p className="text-small text-muted">
            Our asset management venture <br></br> 
        that is creating simple and
            transparent index <br></br>funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img style={{width: "228", height: "40px"}} src="media\sensibullLogo.svg" />
          <p className="text-small text-muted">Options trading platform that lets you
create strategies, analyze positions, and examine
data points like open interest, FII/DII, and more.
</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img style={{width: "145px", height: "55px"}} src="media\tijori.svg" />
          <p className="text-small text-muted">Investment research platform
that offers detailed insights on stocks,
sectors, supply chains, and more.</p>
        </div>
        <div className="col-4 p-3 mt-3">
          <img  style={{width: "166px", height: "55px"}} src="media\streakLogo.png" />
          <p className="text-small text-muted">
          Systematic trading platform
that allows you to create and backtest
strategies without coding
          </p>
        </div>
        <div className="col-4 p-3 mt-3">
          <img style={{width: "210px", height: "55px"}} src="media\smallcaseLogo.png" />
          <p className="text-small text-muted">Thematic investing platform
that helps you invest in diversified
baskets of stocks on ETFs.
</p>
        </div>
        <div className="col-4 p-6 mt-3 ">
          <img style={{width: "143px", height: "55px"}} src="media\dittoLogo.png" />
          <p className="textsmall text-muted">Personalized advice on life
and health insurance. No spam
and no mis-selling.</p>
        </div>
      
      </div>
  <Link to="https://auth-client-nine.vercel.app/signup">
     <button className='p-2 btn btn-primary fs-5 mb-5 mt-4' type="button" style={{width: "20%", marginLeft:  "37%" }}>Sign up for free </button>
  </Link>
     
    </div>
  );
}

export default Universe;
