import React from 'react';

const NeedHelp = () => {
    return (
        <div className='bg-[#b8e994] py-20 text-center my-16  '>
            <h1 className="text-center font-bold text-3xl  my-5 ">যে<span className="text-warning">কো</span>নো প্রয়োজনে যোগাযোগ ক<span className="text-warning">রু</span>ন</h1>

           
                <div className="divider mx-20 "></div>
              

            <button type="button" className="mx-8 my-5  special-btn btn btn-info btn-lg rounded-pill  fw-bolder">ম্যানেজার</button>
            <button type="button" className="mx-8 my-5 btn btn-warning btn-lg rounded-pill  fw-bolder">সুপারভাইজার </button>
            <button type="button" className="mx-8 my-5 special-btn btn btn-info btn-lg rounded-pill  fw-bolder">এডভাইসর </button>
        </div>
    );
};

export default NeedHelp;