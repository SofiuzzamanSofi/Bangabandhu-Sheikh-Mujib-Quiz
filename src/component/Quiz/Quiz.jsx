import { Link } from 'react-router-dom';




const Quiz = ({ quiz }) => {
    const { id, logo, name, total } = quiz;



    return (
        <div className='rounded-md  bg-cyan-900 border w-[340px] md:w-[500px]'>
            <div className='  flex flex-col  gap-4 w-[320px] m-[10px] md:w-[450px] md:m-[25px]'>
                <img className='bg-zinc-900 rounded  m-1' src={logo} alt="" />
                <div className='flex justify-between text-xl font-bold mx-2'>
                    <p>{name}</p>
                    <p> Total Questions: {total}</p>
                </div>
                <Link to={`../question/${id}`} ><button className='hover:cursor-pointer hover:bg-green-700 bg-rose-700 py-4 w-full rounded font-bold'>Play Quiz</button></Link>
            </div>
        </div>
    );
};

export default Quiz;