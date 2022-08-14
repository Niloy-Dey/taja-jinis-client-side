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
        setTimeout(() => setIsLoading(false), 1000)
    }, [setIsLoading])

    const category = "vegetable";
    // const category ="সবজি";
    const singleVegetable = products.filter(product => category === product.category)
    // console.log(singleProduct)
    if (isLoading === true) {
        return <LoadingSpiner> </LoadingSpiner>
    }

    // const dataPass =(id) =>{
    //     navigate(`/vegetable/${id}`)
    // }

    // setTimeout(()=>setIsLoading(false), 2000 )
    return (
        <div className='py-40 flex justify-center items-center bg-green-50'>
            <div className='grid lg:grid-cols-3 md:grid-cols-2  gap-8  ' >
                {
                    singleVegetable.map(sv =>
                        <div class="card lg:w-96 md:w-80 w-80 bg-green-100 shadow-xl ">
                            {/*<figure><img src={image === '' ? '' :URL.createObjectURL(image) } alt="" /> </figure>                */}
                            <figure><img src={sv.image} className="w-full h-52" alt="Shoes" /></figure>
                            <div class="card-body">
                                <h2 class="card-title">
                                    নাম: {sv.name}
                                    <div class="badge badge-secondary">NEW</div>
                                </h2>
                                <h2>দাম : {sv.price}</h2>
                                <h2 className='text-sm'>বর্ণনা: <span className='text-sm'> {sv.description}</span></h2>
                                <div class="card-actions justify-end">
                                    {/* <button onClick={()=>dataPass(sv.id)} class="btn btn-sm ">ক্রয় করুন </button> */}
                                    <button class="btn btn-sm ">ক্রয় করুন </button>
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