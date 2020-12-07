import React, { useState, useEffect } from "react";
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export default function PostBoard(props) {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsError(false);
            setIsLoading(true);

            try {
                await axios
                    .get('http://localhost:3001/api/posts')
                    .then(result => {
                        setPosts(result.data);
                        console.log(posts);
                    })
                    .catch(() => {
                        console.log('失敗しました');
                    });
            } catch (error) {
                setIsError(true);
            }
            setIsLoading(false);
        };

        fetchData();
    }, []);

    return (
        <div>
            {isError && <div>Something went wrong ...</div>}
            {isLoading && (
                <div style={{textAlign: 'center'}}>Loading...</div>
            )}

            {posts.map(post => (
                <Link to={'/public/post/' + post.id} style={{textAlign: 'center', color: 'black', textDecoration: 'none'}} key={post.id}>
                    <h2>
                        {post.title}
                    </h2>
                </Link>
            ))}
        </div>
    );
}