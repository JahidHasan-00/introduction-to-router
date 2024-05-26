import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const PostDetails = () => {
    const postDetail = useLoaderData();
    const navigate = useNavigate();

    const {PostUserId} = useParams();
    console.log(PostUserId);

    const {id, title, body} = postDetail;

    const backToPostHandler = () => {
        navigate(-1);
    }

    return (
        <div>
            <h3>Post details id: {id}</h3>
            <h3> {title} </h3>
            <p><small>{body}</small></p>
            <button onClick={backToPostHandler}>Back to post</button>
        </div>
    );
};

export default PostDetails;