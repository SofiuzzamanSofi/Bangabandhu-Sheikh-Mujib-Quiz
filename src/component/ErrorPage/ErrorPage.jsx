import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {



    const error = useRouteError();
    console.log(error);
    return (
        <div className='flex flex-col items-center gap-4 mt-20'>
            <h2 className='text-2xl font-bold'>It's look like, you put rong path.</h2>
            <h1 className='text-6xl font-extrabold'>Page Not Found </h1>
            <p className='text-xl font-bold text-red-700'>{error.statusText || error.messege}</p>
            <p className='text-6xl font-extrabold text-red-700 mb-10'>{error.status ? error.status : "Nothing found sir"}</p>

            <Link to={'/'}><button className='bg-emerald-900 py-4 px-6 rounded text-rose-50'>Go Home Page</button></Link>
        </div>
    );
};

export default ErrorPage;