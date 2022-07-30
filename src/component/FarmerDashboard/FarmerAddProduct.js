import { dblClick } from '@testing-library/user-event/dist/click';
import React from 'react';
import { useState } from 'react';

const FarmerAddProduct = () => {
    const [image, setImage] = useState('');
    // const [category, setCategory] = useState('');
    // const [name, setName] = useState('');
    // const [price, setPrice] = useState('')
    // const [quantity, setQuantity] = useState('')
    // const [description, setDescription] = useState('');



    /* for getting image  */
    const handleChange = (event) => {
        setImage(event.target.files[0].name);
        console.log(event.target.files[0].name);
    }


    const addItem = event => {
        event.preventDefault();
        const category = (event.target.category.value);
        const name = (event.target.name.value);
        const price = (event.target.price.value);
        const quantity = (event.target.quantity.value);
        const description = (event.target.description.value);

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

        fetch(`http://localhost:5000/products`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(postSingleProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(postSingleProduct);
            })
    }












    return (

        <div className='my-10 bg-green-50 lg:ml-96 md:mx-auto mx-auto card shadow-lg  lg:w-96 md:w-96 w-80'>

            <form onSubmit={addItem} className='my-4 text-center from-design w-full p-3 '>
                <h1 className='text-center text-2xl text-orange-500  font-bold '>পণ্য যোগ করুন</h1>
                <input className='border-2  outline-0 p-2 m-2  w-full rounded-lg' placeholder='পণ্যের ক্যাটাগরি লিখুন' type="text" name="category" id="" /><br />
                <input className='border-2  outline-0 p-2 m-2  w-full rounded-lg' placeholder='পণ্যের নাম লিখুন' type="text" name="name" id="" /><br />
                <input className='border-2  outline-0 p-2 m-2 w-full rounded-lg' placeholder='পণ্যের মূল্য লিখুন' type="text" name="price" id="" /><br />
                <input className='border-2  outline-0 p-2 m-2 w-full rounded-lg' placeholder='পণ্যের পরিমাণ লিখুন' type="text" name="quantity" id="" /><br />
                <input onChange={handleChange} className='border-2  outline-0 p-2 m-2 w-full rounded-lg' placeholder='পণ্যের ছবির লিংক দিন  ' type="file" name="image" /><br />
                <input className='border-2  outline-0 p-2 m-2 w-full rounded-lg' placeholder='পণ্য বিবরণ লিখুন' type="text" name="description" id="" /><br />
                <div className='text-center '><input className='btn btn-warning' type="submit" value="জমা দিন " /></div>
            </form>


            {/* <div id='display_image'>
                    <img src={image === '' ? '' :URL.createObjectURL(image) } alt="" />                
            </div>  */}


        </div>

    );
};

export default FarmerAddProduct;