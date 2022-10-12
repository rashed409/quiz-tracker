import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizCard from '../QuizCard/QuizCard';
import './QuizDeatils.css'
const QuizDeatils = () => {
    const quiz=useLoaderData()
  
    return (
        <div>
             <h3 className='text-3xl mt-6 text-center font-semibold text-sky-400'> Quiz of JavaScript</h3>
            
           <div className="quizWrapper">
           {
                quiz.data.questions.map((allQuiz,idx)=><QuizCard allQuiz={allQuiz} key={allQuiz.id} quizId={idx}></QuizCard>)
            }
           
           </div>
           
        </div>
    );
};

export default QuizDeatils;