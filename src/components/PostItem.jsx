import React from "react";
import MyButton from "./UI/button/MyButton";
import {useNavigate} from 'react-router-dom';

const PostItem = (props) => {
    //console.log(props)
    const router = useNavigate();
    return (
        
        <div className="post">
                <div>
                    <strong>{props.post.id}. {props.post.title} </strong>
                        <div>
                            {props.post.body}
                        </div>
                </div>
            <div className="post__btns">
                <MyButton onClick={() => router(`/posts/${props.post.id}`)}>Read more...</MyButton>
                <MyButton onClick={() => props.remove(props.post)}>Delete</MyButton>
            </div>
        </div>
        
    )
}
export default PostItem;