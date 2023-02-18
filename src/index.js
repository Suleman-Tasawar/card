import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

function Card(){
    return(

        <div className='summary-card'>
            <div className='card-upper-bg'></div>
            <div className='card-content'>
                <h1>Order Summary</h1>
                <p>You can now listen to millions of songs,books
                    ,audiobook and podcasts on any device anywhere you like
                </p>
            </div>
            <div className='plan-info'>                
                <div className='plan-details'>
                    <div className='audio-icon'></div>
                    <div>
                        <div>
                            <h1>Annual Plan</h1>
                        </div>
                        <div>
                            59.99$/year
                        </div>
                    </div>
                </div>

                <div>
                    <a className='plan-change-link' href='#'>Change</a>
                </div>
            </div>

            <div>
                <button>Proceed to Payement</button>
            </div>

            <div>
                <button>Cancel Order</button>
            </div>
        </div>
    )
}

ReactDOM.render(<Card />,document.getElementById("root"))