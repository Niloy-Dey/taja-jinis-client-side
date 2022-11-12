import React, { useEffect, useState } from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';

const FarmerRequest = () => {
    // const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    // const { register, formState: { errors }, handleSubmit } = useForm();
    // const [

    //     createUserWithEmailAndPassword,
    //     user,
    //     loading,
    //     error,
    // ] = useCreateUserWithEmailAndPassword(auth);

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const [request, setRequest] = useState({ status: "pending" });



    const navigate = useNavigate();

    // let signInError;



    // if (error || gError || updateError) {
    //     signInError = <p className='text-red-500'><small>{error?.message || gError?.message || updateError?.message}</small></p>
    // }

    // if (user || gUser) {
    //     navigate('/home');
    // }
    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newRequestData = { ...request };
        newRequestData[field] = value;
        setRequest(newRequestData);
    }

    // const onSubmit =  data => {

    //     // await createUserWithEmailAndPassword(data.email, data.password,);
    //     // await updateProfile({ displayName: data.name });
    //     console.log('update done');
    //     console.log(data);
    // }
    const onSubmit = (e) => {
            // fetch('http://localhost:5000/farmerRequest', {
            fetch('https://taja-jinis.herokuapp.com/farmerRequest', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(request)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    console.log("form submitted successfully")
                }
            })
        e.preventDefault();
    }
    return (<>
        <div className='flex py-32  justify-center items-center   bg-green-50'>
            <div className="card   lg:w-[700px] md:w-[500px] w-80 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">কৃষক হবার জন্য আবেদন </h2>
                    <form onSubmit={onSubmit}>
                        {/*Farmer profile Image */}
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text">ছবি</span>
                            </label>
                            <input
                                type="text"
                                name="photo"
                                placeholder="ছবি"
                                className="input input-bordered"
                                onBlur={handleOnBlur}
                            />
                        </div>

                        {/* Farmer Name */}
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text">নাম</span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                placeholder="নাম"
                                className="input input-bordered "
                                onBlur={handleOnBlur}
                            />
                        </div>


                        {/* Farmer Email/ Number */}
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text">ইমেল/মোবাইল নাম্বার</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="ইমেল"
                                className="input input-bordered "
                                onBlur={handleOnBlur}

                            />
                            {/* <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label> */}

                        </div>

                        {/* Farmer Bkash Number */}
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text">Bkash নাম্বার</span>
                            </label>
                            <input
                                type="text"
                                name="bikashNumber"
                                placeholder="বিকাশ নম্বর"
                                className="input input-bordered "
                                onBlur={handleOnBlur}

                            />
                        </div>



                        {/* NID Number */}
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text">NID নাম্বার </span>
                            </label>
                            <input
                                type="text"
                                name="nidNumber"
                                placeholder="এন.আইডি নম্বর"
                                className="input input-bordered "
                                onBlur={handleOnBlur}

                            />
                        </div>


                        {/* Farmer Address */}
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text">বর্তমান ঠিকানা</span>
                            </label>
                            <input
                                type="text"
                                name="address"
                                placeholder="ঠিকানা"
                                className="input input-bordered "
                                onBlur={handleOnBlur}

                            />
                        </div>

                        {/* Farmer Password*/}
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text">পাসওয়ার্ড</span>
                            </label>
                            <input
                                type="password"
                                name="password"
                                placeholder="পাসওয়ার্ড"
                                className="input input-bordered "
                                onBlur={handleOnBlur}
                            // {...register("password", {
                            //     required: {
                            //         value: true,
                            //         message: 'Password is Required'
                            //     },
                            //     minLength: {
                            //         value: 6,
                            //         message: 'Must be 6 characters or longer'
                            //     }
                            // })}
                            />
                            {/* <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label> */}
                        </div>



                        {/* {signInError} */}
                        <input className='btn w-full text-white'
                            type="submit"
                            value="জমা দিন" />
                    </form>
                    {/* <p><small>আপনি যদি নতুন হয়ে থাকেন <Link className='text-primary' to="/signUp"> তাহলে নিবন্ধন সম্পন্ন করুন</Link></small></p>
                    <div className="divider">অথবা</div>
                    <button
                        onClick={() => signInWithGoogle()}
                        className="btn btn-outline"
                    >গুগলের সাহায্যে প্রবেশ করুন</button> */}
                </div>
            </div>
        </div >
    </>)
}



export default FarmerRequest;