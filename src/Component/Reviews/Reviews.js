import React from 'react';
import ReviewHook from '../../CustomHooks/ReviewsHook';
import ShowReview from '../ShowReview/ShowReview';


const Reviews = () => {
    const [reviews] =ReviewHook();
    return (
        <div>
            <h1 className='text-center text-5xl m-6'>Review from customer</h1>
            <div className='grid gap-6 lg:grid-cols-3'>
            {
            reviews.map(review=> <ShowReview
            key={review.id}
            review={review}
            ></ShowReview>)
        }

            </div>
             
          
        
            
        </div>
    );
};

export default Reviews;