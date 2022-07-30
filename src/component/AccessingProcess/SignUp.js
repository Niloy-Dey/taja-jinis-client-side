import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);



    const navigate = useNavigate();

    let signInError;



    if (error || gError || updateError) {
        signInError = <p className='text-red-500'><small>{error?.message || gError?.message || updateError?.message}</small></p>
    }

    if (user || gUser) {
        navigate('/home');
    }

    const onSubmit = async data => {
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });
        console.log('update done');

    }
    return (
        <div className='flex mt-10 h-screen leading-3 justify-center items-center bg-green-50'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">নিবন্ধন করুন</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

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



                        <div className='text-sm my-3 '>
                          <span className='mr-3'>পছন্দ করুন : </span>
                          <input type="radio" id="farmer" name="fav_language" value="farmer"/>
                          <label for="farmer" className='mr-2 '>কৃষক</label>
                          <input type="radio" id="normal_user" name="fav_language" value="normal_user" />
                          <label for="normal_user">সাধারণ ব্যবহারকারী</label>
                        </div>


                        <input className='btn w-full max-w-xs text-white' type="submit" value="নিবন্ধন করুন" />
                    </form>
                    <p><small>আপনি যদি আগে নিবন্ধন করে থাকেন  <Link className='text-primary' to="/login"> তাহলে প্রবেশ করুন</Link></small></p>
                    <div className="divider">অথবা</div>
                    <button
                        onClick={() => signInWithGoogle()}
                        className="btn btn-outline"
                    >গুগলের সাহায্যে প্রবেশ করুন</button>
                </div>
            </div>
        </div >
    );
};

export default SignUp;