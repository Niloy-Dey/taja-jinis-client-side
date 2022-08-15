import React, { useState } from 'react';
import { useEffect } from 'react';
import ShowsAllOrder from './ShowsAllOrder';

const MyOrder = () => {
    const [allOrders, setAllOrders] = useState([]);
    // console.log(allOrders)
    useEffect(() => {
        fetch('https://taja-jinis.herokuapp.com/orderDetails')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setAllOrders(data);
            })
    })
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
                                    allOrders.map((allOrder, index) => 
                                        <tr>
                                        <th>{index + 1 } </th>
                                        <td>
                                            <div class="flex items-center space-x-3">
                                                <div class="avatar">
                                                    <div class="mask mask-squircle w-12 h-12">
                                                        <img src={allOrder.productImage} alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>{allOrder.productName}</td>
                                        <td>{allOrder.userEmail}</td>
                                        <td>{allOrder.totalQuantity}</td>
                                        <td>{allOrder.totalAmount}</td>
                                        <th><button class="btn btn-sm  bg-red-100 text-black hover:text-white">Delete</button></th>
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