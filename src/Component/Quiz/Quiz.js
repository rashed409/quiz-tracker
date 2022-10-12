import React, { useEffect, useState } from 'react';
import SingleQuiz from '../SingleQuiz/SingleQuiz';
import './Quiz.css'
const Quiz = () => {
    const[quiz,setQuiz]=useState([])
    console.log('quizfrom',quiz)
    useEffect(()=>{
        fetch(`https://openapi.programming-hero.com/api/quiz`)
        .then(res=>res.json())
        .then(data=>setQuiz(data.data))
    },[])
    return (
        <div className='grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-4 mt-6 mb-4 p-6'>
            {
                quiz.map(ele=><SingleQuiz element={ele} key={ele.id} ></SingleQuiz>)
            }
            
        </div>
    );
};

export default Quiz;