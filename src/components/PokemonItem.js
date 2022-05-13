import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import getInfoPokemon from "../services/getInfoPokemon"
import "../styles/card-pokemon.css"


const PokemonItem = ({url}) => {


    const [namePokemon, setNamePokemon] = useState('')
    const [imgPokemon, setImgPokemon] = useState('')
    const [id, setId] = useState('')


    useEffect(() => {
        getInfoPokemon(url)
            .then((res) => {
                
                setImgPokemon(res.data.sprites.other.home.front_default)
                setNamePokemon(res.data.name)
                setId(res.data.id)
                // console.log(res.data)
            })
        
    },[url])

    return(
        <Link to={`/pokedex/${id}`}>
        <div className="card-pokemon">           
            
                <h1>{namePokemon}</h1>
                <img className="img-card" src={imgPokemon} alt="" />
                                             

        </div>
        </Link>
    )
}

export default PokemonItem