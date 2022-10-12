import React from 'react';
import Topic from '../Topic/Topic';

const About = () => {
    return (
        <div>
            <div className='md:flex gap-4 bg-cyan-500 py-4'>
                <img className='md:w-[520px] pb-4 rounded' src="https://mujib100.gov.bd/assets/images/mujib/quiz.jpeg" alt="not found" />
                <div className='text-white bg-cyan-700 p-4 rounded text-justify'>
                    <h1 className='text-4xl font-bold pb-4'>Bangabandhu Sheikh Mujib Quiz</h1>
                    <p>In celebration of the 100th Birth Anniversary of the Father of the Nation Bangabandhu Sheikh Mujibur Rahman, and in enhancing the youth's knowledge of the history of Bangladesh, and the ideals of the Greatest Bengali of a Thousand years, we invite you to participate in the “Bangabandhu Sheikh Mujib Quiz”. Showcase your knowledge and stand a chance to great prizes every day.</p>
                </div>
            </div>
            <Topic />
        </div>
    );

};

export default About;