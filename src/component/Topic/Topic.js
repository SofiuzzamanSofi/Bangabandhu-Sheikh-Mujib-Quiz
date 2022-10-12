import React, { useContext } from 'react';
import Quiz from '../Quiz/Quiz';
import { QuizContext } from '../Root/Root';

const Topic = () => {
    const quizzes = useContext(QuizContext)
    return (
        <div className='bg-cyan-500 mt-14 pt-6 text-white '>
            <h3 className='text-center text-6xl font-bold my-4'>Chose your favorite topic</h3>
            <div className='grid justify-items-center gap-y-16 lg:grid-cols-2 bg-cyan-400 py-14'>
                {/* <div className='flex flex-col gap-4 justify-between items-center md:flex-cols'> */}
                {
                    quizzes.data.map(quiz => <Quiz key={quiz.id} quiz={quiz} />)
                }
            </div>
        </div >
    );
};

export default Topic;