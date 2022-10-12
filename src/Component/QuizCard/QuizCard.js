import React, { useEffect, useState } from 'react';
import './QuizCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, } from '@fortawesome/free-solid-svg-icons'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ModalDeatils from '../ModalDeatils/ModalDeatils';

const QuizCard = ({ allQuiz, quizId }) => {
    
    const { question, correctAnswer, id, options } = allQuiz;
    const [correct, setcorrect] = useState()
    const notify = (values) => {
        toast(values);
    }
    const handleClick = (value) => {
        if (value == correctAnswer) {
            notify('Correct answer')
        }
        else {
            notify('wrong answer')
        }
    }
        const handleModal=(id)=>{
           console.log(id)
       }

    return (
        <div>
            <div className="main-card w-96 mx-auto mt-8 shadow-lg p-4">
                <div className="question flex justify-between">
                    <h3>Quiz: {quizId}{question}</h3>
                    {/* modal area */}
                    <label htmlFor={`my-modal-${id}`} className="btn modal-button" ><FontAwesomeIcon icon={faEye} onClick={()=>handleModal(id)} /></label>
                     <ModalDeatils correctAnswer={correctAnswer} id={id}></ModalDeatils>
                </div>
                <div className="quiz-option mt-2">
                    <ul className='crsr'>
                        <li onClick={() => { handleClick(options[0]); notify() }} className='border p-4 mb-2'>{options[0]}</li>
                        <li onClick={() => { handleClick(options[1]); notify() }} className='border p-4 mb-2'>{options[1]}</li>
                        <li onClick={() => { handleClick(options[2]); notify() }} className='border p-4 mb-2'>{options[2]}</li>
                        <li onClick={() => { handleClick(options[3]); notify() }} className='border p-4 mb-2'>{options[3]}</li>
                    </ul>
                </div>
            </div>

            <ToastContainer autoClose={1000}></ToastContainer>
        </div>

    );
};

export default QuizCard;