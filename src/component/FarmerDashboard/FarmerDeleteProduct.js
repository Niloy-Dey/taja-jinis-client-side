import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useProduct from '../../hooks/useProduct';

const FarmerDeleteProduct = () => {

    const [products, setProducts] = useProduct([]);


    const handleDelete = id => {
        console.log(id);
        const proceed = window.confirm('Are you sure delete this item ?');
        if (proceed) {
            const url = `https://manufacture-n.herokuapp.com/products/${id}`;
            // const url = `http://localhost:5000/products/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                        const remaining = products.filter(order => order._id !== id);
                        setProducts(remaining);
                                          
                })

        }
    }
    return (
        <div> 
            <div className='text-center mt-20 flex justify-center items-center'>
            <div className='w-50 mx-auto ps-5 mt-5 pt-5'>
                <h1 className='text-orange-400 text-2xl font-bold  mb-3 ms-5 ps-3'>পণ্য মুছে ফেলুন</h1>

                {
                    products.map(tool =>
                        <div className='card-style my-5  ' key={tool.id}>
                            <div className='flex justify-around	 w-90 shadow-lg rounded-lg p-10 '>
                                <img className='w-20 mr-2' src={tool.image} alt="" />
                                <div className='mx-2'>
                                    <h5> <b>{tool.name}</b> </h5>
                                    <h5> <b>{tool.price}</b> </h5>
                                    <h5> <b>{tool.quantity}</b> </h5>
                                </div>
                                <h5 className='ml-2'><button onClick={() => handleDelete(tool._id)} className="delete-button  bg-green-400  p-2 rounded-lg text-white "> মুছে ফেলুন  </button></h5></div>
                        </div>)
                }

            </div>
        </div>
            <div className='text-center'>
            <Link to='/farmerDashboard/farmerAddProduct'> <button className="btn bg-green-400">নতুন পণ্য যোগ করুন</button> </Link>
            </div>
        </div>
    );
};

export default FarmerDeleteProduct;