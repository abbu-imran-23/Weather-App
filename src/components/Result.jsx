import React from 'react'

export default function Result({ weatherData, historyData , historySearch }) {

    return (
        <div className='grid grid-cols-2 shadow-xl mt-5 p-2'>
            <div className="col-span-2">
                {
                    weatherData.length !== 0
                        ?
                        <>
                            <h2 className='text-3xl text-center md:text-4xl'>{weatherData.name}</h2>
                            <div className='text-[1.3rem] flex gap-3 justify-center mt-4 md:justify-around my-2 md:gap-0 '>
                                <div>Max Temp: {weatherData.main.temp_max} &#8451;</div>
                                <div>Min Temp: {weatherData.main.temp_min} &#8451;</div>
                            </div>
                            <div className='text-2xl flex justify-around my-2 items-center'>
                                <div>
                                    <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt="" />
                                </div>
                                <div>{weatherData.weather[0].main}</div>
                            </div>
                        </>
                        :
                        <>
                            <h3 className='text-center p-2 text-3xl md:text-4xl '>Please enter the city name</h3>
                        </>
                }
            </div>


        </div>
    )
}