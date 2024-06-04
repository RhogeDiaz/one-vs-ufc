import React, { useEffect, useState } from 'react'
import supabase from '../api/supabaseClient';

const Flyweight = () => {
    const [flyONE, setFlyONE] = useState([]);
    const [flyUFC, setFlyUFC] = useState([]);
    const [fetchError, setFetchError] = useState(null)

    const getONEFighter = async () => {
        const { data, error } = await supabase
            .from('ONE')
            .select()
            .eq('weightclass', 'Fly')
            .order('rank', { ascending: false });

        if (data) {
            console.log(data);
            setFlyONE(data);
            setFetchError(null);
        } else if (error) {
            setFetchError('walang data');
            setFlyONE(null);
            console.log(error);
        }
    };

    const getUFCFighter = async () => {
        const { data, error } = await supabase
            .from('UFC')
            .select()
            .eq('weightclass', 'Fly')
            .order('rank', { ascending: false });

        if (data) {
            console.log(data);
            setFlyUFC(data);
            setFetchError(null);
        } else if (error) {
            setFetchError('walang data');
            setFlyUFC(null);
            console.log(error);
        }
    };

    const voteONE = async (fighterName) => {
        // Fetch the current bets value for the specific fighter
        let { data, error } = await supabase
            .from('ONE')
            .select('bets')
            .eq('name', fighterName)
            .single();

        if (error) {
            console.log('Error fetching bets:', error);
            return;
        }

        const currentBets = data.bets;
        const newBets = currentBets + 1;

        // Update the bets column for the specific fighter
        let { error: updateError } = await supabase
            .from('ONE')
            .update({ bets: newBets })
            .eq('name', fighterName);

        if (updateError) {
            console.log('Error updating bets:', updateError);
        } else {
            console.log('Bets updated successfully');

            // Update the state to reflect the new bets value
            setFlyONE(prevFlyONE =>
                prevFlyONE.map(fighter =>
                    fighter.name === fighterName ? { ...fighter, bets: newBets } : fighter
                )
            );
        }
    };

    const voteUFC = async (fighterName) => {
        // Fetch the current bets value for the specific fighter
        let { data, error } = await supabase
            .from('UFC')
            .select('bets')
            .eq('name', fighterName)
            .single();

        if (error) {
            console.log('Error fetching bets:', error);
            return;
        }

        const currentBets = data.bets;
        const newBets = currentBets + 1;

        // Update the bets column for the specific fighter
        let { error: updateError } = await supabase
            .from('UFC')
            .update({ bets: newBets })
            .eq('name', fighterName);

        if (updateError) {
            console.log('Error updating bets:', updateError);
        } else {
            console.log('Bets updated successfully');

            // Update the state to reflect the new bets value
            setFlyUFC(prevFlyUFC =>
                prevFlyUFC.map(fighter =>
                    fighter.name === fighterName ? { ...fighter, bets: newBets } : fighter
                )
            );
        }
    };

    useEffect(() => {
        getONEFighter()
        getUFCFighter()
    }, [])
    return (
        <main className="flex flex-col items-center" >
            {/* header */}
            <div className='w-full flex justify-evenly items-center my-8'>
                <img src="./src/images/ONE.png" alt="" />
                <h1 className=' font-bold text-2xl'>VS</h1>
                <img src="./src/images/UFC.png" alt="" />
            </div>
            <h1 className="font-bold text-2xl p-4">FLYWEIGHT</h1>
            <div className="flex justify-around gap-56">
                <p className="font-bold">ONE</p>
                <p className="font-bold">UFC</p>
            </div>
            {/* fighters row */}
            <div className="flex gap-5 items-center p-4">
                {/* ONE fighter card */}
                <div className="flex flex-col gap-4">
                    {flyONE.map((fighter) => (
                        fighter && (
                            <div className="flex flex-col md:w-48 min-h-96 max-w-40 bg-black" key={fighter.name}>
                                < img className="aspect-square" src={fighter.image} alt="" />
                                <p className="text-center text-white font-bold mt-4">{fighter.name.toUpperCase()}</p>
                                <p className="text-center hidden md:block text-white mt-3">"{fighter.nickname.toUpperCase()}"</p>
                                <p className="text-center text-white mt-3">Rank: {fighter.rank}</p>
                                <p className="text-center text-white">Age: {fighter.age}</p>
                                <p className="text-center text-white">Country: {fighter.country}</p>
                                <button onClick={() => voteONE(fighter.name)} className='border-white self-center py-1 px-10 m-4 rounded-lg font-bold'>{fighter.bets}</button>
                            </div>
                        )
                    ))}
                </div>
                <div className="flex flex-col gap-96">
                    {flyONE.map((index) => (
                        <p key={index} className="font-bold text-2xl">VS</p>
                    ))}
                </div>
                {/* UFC fighter card */}
                <div className="flex flex-col gap-4">
                    {flyUFC.map((fighter) => (
                        fighter && (
                            <div className="flex flex-col md:w-48 h-96 md:h-auto max-w-40 bg-black" key={fighter.name}>
                                <img className="bg-black aspect-square object-cover object-top" src={fighter.image} alt="" />
                                <p className="text-center text-white font-bold mt-4">{fighter.name.toUpperCase()}</p>
                                <p className="text-center hidden md:block text-white mt-3">"{fighter.nickname}"</p>
                                <p className="text-center text-white mt-3">Rank: {fighter.rank}</p>
                                <p className="text-center text-white">Age: {fighter.age}</p>
                                <p className="text-center text-white">Country: {fighter.country}</p>
                                <button onClick={() => voteUFC(fighter.name)} className='border-white self-center py-1 px-10 m-4 rounded-lg font-bold'>{fighter.bets}</button>
                            </div>
                        )
                    ))}
                </div>
            </div>
        </main>
    )
}

export default Flyweight