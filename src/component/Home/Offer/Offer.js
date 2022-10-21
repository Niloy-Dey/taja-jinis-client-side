import React from 'react';

const Offer = () => {
    return (
        <div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2  grid-cols-1  place-items-center'>
                <div className=" card lg:w-96 md:w-96 w-80  h-96 bg-blue-100 shadow-lg my-10 ">
                    <div className="card-body text-black">
                        <h2 className="card-title">৳৩০০</h2>
                        <h2 className="card-title">বিশেষ অফার</h2>
                        <p><span className="pe-1"><i className="far fa-check-circle"></i></span>ইভেন্টের জন্য।</p>
                        <p><span className="pe-1"><i className="far fa-check-circle"></i></span>সীমিত স্থান প্রবেশাধিকার</p>
                        <p><span className="pe-1"><i className="far fa-check-circle"></i></span>নিরাপত্তা সুবিধা</p>
                        <p><span className="pe-1"><i className="far fa-check-circle"></i></span>প্রতি দিনের বিল</p>
                        <div className="card-actions justify-center">
                            <button className="btn btn-outline w-full font-bold">বুক করুন </button>
                        </div>
                    </div>
                </div>


                <div class="   card lg:w-96 md:w-96 w-80  h-96 bg-orange-100 shadow-lg my-10">
                    <div class="card-body text-black ">
                        <h2 class="card-title">৳১২০০</h2>
                        <h2 className="card-title">বিশেষ অফার</h2>
                        <p><span className="pe-1"><i className="far fa-check-circle"></i></span>ইভেন্টের জন্য।</p>
                        <p><span className="pe-1"><i className="far fa-check-circle"></i></span>সীমিত স্থান প্রবেশাধিকার</p>
                        <p><span className="pe-1"><i className="far fa-check-circle"></i></span>নিরাপত্তা সুবিধা</p>
                        <p><span className="pe-1"><i className="far fa-check-circle"></i></span>প্রতি দিনের বিল</p>
                        <div class="card-actions justify-center">
                            <button class="btn btn-outline w-full font-bold  ">বুক করুন </button>
                        </div>
                    </div>
                </div>



                <div className="   card lg:w-96 md:w-96 w-80  h-96 bg-pink-100 shadow-lg my-10">
                    <div className="card-body text-black">
                        <h2 className="card-title">৳৭০০</h2>
                        <h2 className="card-title">বিশেষ অফার</h2>
                        <p><span className="pe-1"><i className="far fa-check-circle"></i></span>ইভেন্টের জন্য।</p>
                        <p><span className="pe-1"><i className="far fa-check-circle"></i></span>সীমিত স্থান প্রবেশাধিকার</p>
                        <p><span className="pe-1"><i className="far fa-check-circle"></i></span>নিরাপত্তা সুবিধা</p>
                        <p><span className="pe-1"><i className="far fa-check-circle"></i></span>প্রতি দিনের বিল</p>
                        <div className="card-actions justify-center">
                            <button className="btn btn-outline w-full font-bold">বুক করুন </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Offer;