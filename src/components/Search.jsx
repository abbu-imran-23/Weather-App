import React, { useRef } from 'react'

export default function Search(props) {
    const searchInput = useRef();
    return (
        <div className='shadow-xl flex flex-col items-center'>
            <h1 className='text-blue-600 text-[2rem] p-2 font-semibold '>Weather App</h1>
            <div className='flex mb-6'>
            <input type="search" value={props.searchData} className='border border-black w-full p-3 text-2xl' onChange={() => props.eventHandler(searchInput.current.value)} ref={searchInput}/>
            <button onClick={props.searchWeather} className='p-3 bg-slate-600 text-white'>Search</button>
            </div>
        </div>
    )
}