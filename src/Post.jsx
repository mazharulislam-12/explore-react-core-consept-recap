import './Post.css'
export default function Post({post}) {
   const {userId, id, title, body} = post;
    return(
        <div className='post'>
            <h5>Title: {title} </h5>
            <p><small>UserId: {userId} </small></p>
            <p><small>postId: {id} </small></p>
            <p> {body} </p>
        </div>
    )
}