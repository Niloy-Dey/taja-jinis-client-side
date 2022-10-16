import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const NeedHelp = () => {
    const navigate = useNavigate();
    const contact = () =>{
        navigate('/contact');

    }
    return (
        <div className='bg-green-100 py-20 text-center my-16  '>
            <h1 className="text-center font-bold text-3xl  my-5 ">যে<span className="text-warning">কো</span>নো প্রয়োজনে যোগাযোগ ক<span className="text-warning">রু</span>ন</h1>

           
                <div className="divider mx-20 "></div>
              

            <button onClick={contact} type="button" className="mx-8 my-5  special-btn btn btn-outline btn-lg rounded-pill bg-blue-100  fw-bolder">ম্যানেজার</button>
            <button onClick={contact} type="button" className="mx-8 my-5 btn  btn-lg rounded-pill btn-outline bg-orange-100 fw-bolder">সুপারভাইজার </button>
            <button onClick={contact} type="button" className="mx-8 my-5 special-btn btn  btn-lg btn-outline  bg-pink-100 rounded-pill  fw-bolder">এডভাইসর </button>
        </div>
    );
};

export default NeedHelp;