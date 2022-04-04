import React from 'react';
import './ShowReviewDetails.css'
const ShowReviewDetails = (props) => {
    const {name,img,comment,rating} =props.review
    return (
        <div className='border-solid border-2 border-indigo-200'>
            <h1>name:{name}</h1>
            <img src={img} alt="" />
            <p>{comment}</p>
        </div>
    );
};

export default ShowReviewDetails;