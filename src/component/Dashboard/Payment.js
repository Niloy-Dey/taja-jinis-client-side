import React from 'react';
import payment from '../../assets/payment.png';
const Payment = () => {
    return (
        <div className='flex justify-center items-center mt-20'>
           <img className='w-96' src={payment} alt="" />
        </div>
    );
};

export default Payment;