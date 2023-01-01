import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { toast } from 'react-toastify';
import LoadingSpiner from '../Shared/LoadingSpiner';

const SignUp = () => {
  
    const [loginData, setLoginData] = useState({});
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const navigate = useNavigate();
    let signInError;

    console.log("In sign up page");
    if (error || gError || updateError) {
        signInError = <p className='text-red-500'><small>{error?.message || gError?.message || updateError?.message}</small></p>
    }

    if (user || gUser) {
        console.log(user);
       
    }
    if(loading | gLoading){
        return <LoadingSpiner></LoadingSpiner>
    }


    const onSubmit = async data => {
        // console.log(data);        
        // console.log(register);
        await createUserWithEmailAndPassword(data.email, data.password);

        
        // const userEmail = data.email;
        // const userPassword = data.password;
        
        // console.log(user)
        const userObject = {

            email:data.email,
            name:data.name,
            password:data.password,
            role:'user'
        }

       console.log(userObject);
        setLoginData(userObject);

        // const field = e.target.name;
        // const value = e.target.value;
        // const newLoginData = { ...loginData };
        // newLoginData[field] = value;
        // setLoginData(newLoginData);
        



        fetch('https://taja-jinis-server.vercel.app/user', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userObject)
        })


            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    console.log("form submitted successfully")
                }
            })
        // e.preventDefault();

        navigate('/home');
        toast('অ্যাকাউন্ট তৈরি করা হয়েছে');

        // const googleLogin = await signInWithGoogle(data.email);
        // await updateProfile({ displayName: data.name });
        // console.log('update done');

    }


    return (
        <div className='flex mt-10 h-screen leading-3 justify-center items-center bg-green-50'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">নিবন্ধন করুন</h2>
                    <form onSubmit={handleSubmit(onSubmit)}  >
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">নাম</span>
                            </label>
                            <input
                                type="text"
                                placeholder="নাম"
                                className="input input-bordered w-full max-w-xs"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Name is Required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                            </label>
                        </div>


                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">ইমেল</span>
                            </label>
                            <input
                                type="email"
                                placeholder="ইমেল"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is Required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid Email'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>
                        </div>


                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">পাসওয়ার্ড</span>
                            </label>
                            <input
                                type="password"
                                placeholder="পাসওয়ার্ড"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is Required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 characters or longer'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>
                        </div>


                        {signInError}


                        {/* <div className='text-sm my-3'>
                            <span className='mr-3 '>পছন্দ করুন : </span>
                            <span className="form-check text-sm my-3 ">
                                <label htmlFor="farmer">
                                    <input
                                        {...register('role', { required: true })}
                                        type="radio"
                                        name="role"
                                        value="farmer"
                                        className="form-check-input"
                                        id="farmer"
                                    />
                                    কৃষক
                                </label>
                            </span>

                            <span className="form-check text-sm my-3 ">
                                <label htmlFor="normal_user">
                                    <input
                                        {...register('role', { required: true })}
                                        type="radio"
                                        name="role"
                                        value="normal_user"
                                        className="form-check-input ml-3"
                                        id="normal_user"
                                    />
                                    সাধারণ ব্যবহারকারী
                                </label>
                            </span>
                        </div> */}


                        <input className='btn w-full max-w-xs text-white' type="submit" value="নিবন্ধন করুন" />
                    </form>
                    <p><small>আপনি যদি আগে নিবন্ধন করে থাকেন  <Link className='text-primary' to="/login"> তাহলে প্রবেশ করুন</Link></small></p>
                    {/* <div className="divider">অথবা</div>
                    <button
                        onClick={() => signInWithGoogle()}
                        className="btn btn-outline"
                    >গুগলের সাহায্যে প্রবেশ করুন</button> */}
                </div>
            </div>
        </div >
    );
};

export default SignUp;