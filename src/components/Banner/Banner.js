import './Banner.css'

const Banner = ({src})=>{
    return(
        <>
            <img className='bannerimg' src={src}></img>
        </>
    )
}

export default Banner;