import React from 'react';
import sonyZvE10 from '../../Images/Alpha-ZV-E10.jpg'
import './Home.css'

const Home = () => {
    return (
        <div className='homePage'>
            <div className='homePageText'>
                <h1 className='homePageHeader'>Meet with the best vlogging <span style={{color:"red", textAlign:"center"}}>camera
                    </span> </h1>
                <p className='homePageText'>The Sony ZV-E10 is a 24MP APS-C mirrorless interchangeable lens camera aimed at vloggers. It features an articulating selfie screen with touch capability, 4K video capture, headphone and microphone ports and a variety of add-on accessories to assist in video capture, including the handgrip seen in the photo above (sold separately) and a range of sophisticated microphones.</p>

            </div>
          <div>
          <img src={sonyZvE10} alt="" />

          </div>
          
           
        </div>
    );
};

export default Home;