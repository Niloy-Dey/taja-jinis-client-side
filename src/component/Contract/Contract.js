import React from 'react';

const Contract = () => {
    return (
        <div>
             <div className='mx-24 my-32 flex justify-center items-center'>
             <div class="card w-full bg-green-50 shadow-xl ">
                <div class="card-body">
                    <h2 class="card text-2xl font-bold  text-center">যোগাযোগ করুন</h2>
                    <div class="divider"></div>
                    <div className='text-center'>
                    <input type="text" placeholder="আপনার নাম লিখুন " class="my-3 input input-bordered input-warning w-full max-w-lg" /><br />
                    <input type="text" placeholder="আপনার ইমেইল লিখুন " class="my-3 input input-bordered input-warning w-full max-w-lg" /><br />
                    <input type="text" placeholder="আপনার ফোন লিখুন" class="my-3 input input-bordered input-warning w-full max-w-lg" /><br />
                    </div>
                    <div class="card-actions justify-center">
                        <button class="btn ">যোগাযোগ </button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Contract;