import { useState } from "react"

const CommentPost = ({id}) =>{

    const [idComment,setIdComment] = useState('');
    const [comment,setComment] = useState('')

    return(
        <>
            <div className="inputs">
                <label htmlFor="comments">
                    Ingrese el id
                </label>
                <input type="number" id="comments"/>
                <button>Consultar</button>
            </div>
            <div className="outputs">
                
                <p className="comment-output">
                    
                </p>
            </div>
        </>
    )
}
export {CommentPost}