import React, { useContext } from 'react';
import { Bar, BarChart, Tooltip, XAxis, YAxis } from 'recharts';
import { QuizContext } from '../Root/Root';




const Statistics = () => {

    const { data } = useContext(QuizContext)
    let dataAll = data.data;


    return (
        <div className='my-52 py-20 bg-white'>
            <BarChart width={320} height={400} data={dataAll}>
                <Bar dataKey="total" fill="#ff0095" />
                <XAxis dataKey="name" />
                <YAxis dataKey="total" />
                <Tooltip />
            </BarChart>
        </div>
    );
};

export default Statistics;