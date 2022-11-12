import React from 'react';
import Banner from './Banner/Banner';
import Category from './Category/Category';
import Developer from './Developer/Developer';
import UpdateDeveloper from './Developer/UpdateDeveloper';
import NeedHelp from './NeedHelp/NeedHelp';
import Offer from './Offer/Offer';
import ShowReview from './ShowReview';
import Marquee from 'react-fast-marquee';
import Review from './Review';

const Home = () => {
    return (
        <div className='mt-16 bg-green-50'>
              <Marquee gradient="true"  gradientWidth="0" className='pt-5 pb-2 bg-neutral font-bold text-xl text-white  ' speed="40">
            আমাদের ওয়েবসাইট মেনটেনেন্স এর কাজ চলছে সাময়িক অসুবিধার জন্য আমরা আন্তরিকভাবে দুঃখিত
            </Marquee>
            <Banner></Banner>

            <h1 className="text-center font-bold text-3xl  my-10"><u className="underline">ক্যা<span className="text-warning">টা</span>গরি</u></h1>
            <Category></Category>



            <h1 className="text-center font-bold text-3xl my-10"><u className="underline">আমাদের <span className="text-warning">অফার</span> সমুহ </u></h1>
            <Offer></Offer>


            <h2 className="text-center font-bold text-3xl  my-10">আমাদে <span className="text-warning">র প্র</span>কৌশলীরা</h2>
            {/* <Developer></Developer> */}
            <UpdateDeveloper></UpdateDeveloper>

            {/* <ShowReview></ShowReview> */}
            <h1 className='text-2xl text-orange-400 font-bold text-center my-3 '>আমাদের ক্লায়েন্ট মতামত </h1>
            <Review></Review>

            
            <NeedHelp></NeedHelp>



        </div>
    );
};

export default Home;