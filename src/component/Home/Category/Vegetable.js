import React, { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useProduct from '../../../hooks/useProduct';
import LoadingSpiner from '../../Shared/LoadingSpiner';

const Vegetable = () => {
    const navigate = useNavigate()

    const [products] = useProduct([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => setIsLoading(false), 3000)
    }, [setIsLoading])

    const category = "vegetable";
    // const category ="সবজি";
    const singleVegetable = products.filter(product => category === product.category)
    // console.log(singleProduct)
    if (isLoading === true) {
        return <LoadingSpiner> </LoadingSpiner>
    }

    const OrderProduct =(id) =>{
        navigate(`/order/${id}`)
    }

    return (
        <div className='py-40 flex justify-center items-center bg-green-50'>
            <div className='grid lg:grid-cols-3 md:grid-cols-2  gap-8  ' >
                {
                    singleVegetable.map(sv =>
                        <div  id={sv._id} class="card lg:w-96 md:w-80 w-80 mx-auto bg-green-100 shadow-xl ">
                            {/*<figure><img src={image === '' ? '' :URL.createObjectURL(image) } alt="" /> </figure>                */}
                            <figure><img src={sv.image} className="w-full h-52" alt="Shoes" /></figure>
                            <div class="card-body">
                                <h2 class="card-title">
                                    নাম: {sv.name}
                                    <div class="badge badge-secondary">NEW</div>
                                </h2>
                                <h2><span className='mr-2 '>দাম : {sv.price} </span> <span>পরিমাণ: {sv.quantity}</span></h2>
                                <h2 className='text-sm'>বর্ণনা: <span className='text-sm'> {sv.description}</span></h2>
                                <div class="card-actions justify-end">
                                    <button onClick={()=>OrderProduct(sv._id, sv)} class="btn btn-sm ">ক্রয় করুন </button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Vegetable;