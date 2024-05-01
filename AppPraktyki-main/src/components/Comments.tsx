import React from 'react';
import { CommentModel } from "../model/comment";

type Props = {
    comments: CommentModel[];
};

const Comments: React.FC<Props> = ({ comments }) => {
    return (
        <div>
            {comments.map((comment, index) => (
                <div key={index} className="CommentContainer">
                    <div className="user_name">{comment.studentName}</div>
                    <div className="Text">{comment.commentText}</div>
                </div>
            ))}
        </div>
    );
}

export default Comments;
