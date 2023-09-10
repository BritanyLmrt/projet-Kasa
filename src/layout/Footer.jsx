import logo from '../Assets/logo-footer.png';


function Footer(){
    return (<div className='footer'>
        <img src={logo} alt='kasa' className='footer-logo'/>
        <p>© 2020 Kasa. All rights reserved</p>
    </div>)
    
}

export default Footer;