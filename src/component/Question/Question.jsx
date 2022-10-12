import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid';
import { toast } from 'react-toastify';
import Options from '../Options/Options';


const Question = ({ allQuestion, }) => {
    const [open, setOpen] = useState(false);
    const { correctAnswer, question, options } = allQuestion;
    let questionsss = question.replace(/<\/?[^>]+(>|$)/g, '');
    console.log(options);

    const openClosedIcon = (id) => {
        setOpen(!open)
        toast.info(`Correct Ans:  ${id}`, { autoClose: 500 })
        setOpen(!open)
    }

    const writeAns = (id) => {

        toast.info(`Correct Ans:  `, { autoClose: 500 })

    }







    return (
        <div className='rounded-md  bg-cyan-900 border w-[340px] md:w-[500px]'>
            <div className='  flex flex-col  gap-4 w-[320px] m-[10px] md:w-[450px] md:m-[25px]'>
                <div className=''>
                    <div className='flex justify-between'>
                        <p className='text-md text-yellow-500 '>Question No : </p>
                        <Link onClick={() => openClosedIcon(correctAnswer)} className="text-white py-1.5 px-7 rounded " to="">
                            {open ? <EyeIcon className='h-6' /> : <EyeSlashIcon className='h-6' />}
                        </Link>
                    </div>
                    <p>{questionsss}</p>
                </div>
                <div className='flex justify-between text-xl font-bold mx-2'>
                    <div className='text-sm'>
                        <p className=' text-yellow-500 '>Ans:</p>
                        {
                            options.map(option => <Options option={option} />)



                            // options.map(options => <li onclick={console.log(options)} className='hover:bg-green-500 hover:cursor-pointer py-4 px-8 w-[290px] md:w-[420px] rounded text-black m-2 bg-slate-100'>{options}</li>,)
                        }
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Question;