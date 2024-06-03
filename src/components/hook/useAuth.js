import axios from "axios"
import { useNavigate } from "react-router-dom"

const useAuth = () => {

    const navigate = useNavigate()    
    
    const registerUser = (data) => {
        const url = 'postgres://api_hotels_user:u0KtLAsRZbVKtk91KGn4NlOpbt6OYdff@dpg-cpf3lpm74orc73esporg-a/api_hotels/users'
        axios.post(url, data)
            .then(res => {
                console.log(res.data)
                navigate('/login') 
            })
            .catch(err => console.log(err))
    }

    const loginUser = (data) => {
        const url = 'postgres://api_hotels_user:u0KtLAsRZbVKtk91KGn4NlOpbt6OYdff@dpg-cpf3lpm74orc73esporg-a/api_hotels/users/login'
        axios.post(url, data)
        .then(res => { 
            console.log(res.data)
            localStorage.setItem('token', res.data.token)
            localStorage.setItem('user', JSON.stringify(res.data.user))
            navigate('/')
        })
        .catch(err => {
            console.log(err)
            localStorage.removeItem('token')
            localStorage.removeItem('user')
            })
    }

    return {registerUser, loginUser}
    
}

export default useAuth