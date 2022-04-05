import React from 'react';
import './Home.css'

const Home = () => {


    return (
        <div>
            <div className='home'>
                <div className='text'>
                    <h1 className='text-6xl '>Your Comfortable gaming chair is here.</h1>
                    <h1 className='text-5xl'>The best gaming chair in market.</h1>
                    <p className='text-2xl'>Buy this gaming chair at astoundingly low prices without compromising quality. Logistics Service. Most Popular. Trade Assurance. Production Monitoring.</p>
                    <button className='btn'>Live Demo</button>
                </div>
                <div className='Image'>
                    <img src="https://assets-prd.ignimgs.com/2021/05/27/61heqhmkrhl-ac-sl1500-1622155579013.jpg" alt="" />
                </div>
            </div>
            <div>
                <p className='text-5xl mt-5'>Customer Reviews (3)</p>
                <div className='grid'>

                    <div>
                    <img src="https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/35af6a41332353.57a1ce913e889.jpg" alt="" />
                    
                    <p>Mike stivenson</p>
                    <p>Comment : Best deal at low price</p>
                    <p>Ratting: 6 star</p>
                    </div>
                    <div>
                    <img src="https://live.staticflickr.com/5252/5403292396_0804de9bcf_b.jpg" alt="" />
                    <p>Lana Rose</p>
                    <p>Comment : I bought this chair for my son, he loves it.</p>
                    <p>Ratting: 5 star</p>
                    </div>
                    <div>
                    <img src="https://pbs.twimg.com/media/BduTxWnIUAAKT_5.jpg" alt="" />
                    <p>Jon the don</p>
                    <p>Comment : Cool product , loved it</p>
                    <p>Ratting: 5 star</p>
                    </div>

                    </div>
                <button className='button'>See All Reviews</button>
            </div>
        </div>

    );
};

export default Home;