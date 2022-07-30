import React from 'react';
import { Link, NavLink , Outlet, useNavigate } from 'react-router-dom';
const FarmerDashboard = () => {
    const navigate = useNavigate();

    const backToHome = () => {
        navigate('/home');
    }
    return (
        <div className="drawer drawer-mobile mt-16 lg:mt-20">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ">
            <h1 className='lg:text-center py-2 font-bold lg:text-xl md:text-center text-sm  '>প্রিয় কৃষক ভাই আপনাকে ড্যাশবোর্ডে স্বাগতম</h1>
            <Outlet></Outlet>
            {/* <label for="my-drawer" className="btn btn-primary drawer-button"> Open </label> */}
        </div>

        <div className="drawer-side ">
            <label for="my-drawer" className="drawer-overlay"></label>
            <ul className="menu  p-4 overflow-y-auto w-44 lg:w-80 bg-green-100 text-base-content">
                <li> <NavLink to="/farmerDashboard/farmerProfile">আমার প্রোফাইল</NavLink> </li>
                <li> <NavLink to="/farmerDashboard/farmerAddProduct">পণ্য যোগ করুন</NavLink> </li>
                <li> <NavLink to="/farmerDashboard/farmerDeleteProduct">পণ্য মুছুন</NavLink> </li>
                <li> <NavLink to="/farmerDashboard/farmerAllPayment">লেনদেন </NavLink> </li>
                <li> <NavLink to="/farmerDashboard/farmerReview">মতামত দিন</NavLink> </li>
                <hr />
                <li><button onClick={backToHome} className="btn btn-success mt-20 text-white">হোম এ ফিরে যাও </button></li>
            </ul>
        </div>
    </div>
    );
};

export default FarmerDashboard;