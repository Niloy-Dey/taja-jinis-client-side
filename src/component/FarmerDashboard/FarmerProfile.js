import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import userImage from '../../assets/user.png'
const FarmerProfile = () => {
    const [user] = useAuthState(auth);

    return (
        <div className=' mt-10 flex justify-center items-center'>
        <div className="card card-compact w-96  bg-base-100 shadow-xl">
            <figure><img className='w-80 h-80' src={userImage} alt="Shoes" /></figure>
            <div className="card-body  ">
                <h2 className="card-title  mx-auto"> {user?.displayName} </h2>
                <h2 className="card-title mx-auto"> {user?.email} </h2>

            </div>
        </div>
    </div>
    );
};

export default FarmerProfile;