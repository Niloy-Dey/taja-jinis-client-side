import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
// import db from './firebase';
const HeaderOption = () => {
    const username= " তাজা জিনিস";
    const [message, setMessage] = useState();

    useEffect(() =>{

    }, [])
    return (
        <div className=' bg-indigo-300 py-24 flex justify-center items-center '>
                <div className=" w-96 bg-green-100 py-3 border-b-2">
                    <div className="flex items-center space-x-4">
                        <img className='w-10 sm:w-16 h-10 sm:h-16 ' src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg" alt="" />

                        <div className="flex flex-col leading-tight">
                            <div className="text-2xl mt-1 flex items-center">
                                <span>{username} </span>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default HeaderOption;