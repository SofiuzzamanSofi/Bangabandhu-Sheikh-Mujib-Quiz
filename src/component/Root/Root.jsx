import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
export const QuizContext = createContext('quiz')

const Root = () => {

    const quizzes = useLoaderData();


    return (
        <QuizContext.Provider value={quizzes}>
            <div className='bg-cyan-800'>

                <Navbar />
                <Outlet />
                <Footer />
            </div>
        </QuizContext.Provider>
    );
};

export default Root;