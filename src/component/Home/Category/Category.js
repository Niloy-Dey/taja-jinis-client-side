import React from 'react';
import { useNavigate } from 'react-router-dom';
import category1 from '../../../assets/category/category-1.png';
import category2 from '../../../assets/category/category-2.png';
import category3 from '../../../assets/category/category-3.png';
import category4 from '../../../assets/category/category-4.png';
import category5 from '../../../assets/category/category-5.png';
import category6 from '../../../assets/category/category-6.png';
import category7 from '../../../assets/category/category-7.png';
import category8 from '../../../assets/category/category-8.png';
import category9 from '../../../assets/category/category-9.png';
const Category = () => {

/* Ekhane protek ta button e onclick handler use kore data k filter korte paris 

    Filter korar por data  k same category route page e card e show korate parbi'
    
*/

const navigate = useNavigate();

const backToHome = () => {
    navigate('/home');
}



    return (
        <div className="my-20 place-items-center grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 ">
            
            <button onClick={() => navigate('/vegetable')} className="btn  m-6 hover:bg-green-700  h-36 w-36 btn-circle btn-outline">
                <img  className='p-4'  src={category1} alt="" />
                <h1 className=' text-xl '>সবজি</h1>
            </button>

            <button onClick={() => navigate('/mosla')} className="btn  m-6 selection: hover:bg-green-700 h-36 w-36 btn-circle btn-outline">
                <img  className='p-4'  src={category2} alt="" />
                <h1 className=' text-xl '>মসলা</h1>
            </button>

            <button onClick={() => navigate('/fish')} className="btn  m-6 hover:bg-green-700 h-36 w-36 btn-circle btn-outline">
                <img  className='p-4'  src={category3} alt="" />
                <h1 className=' text-xl '>মাছ </h1>
            </button>

            <button onClick={() => navigate('/shak')} className="btn  m-6 hover:bg-green-700 h-36 w-36 btn-circle btn-outline">
                <img  className='p-4'  src={category4} alt="" />
                <h1 className=' text-xl '>শাক</h1>
            </button>

            <button onClick={() => navigate('/sutki')} className="btn  m-6 hover:bg-green-700 h-36 w-36 btn-circle btn-outline">
                <img  className='p-4'  src={category5} alt="" />
                <h1 className=' text-xl '>শুটকী</h1>
            </button>
            
            <button onClick={() => navigate('/dal')} className="btn  m-6 hover:bg-green-700 h-36 w-36 btn-circle btn-outline">
                <img  className='p-4'  src={category6} alt="" />
                <h1 className=' text-xl '>ডাল</h1>
            </button>

            <button onClick={() => navigate('/rice')} className="btn  m-6 hover:bg-green-700 h-36 w-36 btn-circle btn-outline">
                <img  className='p-4'  src={category7} alt="" />
                <h1 className=' text-xl '>ধান</h1>
            </button>

            <button onClick={() => navigate('/fruit')} className="btn  m-6 hover:bg-green-700 h-36 w-36 btn-circle btn-outline">
                <img  className='p-4'  src={category8} alt="" />
                <h1 className=' text-xl '>ফল</h1>
            </button>

            <button onClick={() => navigate('/chicken')} className="btn  m-6 hover:bg-green-700 h-36 w-36 btn-circle btn-outline">
                <img  className='p-4'  src={category9} alt="" />
                <h1 className=' text-xl '>মাংস</h1>
            </button>


        </div>
    );
};

export default Category;