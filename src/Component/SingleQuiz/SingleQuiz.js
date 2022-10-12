import React from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import "./SingleQuiz.css"
const SingleQuiz = ({ element }) => {
    const {id,name,logo}=element
    const navigate = useNavigate();

    const handleNavigate=()=>{
        navigate(`/quiz/${id}`)
    }
    return (
        <div className="card w-80 bg-slate-500 shadow-xl mb-6">
            <figure className="px-8 pt-8">
                <img src={logo} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body  text-center ">
              
                <div className="flex justify-between gap-2">
                     <p className='text-3xl text-white'>{name}</p>
                   
                    <button onClick={handleNavigate} className="btn inline-block px-6 py-3.5 bg-orange-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-slate-600 hover:shadow-lg focus:bg-salte-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-400 active:shadow-lg transition duration-150 ease-in-out">Start Practise</button>
                  
                </div>
            </div>
        </div>
    );
};

export default SingleQuiz;