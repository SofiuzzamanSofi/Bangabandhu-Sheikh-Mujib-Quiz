import React from 'react';

const Blog = () => {
    return (
        <div className='text-center  text-white py-8 '>
            <div className='my-8'>
                <h1 className='lg:text-6xl md:text-5xl text-2xl text-yellow-400'>Some Question and ans for you.</h1>
            </div>
            <div className='my-4 py-4 bg-slate-700 rounded-lg'>
                <h1 className='text-xl my-2 px-8 text-yellow-300'>What is the purpose of react router.</h1>
                <div className='text-left px-8'>
                    <div className='px-8 text-justify table-color rounded-lg'>
                        <p >
                            React Router is mainly use for developing <span className='fond-bold'>Single Page Web Applications.</span> React Router is used to define multiple routes in the application. When a user types a a specific <span className='fond-bold'>URL</span> into the browser, and if this <span className='fond-bold'>URL</span> path matches any <span className='fond-bold'> 'route'</span> inside the router file, the user will be redirected to that particular route.
                        </p>
                    </div>
                </div>
            </div>
            <div className='my-4 py-4 bg-slate-700 rounded-lg'>
                <h1 className='text-xl my-2 px-8 text-yellow-300'>How does context Api work.</h1>
                <div className='text-left px-8'>
                    <div className='px-8 text-justify table-color rounded-lg'>
                        <p >
                            The React Context API is <span className='fond-bold'>a way for a React app to effectively produce global variables that can be passed around.</span> This is the alternative to <span className='fond-bold'> 'prop drilling' </span> or moving props from grandparent to child to parent, and so on. context is also touted as an easier, lighter approach to state management using Redux.
                        </p>
                    </div>
                </div>
            </div>
            <div className='my-4 py-4 bg-slate-700 rounded-lg'>
                <h1 className='text-xl my-2 px-8 text-yellow-300'>What is useRef hooks .</h1>
                <div className='text-left px-8'>
                    <div className='px-8 text-justify table-color rounded-lg'>
                        <p >
                            Essentially,  <span className='fond-bold'>useRef is like a "box" that can hold a mutable value in its current property.</span> You might be familiar with refs primarily as a way to access the DOM. If you pass a ref object to React with div, React will set its. Current property to the corresponding Dom node whenever that node changes.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Blog;