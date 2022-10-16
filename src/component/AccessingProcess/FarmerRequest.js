import React, { useEffect } from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';

const FarmerRequest = () => {
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
    return(<>
    <div className='flex h-screen justify-center items-center mt-10  bg-green-50'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">কৃষক হবার জন্য আবেদন </h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

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
                        <input className='btn w-full max-w-xs text-white' type="submit" value="প্রবেশ করুন" />
                    </form>
                    <p><small>আপনি যদি নতুন হয়ে থাকেন <Link className='text-primary' to="/signUp"> তাহলে নিবন্ধন সম্পন্ন করুন</Link></small></p>
                    <div className="divider">অথবা</div>
                    <button
                        onClick={() => signInWithGoogle()}
                        className="btn btn-outline"
                    >গুগলের সাহায্যে প্রবেশ করুন</button>
                </div>
            </div>
        </div >
    </>)
}



export default FarmerRequest;