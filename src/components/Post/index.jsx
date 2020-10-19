import React from 'react';
import "./Post.css";

import Avatar from "@material-ui/core/Avatar"

function Post(props) {

    const { username, caption, imageUrl} = props;

    return (
        <div className="post">
            <div className="post__header">
                <Avatar
                    className="post__avatar"
                    alt={username}
                    src={imageUrl}
                />
                <h3>{username}</h3>
            </div>
            {/* Header -> avatar & username */}

            <img className="post__image" src={imageUrl} alt="post-img"/>
            {/* image */}

    <h4 className="post__text"><strong>{username}</strong>  {caption}</h4>
            {/* username & caption */}
        </div>
    )
}

export default Post
