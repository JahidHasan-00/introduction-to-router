import { useLoaderData } from "react-router-dom";

const PostDetails = () => {
    const postDetail = useLoaderData();
    console.log(postDetail);
    const {id, title, body} = postDetail;
    return (
        <div>
            <h3>Post details id: {id}</h3>
            <h3> {title} </h3>
            <p><small>{body}</small></p>
        </div>
    );
};

export default PostDetails;