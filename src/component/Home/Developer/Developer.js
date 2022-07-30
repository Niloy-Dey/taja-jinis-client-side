import React from 'react';
import niloy from '../../../assets/developer/niloy.jpg';
import avishek from '../../../assets/developer/avishek.png';
import bijon from '../../../assets/developer/bijon.png';
import etu from '../../../assets/developer/etu.jpg'
import najnin from '../../../assets/developer/nipa.jpg'
import arpita from '../../../assets/developer/arpita.png'
import noshin from '../../../assets/developer/noshin.png'
import './Developer.css'
import About from '../../About/About';
const Developer = () => {


    // const images =[
    //     {
    //         "name": 'fruit-1.jpg'
    //     },
    //     {
    //         "name": 'fruit-2.jpg'
    //     },
    //     {
    //         "name":"vegetable-4.jpg"
    //     },
    //     {
    //         "name": "vegetable-5.jpg"
    //     }
    // ];


    return (
        <div className=' mb-20 '>
            <div className='lg:mx-80 place-items-center grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-1'>
                <div className="m-2">
                    <div className="single_member">
                        <div className="image ">
                            <img src={niloy} alt="" />
                        </div>
                        <div className="content fw-bolder">
                            <h3 className="name fs-2">Niloy Dey</h3>
                            <span className="designation " >Front-End Developer</span>
                        </div>
                        <div className="image-border"></div>
                    </div>
                </div>


                <div className="m-2 ">
                    <div className="single_member">
                        <div className="image h-full ">
                            <img className='image-full' src={avishek} alt="" />
                        </div>
                        <div className="content fw-bolder">
                            <h3 className="name ">Avishek Devnath</h3>
                            <span className="designation ">Back-End Developer</span>
                        </div>
                        <div className="image-border"></div>
                    </div>
                </div>
            </div>






            <div className='lg:mx-40  place-items-center grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-1'>
                <div className="m-5">
                    <div className="single_member">
                        <div className="image ">
                            <img src={najnin} alt="" />
                        </div>
                        <div className="content fw-bolder text-black">
                            <h3 className="name text-lg font-bold ">Najnin Aktar Nipa</h3>
                            <span className="designation " >Manager</span>
                        </div>
                        <div className="image-border"></div>
                    </div>
                </div>


                <div className="m-5 ">
                    <div className="single_member">
                        <div className="image h-full ">
                            <img className='image-full' src={arpita} alt="" />
                        </div>
                        <div className="content fw-bolder text-black">
                            <h3 className="name text-lg font-bold">Arpita Dhar</h3>
                            <span className="designation ">Advisor</span>
                        </div>
                        <div className="image-border"></div>
                    </div>
                </div>

                <div className="m-5 ">
                    <div className="single_member">
                        <div className="image h-full ">
                            <img className='image-full' src={noshin} alt="" />
                        </div>
                        <div className="content fw-bolder text-black">
                            <h3 className="name text-lg font-bold">Umme Noshin Shefa</h3>
                            <span className="designation ">Supervisor</span>
                        </div>
                        <div className="image-border"></div>
                    </div>
                </div>
            </div>


            {/* <div>
                {
                    images.map(im =><About image={im}></About>)
                }
            </div> */}
        </div>
    );
};

export default Developer;

