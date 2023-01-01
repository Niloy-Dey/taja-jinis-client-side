// import { dblClick } from '@testing-library/user-event/dist/click';
import React from 'react';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FarmerAddProduct = () => {
  
    const imageApiKey = '10e1785230025104fca088b02b109744';
    const [image, setImage] = useState('');

    const addItem = event => {
        event.preventDefault();
        const category = (event.target.category.value);
        const name = (event.target.name.value);
        const price = (event.target.price.value);
        const quantity = (event.target.quantity.value);
        const description = (event.target.description.value);

        const imageData = document.querySelector('input[type="file"]');
        const formData = new FormData();
        formData.append('image', imageData.files[0]);

        fetch(`https://api.imgbb.com/1/upload?key=${imageApiKey}`, {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(result => {
            // console.log('success: ' , result);
            if(result.success){
                const image = result?.data?.url;
                setImage(image);


                const postSingleProduct =
                {
                    category: category,
                    name: name,
                    price: price,
                    quantity: quantity,
                    image: image,
                    description: description
                }
        
        
                /* posting data to database  */
        
                fetch(`https://taja-jinis-server.vercel.app/products`, {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(postSingleProduct)
                })
                    .then(res => res.json())
                    .then(data => {
                        toast("আপনার ডাটা গৃহীত হয়েছে", {
                            position: toast.POSITION.BOTTOM_RIGHT
                          });

                        // console.log(postSingleProduct);
                        document.getElementById("myForm").reset();
                    })
            }
        })
    }

    return (

        <div className='mt-24  bg-green-50 lg:ml-[200] md:mx-auto mx-auto card shadow-lg  lg:w-96 md:w-96 w-80'>
            <ToastContainer className="z-50"/>
            <form onSubmit={addItem} id="myForm" className='my-4 text-center from-design w-full p-3 '>
                <h1 className='text-center text-2xl text-orange-500  font-bold '>পণ্য যোগ করুন</h1>
                <input className='border-2  outline-0 p-2 m-2  w-full rounded-lg' placeholder='পণ্যের ক্যাটাগরি লিখুন' type="text" name="category" id="" /><br />
                <input className='border-2  outline-0 p-2 m-2  w-full rounded-lg' placeholder='পণ্যের নাম লিখুন' type="text" name="name" id="" /><br />
                <input className='border-2  outline-0 p-2 m-2 w-full rounded-lg' placeholder='পণ্যের মূল্য লিখুন' type="text" name="price" id="" /><br />
                <input className='border-2  outline-0 p-2 m-2 w-full rounded-lg' placeholder='পণ্যের পরিমাণ লিখুন' type="text" name="quantity" id="" /><br />
                <input className='border-2  outline-0 p-2 m-2 w-full rounded-lg' placeholder='পণ্যের ছবির লিংক দিন  ' type="file" name="image" id='image' /><br />
                {/* <input className='border-2  outline-0 p-2 m-2 w-full rounded-lg' placeholder='পণ্যের ছবির লিংক দিন' type="text" name="image" id="" /><br /> */}
                <input className='border-2  outline-0 p-2 m-2 w-full rounded-lg' placeholder='পণ্য বিবরণ লিখুন' type="text" name="description" id="" /><br />
                <div className='text-center '><input className='btn btn-warning' type="submit" value="জমা দিন " /></div>
            </form>        
        </div>

    );
};

export default FarmerAddProduct;