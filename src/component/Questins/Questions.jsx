import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';





const Questions = () => {

    const quizzess = useLoaderData();
    const { name, logo, questions, total } = quizzess.data;

    return (
        <div>
            <div className='text-center  text-white'>
                <h1 className='text-4xl py-4'>Welcome to Quiz Exams.</h1>
                <div>
                    <img className='bg-zinc-900 rounded m-1 text-center w-56 mx-auto h' src={logo} alt="" />
                </div>
                <div className='flex justify-center gap-8 text-xl font-bold mx-2 py-4'>
                    <p>Quiz of {name}</p>
                    <p> Total Questions: {total}</p>
                </div>
                <div className='grid justify-items-center gap-y-16 lg:grid-cols-2 bg-cyan-400 py-14 text-left'>
                    {
                        questions.map(allQuestion => <Question key={allQuestion.id} allQuestion={allQuestion} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Questions;