import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <h2 className="mt-5 ml-10">404 Not Found</h2>
        <p className="fs-6 mt-3 ">
          Sorry, the page you are looking <br/> for does not exists Visit &nbsp;
         <Link to={"/"} style={{textDecoration: "none"}}>Zerodha's home page</Link>

        </p>
      
          
         
      </div>
    </div>
  );
}

export default NotFound;
