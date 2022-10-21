import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useProduct from '../../../hooks/useProduct';
import LoadingSpiner from '../../Shared/LoadingSpiner';
const Rice = () => {
    const navigate = useNavigate()

    const [products] = useProduct([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => setIsLoading(false), 3000)
    }, [setIsLoading])


    const category = 'rice';
    // const category = 'ধান';
    const singleVegetable = products.filter(product => category == product.category)
    if (isLoading === true) {
        return <LoadingSpiner> </LoadingSpiner>
    }
    const OrderProduct =(id) =>{
        navigate(`/order/${id}`)
    }

    return (
        <div className='py-40 flex justify-center items-center bg-green-50'>
            <div className='grid lg:grid-cols-3 md:grid-cols-2  gap-10  ' >
            {
                singleVegetable.map( sv => 
                    <div class="card lg:w-96 md:w-80 w-80 bg-green-100 shadow-xl ">
                    <figure><img src={sv.image} className="w-full h-52" alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">
                            নাম: {sv.name}
                            <div class="badge badge-secondary">NEW</div>
                        </h2>
                        <h2>দাম : {sv.price}</h2>
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

export default Rice;