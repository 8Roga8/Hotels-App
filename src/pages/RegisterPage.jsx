import { useForm } from "react-hook-form"
import useAuth from "../components/hook/useAuth"
import '../components/styles/RegisterPage.css'

const RegisterPage = () => {

  const { register, handleSubmit, reset } = useForm()
    
  const {registerUser} = useAuth()
  
  const submit = data => {
    registerUser(data)
    reset({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      gender: 'unknown'
    })
  }

  return (
    <div className="registerPage">
      <form className="registerPae_form" onSubmit={handleSubmit(submit)}>
        <h2 className="registerPage_register">Register</h2>
        <label className="registerPage_label">
          <span className="registerPage_span">First Name</span>
          <input className="registerPage_input" {...register('firstName')} type="text" />
        </label>
        <label className="registerPage_label">
          <span className="registerPage_span">Last Name</span>
          <input className="registerPage_input" {...register('lastName')} type="text" />
        </label>
        <label className="registerPage_label">
          <span className="registerPage_span">Email</span>
          <input className="registerPage_input" {...register('email')} type="email" />
        </label>
        <label className="registerPage_label">
          <span className="registerPage_span">Password</span>
          <input className="registerPage_input" {...register('password')} type="password" />
        </label>
        <label className="registerPage_label">
          <span className="registerPage_span">Gender</span>
          <select className="registerPage_input" {...register('gender')}>
            <option value='unknown'>Unknown</option>
            <option value='male'>Male</option>
            <option value='female'>Female</option>
            <option value='other'>Other</option>
          </select>
        </label>
        <button className="registerPage_btn" >Register</button>
      </form>
    </div>
  )
}

export default RegisterPage