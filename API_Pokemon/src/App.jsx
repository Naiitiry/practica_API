import { useState, useEffect } from "react"
// el video arranca con la programacion desde 1 hr 25  min
const App = ()=>{

    const [pokemonNumber,setPokemonNumber] = useState(1)
    const [pokemonName,setPokemonName] = useState('')

    const handleNext = ()=>{
        setPokemonNumber(pokemonNumber+1)

    }
    const handlePreview = ()=>{
        if(pokemonNumber>1){
            setPokemonNumber(pokemonNumber-1)
        }
    }

    useEffect(()=>{
        //Aqui va la API con Fetch
        // fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNumber}/`)
        //     .then((result)=>result.json())
        //     .then(data=>setPokemonName(data.name))

        // Aqui va la funcion API con Async/await
        searchPokemon(pokemonNumber)
    },[pokemonNumber])

    const searchPokemon = async pokemonNumber=>{
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNumber}/`)
        const data = await response.json()
        setPokemonName(data.name)
    }

    return(
        <div>
            <div>{pokemonNumber} - {pokemonName}</div>
            <button onClick={handleNext}>Next</button>
            <button onClick={handlePreview}>Preview</button>
        </div>
    )
}

export {App}