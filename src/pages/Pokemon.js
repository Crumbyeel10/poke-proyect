import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import PokeAbility from "../components/PokeAbility"
import PokeType from "../components/PokeType"
import getPokemonById from "../services/getPokemonById"
import "../styles/item-pokemon.css"


const Pokemon = () => {

    const [namePokemon,setNamePokemon] = useState('')
    const [imgPokemon,setImgPokemon] = useState('')
    const [pokemonType, setPokemonType] = useState([])
    const [pokeAbility, setPokeAbility] = useState([])
    const {id} = useParams()





    
    useEffect(() => {
        getPokemonById(id)
            .then((res) => {
                // console.log(res.data)
                setNamePokemon(res.data.name)
                setPokemonType(res.data.types)
                setImgPokemon(res.data.sprites.other.dream_world.front_default)
                setPokeAbility(res.data.abilities)
                // console.log(res.data.abilities)
                console.log(res.data)
           
                // setImgPokemon(res.data.sprites.other.home.front_default)
            })
    },[id])



    return(
        <div className="container-item-pokemon">

            <div className="item-pokemon">
             <h1 styles={"color:red"}>{namePokemon}</h1>
             {/* <h2>Tipo: {pokemonType} </h2> */}
             <img src={imgPokemon} alt="" />
            </div>
            <div>
             {pokemonType.map((item) => <PokeType key={item.slot} type={item.type} />)}
            </div>
            <div className="pokemon-habilities">
                {pokeAbility.map((item) => <PokeAbility key={item.ability} ability={item.ability} />)}
            </div>
            


        </div>

        
    )
}

export default Pokemon


