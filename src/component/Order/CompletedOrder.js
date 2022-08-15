import React from 'react';
import { useNavigate } from 'react-router-dom';
import tikMark from '../../assets/banner/tikmark.jpg';
const CompletedOrder = () => {
    const navigate = useNavigate();
    const goToDashBoard=() =>{
        navigate('/dashboard/myOrder');
    }
    const goToHome=()=>{
        navigate('/')
    }


    return (
        <div  className='py-32  bg-green-100 '>
            <div class="card lg:w-96 md:w-96 w-80 mx-auto shadow-xl bg-white">
                <figure><img src={tikMark} className="w-52 h-52" alt="Shoes" /></figure>
                <div class="card-body">
                    <h1 className='text-xl'>আপনার অর্ডারকৃত জিনিসের জন্য সকল প্রকার তথ্য গৃহীত হয়েছে দয়া করে অর্ডারটি সম্পন্ন করার জন্য আপনার ড্যাশবোর্ড এ গিয়ে পেমেন্ট সম্পন্ন করুন</h1>
                <div class="flex items-center justify-center">
                    <button  onClick={goToDashBoard}    class="btn btn-sm m-1">ড্যাশবোর্ডে যান</button>
                    <button onClick={goToHome}   class="btn btn-sm m-1 ">হোমে পেইজে যান</button>
                </div>
                </div>
            </div>
        </div>
    );
};

export default CompletedOrder;