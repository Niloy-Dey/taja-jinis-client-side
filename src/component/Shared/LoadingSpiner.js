import React from 'react';
import { Circles } from 'react-loader-spinner'

const LoadingSpiner = () => {
    return (

        <div className='py-64 flex justify-center items-center'>
            <Circles
                height="100"
                width="100"
                color="#4fa94d"
                ariaLabel="circles-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </div>
    );
};

export default LoadingSpiner;