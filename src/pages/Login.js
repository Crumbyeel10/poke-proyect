import { useState } from "react"
import { useNavigate } from "react-router-dom"



const Login = () => {

    const [userName, setUserName] = useState('')

    const navigate = useNavigate()

    const handlerOnClick = () => {
        if(userName){
            navigate('/pokedex')
        }else {
            alert('Digite nombre de usuario')
        }
        // console.log(userName)
    }
    return(

        <div>
        <input defaultValue="Usuario" onChange={(e) => setUserName(e.target.value)} />
        <button onClick={() => handlerOnClick()}>Iniciar Sesion</button>
        </div>
    )
}

export default Login