import { useForm } from "react-hook-form"
import useAuth from "../components/hook/useAuth"
import '../components/styles/LoginPage.css'
import { useState } from "react"
import UserLogged from "../components/LoginPage/UserLogged"

const LoginPage = () => {

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))

  const {register, handleSubmit, reset} = useForm()

  const {loginUser} = useAuth()

  const submit = data => {
    loginUser(data)
    reset({
      email: '',
      password: ''
    })
  }
  if (localStorage.getItem('token')) {
    return (<UserLogged setUser={setUser} user={user}/>)
  }
    
  return (
    <div className="loginPage">
      <div className="loginPage_bg">
        <i className='bx bxs-user-circle'></i>
        <h2 className="loginPage_name">User</h2>
        <form className="loginPage_form" onSubmit={handleSubmit(submit)}>
          <label className="loginPage_label">
            <span className="loginPage_span">Email</span>
            <input className="loginPage_input" {...register('email')} type="email" />
          </label>
          <label className="loginPage_label">
            <span className="loginPage_span">Password</span>
            <input className="loginPage_input" {...register('password')} type="password" />
          </label>
          <button className="loginPage_btn">Login</button>
        </form>
      </div>
    </div>
  )
}

export default LoginPage