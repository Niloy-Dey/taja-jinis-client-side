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
                // console.log(data);
            })

    })

    const selectedOrders = allOrders.filter(order => {
        // console.log(order.userEmail)
        if (order.userEmail === email) {
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

   


    const purchase = (o) => {
        // console.log(o)
        const purchaseDetails = {
            cus_email: o?.userEmail,
            cus_name: o?.userName,
            product_image: o?.productImage,
            product_name: o?.productName,
            product_profile: o?.productDescription,
            total_amount: o?.productPrice
        }



           


        // console.log(purchaseDetails);
        //     fetch(`http://localhost:5000/init`,{
        //         method: 'POST',
        //         headers:{
        //             "content-type" :"application/json"
        //         },
        //         body: JSON.stringify(purchaseDetails)
        //     })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data);
        //         window.location.replace(data)
        //     })
    }
    return (
        <div>


    <div class="modal" id="my-modal-2">
        <div class="modal-box  text-center">
            <h3 class="font-bold text-lg">পেমেন্ট</h3>
            <h3 class="font-bold text-lg">এ নাম্বারে টাকাটা সেন্ড মানি করুন 01634114359</h3>
            <input type="text" className='w-80 p-2 border-2 ' placeholder='Enter Your transaction id' />
            <div class="modal-action flex justify-center items-center">
                <a href="#" class="btn">পাঠিয়ে দিন</a>
            </div>
        </div>
    </div>




            <div className='  mx-10 '>
                <div class="overflow-x-auto w-full">
                    <table class="table w-full ">
                        <thead>
                            <tr>
                                <th>সিরিয়াল </th>
                                <th>ছবি </th>
                                <th>প্রোডাক্ট নাম </th>
                                <th>ব্যবহারকারী ইমেইল</th>
                                {/* <th>মোট পরিমাণ</th> */}
                                <th>সর্বমোট টাকা </th>
                                <th>মুছে ফেলুন</th>
                                <th>পেমেন্ট</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                selectedOrders.map((o, index) =>

                                    <tr>
                                        <th>{index + 1} </th>
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
                                        <td>{o.productPrice}</td>
                                        {/* <td>{o.totalQuantity}</td> */}
                                        {/* <td>{o.totalAmount}</td> */}
                                        <th><button onClick={() => handleDelete(o._id)} class="btn btn-sm  bg-red-100 text-black hover:text-white">মুছে ফেলুন</button></th>
                                        <th><button onClick={() => purchase(o)} >< a href = "#my-modal-2" class="btn btn-sm  bg-green-100 text-black hover:text-white" >পেমেন্ট</a ></button></th>
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