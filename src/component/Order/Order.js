import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import useProduct from '../../hooks/useProduct';

const Order = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const { productId } = useParams();
    console.log(productId);
    const [products] = useProduct([]);
    const clickedProduct = products?.find(pd => pd?._id === productId);
    const {_id, name, price, image, description, quantity } = clickedProduct || {};

    const postOrder = (event)=>{
        event.preventDefault()
        const userName = event.target.userName.value;
        const userAddress = event.target.userAddress.value;
        const productQuantity = event.target.productQuantity.value;
        const userMobile = event.target.userMobile.value;

        const orderDetails = {
            id: _id,
            productName: name,
            productImage: image,
            productPrice:price,
            productDescription: description,
            userName:userName,
            userAddress: userAddress,
            userEmail: user.email,
            productQuantity: productQuantity,
            userMobile: userMobile,
        };
        const url =`https://taja-jinis-server-side.vercel.app/orderDetails`;
        fetch(url, {
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderDetails)
        })
        .then(res => res.json())
        .then(data => {
            // console.log(data);
        })
        navigate('/completedOrder');
    }

    return (
        <div className='my-32  lg:flex   lg:mx-20  justify-center items-center'>
            <div className='left-div w-80 md:w-96 lg:w-[400px] leading-10 text-xl mx-auto'>
                <img className='w-full h-full' src={image} alt="" />
                <h1><b>নাম :</b>{name}</h1>
                <h1><b>দাম :</b>{price}</h1>
                <h1><b>পরিমাণ :</b>{quantity}</h1>
                <h1><b>বর্ণনা :</b>{description}</h1>
            </div>
            <div className='right-div w-80 md:w-96 lg:w-[600px] mx-auto' >
                <div class="card-body ">
                    <h2 class="card text-2xl font-bold  text-center">আপনার তথ্য দিন</h2>
                    <form onSubmit={postOrder} action='' className='text-center'>
                        <input name='userName' type="text" placeholder="আপনার নাম লিখুন " class="my-3 input input-bordered input-warning w-full max-w-lg" /><br />
                        <input name="userAddress" type="text" placeholder="আপনার ঠিকানা লিখুন " class="my-3 input input-bordered input-warning w-full max-w-lg" /><br />
                        <input name='UserEmail' type="text" value={user?.email} class="my-3 input input-bordered input-warning w-full max-w-lg" /><br />
                        <input name='productQuantity' type="text" placeholder="আপনি কত পরিমান নিতে চাচ্ছেন  " class="my-3 input input-bordered input-warning w-full max-w-lg" /><br />
                        <input name='userMobile' type="text" placeholder="আপনার ফোন লিখুন" class="my-3 input input-bordered input-warning w-full max-w-lg" /><br />
                        <input type="submit" className='btn btn-outline' value="সম্পন্ন করুন" />
                    </form>

                </div>

            </div>
        </div>
    );
};

export default Order;