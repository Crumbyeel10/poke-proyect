import axios from "axios"


const getPokemon = async (name) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${name}`
    const req = await axios.get(url)
    return req
}

export default getPokemon