import React from 'react';
import paymentImage from '../../assets/payment-complete.png'
const h1 = () => {
    return (
        <div className='pt-32 pb-40  '>

            <div className='flex justify-center items-center '>
                <div className='card p-5 mx-5 w-96 bg-green-100 text-center '>
                    <img src={paymentImage} alt="" />
                </div>
            </div>
            
            <div className='card p-5  my-5 mx-5 bg-green-100 text-center '>
                    <h1 className='pb-2 '>আপনার অর্ডারটি সফলভাবে সম্পন্ন হয়েছে</h1>
                    <h1 className='pb-2 '>আপনি আগামী ৩ কর্মদিবসের মধ্যে আপনার প্রয়োজনীয় জিনিসটি পেয়ে যাবেন যেকোনো প্রয়োজনে আমাদের সাথে যোগাযোগ করার জন্য আমাদের হেল্প লাইন এ কল করুন </h1>
                    <h1 className='pb-2 '>আমাদের সাথে থাকার জন্য অসংখ্য ধন্যবাদ</h1>
                </div>
        </div>
    );
};

export default h1;