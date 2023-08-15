import { useState } from "react"
import './CommentsSearch.css'

const CommentPost = ({onSubmit}) =>{

    const [idComment,setIdComment] = useState('');

    const handleSearch = () => {
        onSubmit(idComment)
    }

    return(
        <>
            <div className="inputs">
                <label htmlFor="comments" className="comments">
                    Id a encontrar
                </label>
                <input className="input-id"
                type="number" 
                id="comments" 
                value={idComment} 
                onChange={(e)=>setIdComment(e.target.value)}/>
                <button onClick={handleSearch}>Buscar</button>
            </div>
        </>
    )
}
export {CommentPost}