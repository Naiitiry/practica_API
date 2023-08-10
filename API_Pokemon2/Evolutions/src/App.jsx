import { useEffect, useState } from 'react'
import { Card } from './components/Cards'
import './App.css'

function App() {

  const [pokemonNumber,setPokemonNumber] = useState(1)
  const [pokemonEvolutions,setPokemonEvolutions] = useState([])

  const handleNext = ()=>{
      setPokemonNumber(pokemonNumber+1)
  }
  const handlePreview = ()=>{
      if(pokemonNumber>1){
          setPokemonNumber(pokemonNumber-1)
      }
  }

  useEffect(()=>{
      getEvolutions(pokemonNumber)
  },[pokemonNumber])

  const getEvolutions = async pokemonNumber=>{
      const response = await fetch(`https://pokeapi.co/api/v2/evolution-chain/${pokemonNumber}/`)
      const data = await response.json()
      
      const pokemonArray = []

      const pokemonLv1 = data.chain.species.name
      const pokemonLv1Img = await getPokemonImgs(pokemonLv1)
      pokemonArray.push([pokemonLv1,pokemonLv1Img])

      if(data.chain.evolves_to.length !== 0){
        const pokemonLv2 = data.chain.evolves_to[0].species.name
        const pokemonLv2Img = await getPokemonImgs(pokemonLv2)
        pokemonArray.push([pokemonLv2,pokemonLv2Img])
        
        if(data.chain.evolves_to[0].evolves_to.length !== 0){
          const pokemonLv3 = data.chain.evolves_to[0].evolves_to[0].species.name
          const pokemonLv3Img = await getPokemonImgs(pokemonLv3)
          pokemonArray.push([pokemonLv3,pokemonLv3Img])
        }
      }
      setPokemonEvolutions(pokemonArray)
  }

  async function getPokemonImgs(name){
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`)
    const data= await response.json()
    return data.sprites.other['official-artwork'].front_default;
  }

  return (
    <div>
      <div className="card-container">
        {pokemonEvolutions.map(pokemon=>
        <Card key={pokemon[0]} name={pokemon[0]} img={pokemon[1]} />
        )}
      </div>
        <div className='btn-container'>
            <button onClick={handleNext}>Next</button>
            <button onClick={handlePreview}>Preview</button>
        </div>
    </div>
  )
}

export {App}
