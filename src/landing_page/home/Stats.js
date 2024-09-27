import React from 'react';

function Stats() {
    return ( 
        <div className='container'>
            <div className='row'>
                <div className='col-6'>
                    <h2 className='mb-5 fs-4'>Trust with confidence</h2>
                    <h4>Customer-first always</h4>
                    <p>That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh <br></br>crores of equity investments and contribute to 15% of daily<br></br> retail exchange volumes in India.</p>
                    <h2 className='mb-3 fs-4'>No spam or gimmicks</h2>
                    <p>No gimmicks, spam, "gamification", or annoying push <br></br> notifications.High quality apps that you use at<br></br>  your pace, the way you like.</p>
                    <h2 className='mb-3 fs-4'>Trust with confidence</h2>
                    <p>Not just an app, but a whole ecosystem. Our investments <br></br>in 30+ fintech startups offer you tailored services<br></br> specific to your needs.</p>
                    <h2 className='mb-3 fs-4'>Trust with confidence</h2>
                    <p>With initiatives like Nudge and Kill Switch, we don't<br></br> just facilitate transactions, but actively help you do better<br></br> with your money.</p>
                </div>
                <div className='col-6 mr-5'>
                    <img src='media/ecosystem.png'  style={{width: "90%"}}/>
                    <div className='text-center mt-5' style={{marginLeft: "-10rem"}}>
                        <a href='#' style={{textDecoration: "none"}} className='mx-4'>Explore our products <i class="fa-solid fa-arrow-right-long"></i></a>
                        <a href='#' style={{textDecoration: "none"}}>Try Kite demo <i class="fa-solid fa-arrow-right-long"></i></a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Stats;