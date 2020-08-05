import React from 'react';

const Post = props => {

    //random numbers (either 1 or 2)
    const headRandomNumber = Math.floor(Math.random() * 2) + 1;
    const blockRandomNumber = Math.floor(Math.random() * 2) + 1;

    //random head and block 'img src' string for each post
    const headRandomSourceString = `./assets/assets/img/head_${headRandomNumber}.svg`;
    const blockRandomSourceString = blockRandomNumber === 1 ? './assets/assets/ico/block.svg' : './assets/assets/ico/find.svg';

    return (
        <div class="post">
            <div class="post_header">
                <div class="assets">
                    <img src={headRandomSourceString} class="post_head" />
                    <img src={blockRandomSourceString} class="post_block" />
                </div>
                <div class="post_title">
                    {props.title}
                </div>
            </div>
            <div class="post_content">
                {props.body}
            </div>
        </div>
    );
}

export default Post;