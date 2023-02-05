import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const Review = () => {

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }

    };


    const [reviews, allReviews ] = useState([]);
    const url = `https://taja-jinis-backend.onrender.com/review`;
    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => {
            allReviews(data)
        })
    })
   

    return (
        <div>
            <Carousel   showDots={true}
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={3000}
                className='lg:mx-32 flex justify-center items-center text-center'  >
                {
                    reviews.map( review => 
                            <div className='my-5 bg-green-100 p-6 w-60  lg:w-80 h-[200px] rounded-lg  shadow-lg '>
                                <p className='text-center font-bold '> রিভিউ </p>
                                <p>{review.comment} </p>
                                <h1 className='py-2  text-xl '> {review.name} </h1>
                            </div>
                            )
                    }
            </Carousel>;
        </div>
    );
};

export default Review;