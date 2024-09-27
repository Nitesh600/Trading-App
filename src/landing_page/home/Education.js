import React from 'react';


function Education() {
    return ( 
       <div className='container'>
        <div className='row'>
            <div className='col-6'>
                <img src='media\education.svg'/>
            </div>
            <div className='col-6 mt-5'>
                <h4 className='p-4'>Free and open market education</h4>
                <p style={{marginLeft: "1.5rem"}}>Varsity, the largest online stock market education book in the world <br/>covering everything from the basics to advanced trading.</p>
                <a href='#'  style={{textDecoration: "none",  marginLeft: "1.5rem"}} > <b>Varsity </b>&nbsp;<i class="fa-solid fa-arrow-right-long"></i></a>
                <p style={{margin: "1rem 0 1rem 1.5rem"}} >TradingQ&A, the most active trading and investment community in <br/> India for all your market related queries.</p>
                <a href='#'  style={{textDecoration: "none",  marginLeft: "1.5rem"}} ><b>TradingQ&A</b> &nbsp;<i class="fa-solid fa-arrow-right-long"></i></a>
            </div>
        </div>
       </div>
     );
}

export default Education;