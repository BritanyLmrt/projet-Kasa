import { Link } from 'react-router-dom';


function Navbar(){
    return (
        <nav className='navbar'>
            <ul>
                <li >
                <Link to="/">Accueil</Link>
                </li>
                <li>
                <Link to="/About">À propos</Link>
                </li>
            </ul>
        </nav>
    )
}
export default Navbar;