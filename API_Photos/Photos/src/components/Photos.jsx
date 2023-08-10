import './Photos.css'
const Photos = ({img, txt}) =>{

    return(
        <div className="photos-container">
            <img src={img} alt="id img" className='photos_img'/>
            <p className="pharagrap">{txt}</p>
        </div>
    )
}
export {Photos}