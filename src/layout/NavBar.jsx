import { Link } from 'react-router-dom';

function Navbar() {
    const handleLinkClick = (event) => {
        const links = document.querySelectorAll('.navbar a');
        links.forEach((link) => link.classList.remove('selected'));
        event.target.classList.add('selected');
    };

    return (
        <nav className='navbar'>
            <ul>
                <li>
                    <Link to="/" onClick={handleLinkClick}>Accueil</Link>
                </li>
                <li>
                    <Link to="/about" onClick={handleLinkClick}>À propos</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;

