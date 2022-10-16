import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import auth from '../../firebase.init';



const Navbar = () => {

const admin = '';
    const logout = () => {
        signOut(auth);
    }
    const [user] = useAuthState(auth);
    console.log(user?.email);
    const menuContent = <>
        <li><NavLink to="/home">হোম</NavLink></li>
        <li><NavLink to="/category">ক্যাটাগরি</NavLink></li>
        <li><NavLink to="/about">আমাদের সম্পর্কে</NavLink></li>
        <li><NavLink to="/contact">যোগাযোগ</NavLink></li>
        {
            user && <li><NavLink to="/dashboard"> ড্যাশবোর্ড</NavLink></li>
        }
{/*         
        {
            admin &&    <li><NavLink to="/admin">এডমিন</NavLink></li> 
        } */}
         <li><NavLink to="/admin">এডমিন</NavLink></li> 
        
        <li><NavLink to="/farmerDashboard">কৃষক</NavLink></li>

        <li> {user ? <button onClick={logout} className=''><NavLink to="/">বের হোন</NavLink></button> : <NavLink to="/login">নিবন্ধন করুন</NavLink>}</li>
        <li><NavLink to="/FarmerRequest"> <button class="btn btn-accent">কৃষক হোন</button></NavLink></li>
       

    </>

    return (
        <div>
            <div className="navbar flex justify-between fixed top-0 z-40 bg-green-700 text-white font-bold">
                <div className="navbar-start">
                    <Link to="/home" className="btn btn-ghost normal-case text-xl">তাজা জিনিস</Link>
                </div>


                <div className='navbar-center'>
                    <div className="navbar hidden lg:flex ">
                        <ul className="menu menu-horizontal p-0 ">
                            {menuContent}
                        </ul>
                    </div>
                </div>
                <div className="dropdown dropdown-end  bg-green-700">
                    <label tabIndex="0" className=" lg:hidden">

                        {/* one button work for navbar , dashboard and admin pages  */}

                        {/* {
                            <NavLink to="/dashboard"> </NavLink> && 
                            <label for="my-drawer" className=" bg-green-700 drawer-button"> <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg> </label>     
                        } */}
                        <label for="my-drawer" className=" bg-green-700 drawer-button"> <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg> </label>

                        {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg> */}
                    </label>

                    <ul tabIndex="0" className=" bg-green-700 menu menu-compact dropdown-content mt-3 p-2 shadow  rounded-box w-52">
                        {menuContent}
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Navbar;