import './Images.css'
const Imagenes=({imgId})=>{

    return(
        <li className="imageCard">
            <img src={imgId.url} alt="imagen" className="images" />
            <div>{imgId.title}</div>
        </li>
    )
}
export {Imagenes}