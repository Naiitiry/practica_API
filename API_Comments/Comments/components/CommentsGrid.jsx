import { CommentPost } from "./CommentsSeach.jsx"
import { AllComment } from "./AllComments.jsx"
import { useFetch } from "./useFetch.js"
import { useState } from "react"

const ComentariosGrid = () =>{
    const {data,loading,error} = useFetch(`https://jsonplaceholder.typicode.com/comments`)
    const [currentCommentIndex, setCurrentCommentIndex] = useState(0);
    const handleNextComment = () => {
        if (currentCommentIndex < data.length - 1) {
            setCurrentCommentIndex(currentCommentIndex + 1);
        }
    };
    const handleFirstComment = ()=>{
        setCurrentCommentIndex(0)
    }
    const handlePreviewComment = () => {
        if (currentCommentIndex > 0) {
            setCurrentCommentIndex(currentCommentIndex - 1);
        }
    };
    const handleCommentSearch = (id) =>{
        const commentIndex = data.findIndex(comment=>comment.id===parseInt(id))
        if(commentIndex!==-1){
            setCurrentCommentIndex(commentIndex)
        } else{
            alert("No se encontró ningún comentario con ese ID")
        }
    }
    return(
        <>
            <div className="all-comments">
                {loading && <p>Cargando...</p>}
                {error && <h3>Error: {error.message}</h3>}
                {data && (
                    <AllComment
                    comment={data[currentCommentIndex]}
                    onNextComment={handleNextComment}
                    onFirstComment={handleFirstComment}
                    onPreviewComment={handlePreviewComment}
                    />
                )}
            </div>
            <div className="search-comments">
                <CommentPost onSubmit={handleCommentSearch}/>
            </div>
        </>
    )
}
export {ComentariosGrid}