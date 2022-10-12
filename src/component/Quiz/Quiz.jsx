import React from 'react';

const Quiz = ({ quiz }) => {
    const { id, logo, name, total } = quiz
    console.log(quiz)
    return (
        <div className='rounded-md  bg-cyan-900 border w-[340px] md:w-[500px]'>
            <div className='  flex flex-col  gap-4 w-[320px] m-[10px] md:w-[450px] md:m-[25px]'>
                <img className='bg-zinc-900 rounded  m-1' src={logo} alt="" />
                <div className='flex justify-between text-xl font-bold mx-2'>
                    <p>{name}</p>
                    <p> Total Questions: {total}</p>
                </div>
                <button className='hover:cursor-pointer hover:bg-green-700 bg-rose-700 py-4 w-full rounded font-bold'>Play Quiz</button>

            </div>
        </div>
    );
};

export default Quiz;