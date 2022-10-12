import React, { useState } from 'react';
import { Bars4Icon, XCircleIcon } from '@heroicons/react/24/solid'
import img from '../../img/mujib-2.png'
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css'



const Navbar = () => {
    const [open, setOpen] = useState(false);



    return (
        <div>
            <div className='flex justify-between items-center p2-1 bg-slate-900 text-white h-14'>
                <Link to='/'><img className='rounded h-12 w-32 bg-gray-50  p-1' src={img} alt="not found" /></Link>
                <div className="hidden md:block " >
                    <NavLink className="mx-2  py-3 px-10 font-bold rounded" to="topic">Topic</NavLink>
                    <NavLink className="mx-2  py-3 px-10 font-bold rounded" to="statistics">Statistics</NavLink>
                    <NavLink className="mx-2  py-3 px-10 font-bold rounded" to="subjects">Subjects</NavLink>
                    <NavLink className="mx-2  py-3 px-10 font-bold rounded" to="blog">Blog</NavLink>
                </div>
                <Link onClick={() => setOpen(!open)} className="py-1.5 px-7 rounded md:hidden" to="">
                    {open ? <XCircleIcon className='h-10' /> : <Bars4Icon className='h-10' />}
                </Link>
            </div>
            <div className={`bg-slate-900   flex flex-col md:hidden absolute duration-1000 ease-in-out ${open ? 'top-15 right-0' : 'top-[-1000px]'}`} >

                <NavLink className="mx-2  py-3 px-10 font-bold rounded" to="topic">Topic</NavLink>
                <NavLink className="mx-2  py-3 px-10 font-bold rounded" to="statistics">Statistics</NavLink>
                <NavLink className="mx-2  py-3 px-10 font-bold rounded" to="subjects">Subjects</NavLink>
                <NavLink className="mx-2  py-3 px-10 font-bold rounded" to="blog">Blog</NavLink>
            </div>
        </div>
    );
};

export default Navbar;