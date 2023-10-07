import logo from '../Assets/LOGO.png';
import Navbar from './NavBar';

function Header(){
    return (<div className='header'>
        <img src={logo} alt='kasa' className='header--logo'/>
        <Navbar />
    </div>)
}

export default Header;