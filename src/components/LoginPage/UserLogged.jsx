import '../styles/UserLogged.css'

const UserLogged = ({setUser, user}) => {

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setUser();
    }

  return (
    <article className='logged_user'>
      <section className='logged_content'>
        <header>
            <img className='logged_img' src={
              user.gender === 'female'
              ? '/female_user.svg'
              : 'male_user.svg'
            } alt="" />
        </header>
        <h2 className='logged_name'>{user.firstName} {user.lastName}</h2>
        <h3 className='logged_email'>{user.email}</h3>
        <button className='logged_btn' onClick={handleLogout}>Logout</button>
        </section>      
    </article>
  )
}

export default UserLogged