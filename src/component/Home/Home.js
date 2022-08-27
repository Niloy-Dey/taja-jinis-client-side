import React from 'react';
import Banner from './Banner/Banner';
import Category from './Category/Category';
import Developer from './Developer/Developer';
import UpdateDeveloper from './Developer/UpdateDeveloper';
import NeedHelp from './NeedHelp/NeedHelp';
import Offer from './Offer/Offer';
import ShowReview from './ShowReview';

const Home = () => {
    return (
        <div className='mt-16 bg-green-50'>
            <Banner></Banner>

            <h1 className="text-center font-bold text-3xl  my-10"><u className="underline">ক্যা<span className="text-warning">টা</span>গরি</u></h1>
            <Category></Category>



            <h1 className="text-center font-bold text-3xl my-10"><u className="underline">আমাদের <span className="text-warning">অফার</span> সমুহ </u></h1>
            <Offer></Offer>


            <h2 className="text-center font-bold text-3xl  my-10">আমাদে <span className="text-warning">র প্র</span>কৌশলীরা</h2>
            {/* <Developer></Developer> */}
            <UpdateDeveloper></UpdateDeveloper>

            <ShowReview></ShowReview>

            
            <NeedHelp></NeedHelp>



        </div>
    );
};

export default Home;