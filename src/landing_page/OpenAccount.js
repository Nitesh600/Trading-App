import React from 'react';
import { Link } from "react-router-dom";
function OpenAccount() {
    return (  
        <div className='container p-5 mb-5'>
        <div className='row text-center'>
         <h2 className='mt-5 ml-10'>Open a Zerodha account</h2>
         <p className='fs-6 mt-3 '>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
        <Link to="https://auth-client-nine.vercel.app/signup">
            <button className='p-2 btn btn-primary fs-5 mb-5 mt-4' type="button" style={{width: "20%", margin: "0 auto" }}>Sign up for free </button>
        </Link>
       

        </div>

       </div>
    );
}

export default OpenAccount;
