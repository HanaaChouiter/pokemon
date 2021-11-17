import React, { useState, useEffect } from 'react';

export default function Home() {
    const [pokemon, setPokemon] = useState(null);
    const [id, setId] = useState(1)


    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(result => result.json())
            .then(data =>
                setPokemon(data)
            )
    }, [id]);

    // console.log("tableau", pokemon)

    function handleClick() {
        let min = 1
        let max = 151

        let id = Math.floor(Math.random() * (max - min + 1) + min)
        setId(id)
    }


    return (
        <>
            <div className="container">
                <div className="my-3">
                    {pokemon === null ? <p>pas de poke</p> :
                        <>
                            <div className="row ">
                                <div className="col-3 my-4 no-marge ">
                                    <div className=" my-1 h-100 box border border-warning">
                                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
                                            alt=""
                                            className="image mb-3 "
                                        />
                                        <h2 className="ms-3 text-light text-center">{pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}</h2>
                                        <p className="ms-3 text-light">Height: {pokemon.height}</p>
                                        <p className="ms-3 text-light">Weight: {pokemon.weight}</p>
                                        <p className="ms-3 text-light">Types: </p>
                                        <ul>
                                            {pokemon.types.map(type =>
                                                <li className="ms-3 text-light">{type.type.name}</li>
                                            )}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </>
                    }
                    <div className="row ">
                        {/* <div className="col-4"> */}
                        <button className="btn btn-warning col-3" onClick={() => handleClick()}>Show random pokemon</button>
                        {/* </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}