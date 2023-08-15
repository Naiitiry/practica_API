import { CommentPost } from "./CommentsSeach.jsx"
import { AllComment } from "./AllComments.jsx"
import { useFetch } from "./useFetch.js"
import { useState } from "react"

const ComentariosGrid = () =>{
    const {data,loading,error} = useFetch(`https://jsonplaceholder.typicode.com/comments`)
    // Cantidad de comentarios por páginas
    const commentsPerPage = 1;

    const [currentPage,setCurrentPage] = useState(0)

    

    return(
        <>
            <div className="all-comments">
                <AllComment/>
            </div>
            <div className="search-comments">
                <CommentPost/>
            </div>
        </>
    )
}
export {ComentariosGrid}