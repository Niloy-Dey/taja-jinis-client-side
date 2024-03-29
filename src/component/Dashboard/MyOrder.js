import React, { useState } from 'react';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

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
            // const url = `http://localhost:5000/orderDetails/${id}`;
            const url = `https://taja-jinis.herokuapp.com/orderDetails/${id}`;
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
                                        <th>সিরিয়াল </th>
                                        <th>ছবি </th>
                                        <th>প্রোডাক্ট নাম </th>
                                        <th>ব্যবহারকারী ইমেইল</th>
                                        <th>মোট পরিমাণ</th>
                                        <th>সর্বমোট পরিমাণ</th>
                                        <th>মুছে ফেলুন</th>
                                        <th>পেমেন্ট</th>
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
                                        <th><button  onClick={() => handleDelete(o._id)}  class="btn btn-sm  bg-red-100 text-black hover:text-white">মুছে ফেলুন</button></th>
                                        <th><button class="btn btn-sm  bg-green-100 text-black hover:text-white">পেমেন্ট</button></th>
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