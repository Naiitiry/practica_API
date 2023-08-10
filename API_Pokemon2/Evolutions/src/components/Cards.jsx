import './Cards.css'
const Card = ({name, img})=>{

    return(
        <div className="card">
            <p className="card_name">{name}</p>
            <div className="circle"></div>
            <img className='card_img' src={img} alt="Pokemon Img" />
        </div>
    )
}
export {Card}