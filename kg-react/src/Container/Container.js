import React from 'react';
import Post from '../Components/Post';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import PostsHeader from '../Components/PostsHeader';
import IconHeader from '../Components/IconHeader';

const Container = () => {
    return (
        <div class="container">
            <IconHeader />
            <Header />
            <div class="main">
                <PostsHeader />
                <Post />
                <Post />
            </div>
            <Footer />
        </div>
    );
};

export default Container;