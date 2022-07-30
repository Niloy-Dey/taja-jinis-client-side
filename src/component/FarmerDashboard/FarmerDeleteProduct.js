import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const FarmerDeleteProduct = () => {

    /*  ekhane just ami const product diye ekta variable declear kore design ta kore dich i
     jokon prodcut er jaigai data load korbi tokon auto design generate hoye jabe  */
    const product = [
        {
            "Name": "niloy dey",
            "Image": "data:image/jpeg;base64,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",
            "price": " "
        }
    ];

    const handleDelete = id => {
    }
    return (
        <div> 
            <div className='text-center mt-20 flex justify-center items-center'>
            <div className='w-50 mx-auto ps-5 mt-5 pt-5'>
                <h1 className='text-orange-400 text-2xl font-bold  mb-3 ms-5 ps-3'>পণ্য মুছে ফেলুন</h1>

                {
                    product.map(tool =>
                        <div className='card-style my-5  ' key={tool.id}>
                            <div className='flex justify-around	 w-90 shadow-lg rounded-lg p-10 '>
                                <img className='w-20 mr-2' src={tool.Image} alt="" />
                                <div className='mx-2'>
                                    <h5> <b>{tool.Name}</b> </h5>
                                    <h5> <b>{tool.Price}</b> </h5>
                                    <h5> <b>{tool.Quantity}</b> </h5>
                                </div>
                                <h5 className='ml-2'><button onClick={() => handleDelete(tool._id)} className="delete-button  bg-green-400  p-2 rounded-lg text-white "> মুছে ফেলুন  </button></h5></div>
                        </div>)
                }

            </div>
        </div>
            <div className='text-center'>
            <Link to='/farmerDashboard/farmerAddProduct'> <button className="btn bg-green-400">নতুন পণ্য যোগ করুন</button> </Link>
            </div>
        </div>
    );
};

export default FarmerDeleteProduct;