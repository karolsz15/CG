import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Post from '../Components/Post';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import PostsHeader from '../Components/PostsHeader';
import IconHeader from '../Components/IconHeader';

const Container = () => {

    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then(response => {
            setPosts(response.data);
        })
        .catch(error => setError(true));
    }, [setPosts, setError, error]);

    //if post's title is too long to fit - make it shorter
    // e.g. 'Pasta with tomato and spinach'
    // acc: 0 / acc + cur.length = 5 / newDesc = ['Pasta']
    // acc: 5 / acc + cur.length = 9 / newDesc = ['Pasta', 'with']
    // acc: 9 / acc + cur.length = 15 / newDesc = ['Pasta', 'with', 'tomato']
    // => 'Pasta with tomato...'

    const limitTitle = (title, limit = 17) => {
        const newTitle = [];
        if (title.length > limit) {
            title.split(' ').reduce((acc, cur) => {
                if (acc + cur.length <= limit) {
                    newTitle.push(cur);
                }
                return acc + cur.length;
            }, 0);
            return `${newTitle.join(' ')} ...`;
        };
        return title;
    };

    const firstSixPostsArray = posts.slice(0, 6);
    const firstPostArray = posts.slice(0, 1);

    const firstSixPosts = firstSixPostsArray.map(el => (
            <Post 
                title={limitTitle(el.title)} 
                body={el.body} />
        )
    );

    const header = firstPostArray.map(el => (
        <Header
            shortTitle={limitTitle(el.title)} 
            longTitle={el.title}
            body={el.body} />
        )
    );

    return (
        <div class="container">
            <IconHeader />
            {header}
            <div class="main">
                <PostsHeader />
                {firstSixPosts}
            </div>
            <Footer />
        </div>
    );
};

export default Container;