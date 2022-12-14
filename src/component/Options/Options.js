import React from 'react';

const Options = ({ option, writeAns, correctAnswer }) => {

    return (
        <li onClick={() => writeAns(option, correctAnswer)} className='hover:bg-green-500 hover:cursor-pointer py-4 px-8 w-[290px] md:w-[420px] rounded text-black m-2 bg-slate-100'>{option}</li>
    );
};

export default Options;