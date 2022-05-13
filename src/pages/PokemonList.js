import { useEffect, useState } from "react"
import PokemonItem from "../components/PokemonItem"
import SearchBox from "../components/SearchBox"
import getAllPokemons from "../services/getAllPokemons"
import getPokemonByType from "../services/getPokemonByType"
import "../styles/card-pokemon.css"




const PokemonList = () => {

    // pokemon?limit=100000&offset=0.

    const [pokemon,setPokemon] = useState([])
    const [arrOffPosition, setArrOffPosition] = useState(0)
    let [searchValue, setSearchValue] = useState('')
    let [isByType, setIsByType] = useState(false)
    const [pokeType, setPokeType] = useState([])


    // const [pokeUnit,setPokeUnit] = useState('')
    // const []

    const defaultPokemon = () => {
        setIsByType = false
        setSearchValue = ''
        console.log(setIsByType)
      }

    


    useEffect(() => {
        
        getAllPokemons(arrOffPosition)
          .then((res) => {
             setPokemon(res.data.results)
                console.log(res.data.results)
         })
       
    },[arrOffPosition])

    useEffect(() => {
        if(isByType && searchValue.length > 0){
          getPokemonByType(searchValue)
            .then((response) => {
            //   console.log(response.data.pokemon)
            setPokeType(response.data.pokemon)
            })
            .catch((err) => {
              console.error(err)
            })
        }
      }, [isByType, searchValue])


      
     
    let  arrPoke = pokemon.map((pokemon) => <PokemonItem url={pokemon.url} key={pokemon.name}  />)
  

      if (isByType && searchValue.length > 0){
          arrPoke = pokeType.map((pokemon) => <PokemonItem url={pokemon.pokemon.url} key={pokemon.pokemon.name}  /> )
      }
    
     

    return(
        <div className="container-pokemons">
            <SearchBox handlerSearch={setSearchValue} handlerIsAType={setIsByType} /> 
            <button onClick={() =>  defaultPokemon() }>All Pokemons</button>
            <div className="pokemon-items">
            
            {arrPoke}
            
           
            
            </div>
            <button onClick={() => setArrOffPosition(arrOffPosition - 20)}>Previus</button>
            <button onClick={() => setArrOffPosition(arrOffPosition + 20)}>Next</button>
            
            
        </div>
    )
}


export default PokemonList