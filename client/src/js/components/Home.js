import React, { useState, useEffect } from "react";
import axios from 'axios';
import { BrowserRouter, Router, Link } from 'react-router-dom';

export default function Home(props) {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            await axios
                .get('http://localhost:3001/api/posts')
                .then(result => {
                    setPosts(result.data);
                    console.log(posts);
                })
                .catch(() => {
                    console.log('失敗しました');
                });
            setIsLoading(false);
        };

        fetchData();
    }, []);

    return (
    <div>
        {isLoading && (
            <div style={{textAlign: 'center'}}>Loading...</div>
        )}
        {posts.map(post => (
            <h2 style={{textAlign: 'center'}} key={post.id}>
                {post.title}
            </h2>
        ))}
    </div>
    );
}