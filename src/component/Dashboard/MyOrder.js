import React, { useState } from 'react';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import ShowsAllOrder from './ShowsAllOrder';

const MyOrder = () => {
    const [allOrders, setAllOrders] = useState([]);
    const [user] = useAuthState(auth);
    const email = user?.email;

    // console.log(allOrders)
    useEffect(() => {
        fetch('https://taja-jinis.herokuapp.com/orderDetails')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setAllOrders(data);
            })
    })

    const selectedOrders = allOrders.filter( order => {
        // console.log(order.userEmail)
        if(order.userEmail === email){
            return order;
        }
    })



    const handleDelete = id => {
        console.log(id);
        const proceed = window.confirm('Are you sure delete this item ?');
        if (proceed) {
            // const url = `http://localhost:5000/products/${id}`;
            const url = `https://manufacture-n.herokuapp.com/orderDetails/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = allOrders.filter(order => order._id !== id);
                    setAllOrders(remaining);
                                          
                })

        }
    }
    return (
        <div>
            <div className='  mx-10 '>
                        <div class="overflow-x-auto w-full">
                            <table class="table w-full ">
                                <thead>
                                    <tr>
                                        <th>serial</th>
                                        <th>Image</th>
                                        <th>product Name</th>
                                        <th>user email</th>
                                        <th>Total Quantity</th>
                                        <th>Total Amount</th>
                                        <th>Delete</th>
                                        <th>payment</th>
                                    </tr>
                                </thead>
                            <tbody>
                                {
                                    selectedOrders.map((o, index) => 
                                        <tr>
                                        <th>{index + 1 } </th>
                                        <td>
                                            <div class="flex items-center space-x-3">
                                                <div class="avatar">
                                                    <div class="mask mask-squircle w-12 h-12">
                                                        <img src={o.productImage} alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>{o.productName}</td>
                                        <td>{o.userEmail}</td>
                                        <td>{o.totalQuantity}</td>
                                        <td>{o.totalAmount}</td>
                                        <th><button  onClick={() => handleDelete(o.productId)}  class="btn btn-sm  bg-red-100 text-black hover:text-white">Delete</button></th>
                                        <th><button class="btn btn-sm  bg-green-100 text-black hover:text-white">payment</button></th>
                                    </tr>
                                    )
                                }
                             </tbody>
                            </table>
                        </div>
                    </div>
        </div>
    );
};

export default MyOrder;