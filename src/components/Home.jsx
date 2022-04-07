import React from 'react';
import Products from './Products';

function Home() {
    return (
        <div className='hero'>
            <div className="card bg-dark text-white border-0">
                <img src="https://wallpaperbat.com/img/518128-fashion-hd-wallpaper.jpg" className="card-img" alt="Background"
                height='950px' />
                <div className="card-img-overlay d-flex flex-column justify-content-center">
                    <div className="container">

                    <h5 className="text-warning card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVALS </h5>
                    <p className="text-warning fw-bolder card-text lead fs-2">
                        CHECK OUT ALL THE TRENDS</p>
                    </div>
                    
                </div>
            </div>
                <Products />
        </div>
    )
}

export default Home