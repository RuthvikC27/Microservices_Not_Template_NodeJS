import React from 'react';

export default ({ comments }) => {
    let content;

    const renderedComments = comments.map(comment => {
        if(comment.status === "approved"){
            content = comment.content;
        }
        if(comment.status === "pending"){
            content = "Comment is being moderated";
        }
        if(comment.status === "rejected"){
            content = "Comment has been rejected";
        }

        return <li key={comment.id}>{content}</li>
    });
    return <ul>
        {renderedComments}
    </ul>
}
