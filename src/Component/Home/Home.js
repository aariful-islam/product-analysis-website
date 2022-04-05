import React from 'react';
import { Link } from 'react-router-dom';
import ReviewHook from '../../CustomHooks/ReviewsHook';
import sonyZvE10 from '../../Images/Alpha-ZV-E10.jpg'
import ShowReviewHome from '../ShowReviewHome/ShowReviewHome';

import './Home.css'

const Home = (props) => {
    const [reviews] =ReviewHook();
    
    return (
        <div>
        
        <div className='homePage grid lg:grid-cols-2'>
            <div className='homePageText'>
                <h1 className='homePageHeader p-4'>Meet with the best vlogging <span style={{color:"red", textAlign:"center"}}>camera
                    </span> </h1>
                <p className='homePageText'>The Sony ZV-E10 is a 24MP APS-C mirrorless interchangeable lens camera aimed at vloggers. It features an articulating selfie screen with touch capability, 4K video capture, headphone and microphone ports and a variety of add-on accessories to assist in video capture, including the handgrip seen in the photo above (sold separately) and a range of sophisticated microphones.</p>

            </div>
          <div>
          <img src={sonyZvE10} alt="" />

         
          </div>
          
   
        </div>
        <h1 className='text-5xl text-center'>See reviews</h1>
        <div className='grid gap-6 lg:grid-cols-3 sm:grid-cols-1'>
        {
            reviews.slice(0,3).map(review=> <ShowReviewHome
            key={review.id}
            review={review}
            ></ShowReviewHome>)
        }

        </div>
       
        <div className='btn mx-auto'>
        <Link to="/reviews">See all review</Link>

        </div>
        
        </div>
    );
};

export default Home;