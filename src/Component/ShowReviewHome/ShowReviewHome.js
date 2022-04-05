import React from 'react';
import './ShowReviewHome.css'

const ShowReviewHome = (props) => {
    
    const {name,img,comment,rating}=props.review

    return (
      
            <div className='border-solid border-2 border-indigo-200 m-6 p-12'> 
                    <img className='w-40 m-auto ' src={img} alt="" />
                    <h1 className='text-3xl font-extrabold'>{name}</h1>
                    <p className='text-2xl'>Review :{comment}</p>
                    <p className='text-2xl font-bold'>rating :{rating}</p>
                </div>
                
      
    );
};

export default ShowReviewHome;