import React, { useEffect, useState } from 'react';

const ShowReview = () => {

    const [reviews, allReviews ] = useState([]);
    const url = `https://taja-jinis-server.vercel.app/review`;
    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => {
            allReviews(data)
        })
    })
   

    return (
        <div>
            <div className='mt-20 '>
            <h1 className='text-2xl text-orange-400 font-bold text-center my-3 '>আমাদের ক্লায়েন্ট মতামত </h1>
                <div className='lg:mx-40 md:mx-10 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-center items-center'>
                    {
                    reviews.map( review => 
                            <div className='my-5 bg-green-100 p-6 w-80 h-[200px] rounded-lg  shadow-lg '>
                                <h1 className='py-3 text-xl '><b>ক্লায়েন্ট নাম :</b>  {review.name} </h1>
                                <p><b>রিভিউ : </b>{review.comment} </p>
                            </div>
                            )
                    }
                   
                </div>
         </div>
        </div>
    );
};

export default ShowReview;