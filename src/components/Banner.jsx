import bannerImg from '../Assets/Image source 1banner-img.png';

function Banner(){
    return (
       <div className="banner">
        <img src={bannerImg} alt='Falaise en bord de mer' className='banner-img' />
        <p>Chez vous, partout et ailleurs</p>
       </div>
    )
}
export default Banner;