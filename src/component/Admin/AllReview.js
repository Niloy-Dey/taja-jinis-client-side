import React, { useEffect, useState } from 'react';

const AllReview = () => {
    const [allReviews, setAllReviews] = useState([]);
    const url = `https://taja-jinis.herokuapp.com/review`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setAllReviews(data)
            })
    })
    
    const handleDelete = id => {
        console.log(id);
        const proceed = window.confirm('Are you sure delete this item ?');
        if (proceed) {
            // const url = `http://localhost:5000/products/${id}`;
            const url = `https://manufacture-n.herokuapp.com/review/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = allReviews.filter(order => order._id !== id);
                    setAllReviews(remaining);
                                          
                })

        }
    }

    return (
        <div>
            <div className='mt-20 '>
                <h1 className='text-2xl text-orange-400 font-bold text-center my-3 '>আমাদের ক্লায়েন্ট মতামত </h1>
                <div className=' grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-center items-center'>
                    {
                        allReviews.map(review =>
                            <div className='my-5 bg-green-100 p-6 w-80  rounded-lg  shadow-lg '>
                                <h1 className='py-3 text-xl '><b>ক্লায়েন্ট নাম :</b>  {review.name} </h1>
                                <p><b>রিভিউ : </b>{review.comment} </p>
                                <button className='btn btn-sm my-3'>Delete review</button>
                            </div>
                        )
                    }

                </div>
            </div>
        </div>
    );
};

export default AllReview;