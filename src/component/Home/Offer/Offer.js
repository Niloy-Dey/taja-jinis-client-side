import React from 'react';

const Offer = () => {
    return (
       <div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2  grid-cols-1  place-items-center'>
            <div className="shadow-pink-300 card lg:w-96 md:w-96 w-80  h-96 bg-[#63cdda] shadow-lg my-10 ">
                <div className="card-body text-black">
                    <h2 className="card-title">৳৩০০</h2>
                    <h2 className="card-title">শাকসবজির বিশেষ অফার</h2>
                    <p className="card-text">For most businesses event like book fair, craft fair.</p>
                    <p><span className="pe-1"><i className="far fa-check-circle"></i></span>limited space access</p>
                    <p><span className="pe-1"><i className="far fa-check-circle"></i></span>Secuirty facility</p>
                    <p><span className="pe-1"><i className="far fa-check-circle"></i></span>event support</p>
                    <p><span className="pe-1"><i className="far fa-check-circle"></i></span>Decoration design</p>
                    <p><span className="pe-1"><i className="far fa-check-circle"></i></span>Per day bill</p>
                    <div className="card-actions justify-center">
                        <button className="btn btn-outline w-full font-bold">Buy Now</button>
                    </div>
                </div>
            </div>


            <div class=" shadow-blue-300  card lg:w-96 md:w-96 w-80  h-96 bg-[#feca57] shadow-lg my-10">
                <div class="card-body text-black ">
                    <h2 class="card-title">৳১২০০</h2>
                    <h2 class="card-title">ফলের বিশেষ অফার</h2>
                    <p class="card-text">For most corporate business events </p>
                    <p><span class="pe-1"><i class="far fa-check-circle"></i></span>Full space access</p>
                    <p><span class="pe-1"><i class="far fa-check-circle"></i></span>Dedicated team</p>
                    <p><span class="pe-1"><i class="far fa-check-circle"></i></span>Buffet food</p>
                    <p><span class="pe-1"><i class="far fa-check-circle"></i></span>premium Decoration</p>
                    <p><span class="pe-1"><i class="far fa-check-circle"></i></span>pay as plan</p>
                    <div class="card-actions justify-center">
                    <button class="btn btn-outline w-full font-bold  ">Buy Now</button>
                </div>
            </div>
            </div>
               


            <div className=" shadow-orange-300  card lg:w-96 md:w-96 w-80  h-96 bg-[#f78fb3] shadow-lg my-10">
                <div className="card-body text-black">
                    <h2 className="card-title">৳৭০০</h2>
                    <h2 className="card-title">বিশেষ অফার</h2>
                    <p className="card-text">For most weddings with premium plans </p>
                    <p><span className="pe-1"><i className="far fa-check-circle"></i></span>Full space access</p>
                    <p><span className="pe-1"><i className="far fa-check-circle"></i></span>Dedicated team</p>
                    <p><span className="pe-1"><i className="far fa-check-circle"></i></span>Buffet food</p>
                    <p><span className="pe-1"><i className="far fa-check-circle"></i></span>premium Decoration</p>
                    <p><span className="pe-1"><i className="far fa-check-circle"></i></span>pay as plan</p>
                    <div className="card-actions justify-center">
                        <button className="btn btn-outline w-full font-bold">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>

       </div>
    );
};

export default Offer;