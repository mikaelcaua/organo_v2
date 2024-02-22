 import './Banner.css'


interface BannerProps{
    src: string;
    alt?:string;
}

export function Banner ({src, alt}:BannerProps){
    return(
        <>
            <img className='bannerimg' src={src} alt={alt}></img>
        </>
    )
}

