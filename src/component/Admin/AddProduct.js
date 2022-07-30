import React from 'react';

const AddProduct = () => {

    const addItem = event => {
        event.preventDefault();

    }
    return (

        <div className='my-10 bg-green-50 lg:ml-80 md:mx-auto mx-auto card shadow-lg  lg:w-96 md:w-96 w-80'>

            <form onSubmit={addItem} className='my-4 text-center from-design w-full p-3 '>
                <h1 className='text-center text-2xl text-orange-500  font-bold '>পণ্য যোগ করুন</h1>
                <input className='border-2  outline-0 p-2 m-2  w-full rounded-lg' placeholder='পণ্যের ক্যাটাগরি লিখুন' type="text" name="name" id="" /><br />
                <input className='border-2  outline-0 p-2 m-2  w-full rounded-lg' placeholder='পণ্যের নাম লিখুন' type="text" name="name" id="" /><br />
                <input className='border-2  outline-0 p-2 m-2 w-full rounded-lg' placeholder='পণ্যের মূল্য লিখুন' type="text" name="price" id="" /><br />
                <input className='border-2  outline-0 p-2 m-2 w-full rounded-lg' placeholder='পণ্যের পরিমাণ লিখুন' type="text" name="quantity" id="" /><br />
                <input className='border-2  outline-0 p-2 m-2 w-full rounded-lg' placeholder='পণ্যের ছবির লিংক দিন  ' type="text" name="image" id="" /><br />
                <input className='border-2  outline-0 p-2 m-2 w-full rounded-lg' placeholder='পণ্য বিবরণ লিখুন' type="text" name="description" id="" /><br />
                <div className='text-center '><input className='btn btn-warning' type="submit" value="জমা দিন " /></div>
            </form>


        </div>
    );
};

export default AddProduct;