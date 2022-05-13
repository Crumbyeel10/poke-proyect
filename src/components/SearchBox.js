import { useState } from "react"


const SearchBox = ({handlerSearch,handlerIsAType}) => {

    const [inputValue,setInputValue] = useState("")
    
    return(
        <div>
            <input type="checkbox" id="isByType" onChange={(e) => handlerIsAType(e.target.checked) } /> <br />

            <input type="text" onChange={(e) => {
                setInputValue(e.target.value)
            }}/>
            <button onClick={() => {handlerSearch(inputValue)}} >Buscar Pokemon</button>
            
        </div>
    )
}

export default SearchBox
