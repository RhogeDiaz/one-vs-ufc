import React from 'react'
import Flyweight from './Flyweight'
import Featherweight from './Featherweight'
import Bantamweight from './Bantamweight'

const Home = () => {
    return (
        <div className="flex flex-wrap justify-center md:gap-20">
            {/* <div className='w-full flex justify-evenly items-center my-8'>
                <img src="./src/images/ONE.png" alt="" />
                <h1 className=' font-bold text-2xl'>VS</h1>
                <img src="./src/images/UFC.png" alt="" />
            </div> */}
            <Flyweight />
            <Bantamweight />
            <Featherweight />
        </div>
    )
}

export default Home