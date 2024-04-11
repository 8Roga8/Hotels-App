import { Link } from "react-router-dom"
import '../styles/PrincipalHeader.css'


const PrincipalHeader = () => {

  return (
    <header className="principalHeader">
        <h1 className="principalLogo"><Link className="principal_link" to='/'>Hotels-App</Link></h1>
        <nav className="proncipal_nav">
            <ul className="principal_list">
                <li className="principal_options"><Link className="principal_link" to='/register'>Register</Link></li>
                <li className="principal_options"><Link className="principal_link" to='/login'>Login</Link></li>
                <li className="principal_options"><Link className="principal_link" to='/reservation'>Reservation</Link></li>                
            </ul>
        </nav>
    </header>
  )
}

export default PrincipalHeader