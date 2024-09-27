import React from 'react';

function Hero() {
    return ( 
     <section className='container-fluid' id='supportHero'>
        <div className='p-3' id='supportWrapper'>
            <h4>Support Portal</h4>
            <a style={{color: "white"}} href=''>Track tickets</a>
        </div>
        <div className='row p-3'>
            <div className='col-6 p-5 '>
                <h1 className='fs-3 mb-4'>Search for an answer or browse help topics to create a ticket</h1>
                <input placeholder='Eg: how do i activate F&O, why is my order getting rejected...'/> <br></br> <br></br>
                <a href=''>Track account opening</a> &nbsp; &nbsp; &nbsp;&nbsp;
                <a href=''> Track segment activation</a>  &nbsp; &nbsp; &nbsp;&nbsp;
                <a href=''> Intraday margins</a> <br></br>  <br/>
                <a href=''>Kite user manual</a> 
            </div>
            <div className='col-6 p-5'>
                <h1 className='fs-3'>Featured</h1>
                <ol>
                    <li>
                <a href='' style={{lineHeight: "4rem"}}>Offer for sale (OFS) - September 2024</a>
                </li>
                <li>
                <a href=''>Latest Intraday leverages and Square-off timings</a>
                </li>
                </ol>
            </div>
        </div>
     </section>
     );
}

export default Hero;