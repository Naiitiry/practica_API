
const AllComment = ({url}) =>{

    return(
        <>
            <div className="id-comment">
                {url.id}
            </div>
            <p className="comment">
                {url.body}
            </p>
        </>
    )
}
export {AllComment}