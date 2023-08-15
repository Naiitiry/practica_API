import { useState } from 'react'
import './AllComments.css'

const AllComment = ({comment,onNextComment, onPreviewComment, onFirstComment}) =>{
    const [id,setId] = useState(1)

    return(
        <>
            <div className="id-comment">
                <h2>Comentario n°: {comment.id}</h2>
            </div>
            <p className="comment">
                {`"${comment.body}"`}
            </p>
            <div className="btns">
                <button onClick={onPreviewComment}>
                    Preview
                </button>
                <button onClick={onFirstComment}>
                    First Comment
                </button>
                <button onClick={onNextComment}>
                    Next
                </button>
            </div>
        </>
    )
}
export {AllComment}