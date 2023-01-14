import React from 'react';

const FarmerReview = () => {
    
    const handleSubmit =(e)=>{
        e.preventDefault();
        const name = e.target.name.value;
        const comment = e.target.comment.value;
        const review = {name, comment};



        const url = `https://taja-jinis-server-side.vercel.app/review`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })

    }


    return (
        <div className='flex justify-center items-center '>
            <div className='mt-24 card bg-green-50  shadow-lg w-96 p-10 '>
            <h1 className='text-center text-xl '>আপনার গুরুত্বপূর্ণ মতামত দিন</h1> 
               <div className='flex justify-center items-center'>
               <form className='w-60' onSubmit={handleSubmit}>
                    <input placeholder='আপনার নাম লিখুন' className='w-full p-1 my-2 border-2' type="text" name="name" id="" /><br />
                    <input placeholder='আপনার মতামত লিখুন' className='my-2 p-1 w-full border-2 ' type="text" name="comment" id="" /><br />
                    <button type='submit'  className='border-2 p-1 w-full bg-green-400 text-white' >জমা দিন</button>
                </form>
               </div>
        </div>
       </div>
    );
};

export default FarmerReview;