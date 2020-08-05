import React from 'react';

const Post = props => {
    return (
        <div class="post">
            <div class="post_header">
                <div class="assets">
                    <img src="./assets/assets/img/head_2.svg" class="post_head" />
                    <img src="./assets/assets/ico/block.svg" class="post_block" />
                </div>
                <div class="post_title">{props.title}</div>
            </div>
            <div class="post_content">
                {props.body}
            </div>
        </div>
    );
}

export default Post;