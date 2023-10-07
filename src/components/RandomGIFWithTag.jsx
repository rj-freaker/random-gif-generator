import React, {useState } from 'react'
import Spinner from './Spinner';
import useSelfMadeHook from '../hooks/useSelfMadeHook';

export default function RandomGIFWithTag() {

    const [tag,setTag] = useState('jerry');
    const {gify,loading,getGifData} = useSelfMadeHook(tag);
    
  return (
    <div className='w-[45%] border-black border-2 flex flex-col mt-6 items-center h-[50%] rounded-lg bg-green-400 my-5'>
        <h1 className='font-bold underline text-3xl'>
            Random {tag} GIF
        </h1>
        {
            loading ? (<Spinner/>) : (<img className='mt-5 border-2 border-red-400 max-h-[300px]'
            src={gify} alt='' width='350px' height='300px'/>)
        }
        <input className='mt-5 border-2 border-red-400 bg-red-500 w-3/5 p-2 rounded-md text-center'
        type='text' onChange={(e)=>setTag(e.target.value)} value={tag}/>

        <button className='p-3 rounded-md bg-yellow-300 w-3/5 m-5'
        onClick={()=> getGifData(tag)}>
            Generate
        </button>
</div>
  )
}
