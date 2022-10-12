import React from 'react';

const Options = ({ option }) => {

    return (
        <li onClick={'option'} className='hover:bg-green-500 hover:cursor-pointer py-4 px-8 w-[290px] md:w-[420px] rounded text-black m-2 bg-slate-100'>{option}</li>
    );
};

export default Options;