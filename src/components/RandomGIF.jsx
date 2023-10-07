import React from 'react'
import Spinner from './Spinner'
import useSelfMadeHook from '../hooks/useSelfMadeHook';


export default function RandomGIF() {
    const {gify,loading,getGifData} = useSelfMadeHook();

  return (
    <div className='w-[45%] border-black border-2 flex flex-col mt-6 items-center h-[45%] rounded-lg bg-green-400 my-5'>
        <h1 className='font-bold text-3xl underline text-center '>
            A Random GIF
        </h1>
        {
            loading ? (<Spinner/>) : (<img className='mt-5 border-2 border-red-400 max-h-[300px]' 
            src={gify} alt='' width='350px' height='300px'/>)
        }
        <button className='p-3 rounded-md bg-green-300 w-3/5 m-5' 
        onClick={()=> getGifData()}>
            Generate
        </button>
    </div>
  )
}
