import React from 'react';

function Pricing() {
    return ( 
         <div className='container ' style={{margin: "10rem 0 7rem 0"}}>
            <div className='row' style={{marginLeft: "10rem"}}>
                <div className='col-4'>
                    <h2 className='mb-3'>Unbeatable pricing</h2>
                    <p>We pioneered the concept of discount broking and price <br></br> transparency in India. Flat fees and no hidden charges.</p>
                    <a href='#' style={{textDecoration: "none"}}>See pricing<i class="fa-solid fa-arrow-right-long"></i></a>
                </div>
                <div className='col-2'>
                <img src='media\pricing0.svg'/>
                            <p className='fs-6'>Free account <br/>
                            opening</p>
                </div>
                <div className='col-6 text-center'>
                    <div className='row'>
                        <div className='col'>
                            <img src='media\pricing0.svg' style={{width: "70%"}}/>
                            <p className='fs-6'>Free equity delivery <br/>
                            and direct mutual funds</p>
                        </div>
                        <div className='col'>
                        <img src='media\price 20.svg' style={{width: "70%"}}/>
                            <p className='fs-6'>Intraday and <br/>
                            F&O</p>
                        </div>
                    </div>
                </div>
            </div>

         </div>
     );
}

export default Pricing;