import "./Navbar.css"

const Navbar = () => {
  return (
    <div className='navbar'>
        <h3 className='logo'>Primavera</h3>
        <div className='realnav'>
            <ul className='nav'>
                <li className='sbnav'>Home</li>
                <li className='sbnav'>About</li>
                <li className='sbnav'>Create event</li>
                <li className='sbnav'>Login</li>
                <li className='sbnav signup'>Sign up</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar