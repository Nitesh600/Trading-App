import React from "react";

function RightSection({ productName, productDescription, learnMore , imageUrl}) {
  return (
    <div className="container">
      <div className="row ">
        <div className="col-6 p-5" style={{marginTop: "10rem"}}>
            <h1 className="mb-4 fs-3" >{productName}</h1>
            <p style={{lineHeight: "2rem"}}>{productDescription}</p>
            <div>
        <a href={learnMore} style={{marginLeft: "50px", textDecoration: "none"}}>Learn More<i class="fa-solid fa-arrow-right-long"></i></a>
        </div>
        </div>
        <div className="col-6" style={{marginTop: "6rem"}}>
        <img src={imageUrl}/>
        </div>
      </div>
    </div>
  );
}

export default RightSection;
