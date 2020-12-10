import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export default function PostBoard(props) {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        let unmounted = false;
        const fetchData = async () => {
            setIsError(false);
            setIsLoading(true);

            try {
                await axios
                    .get('http://localhost:3001/api/posts')
                    .then(result => {
                        if (!unmounted) setPosts(result.data);
                        console.log(posts);
                    })
                    .catch(() => {
                        console.log('失敗しました');
                    });
            } catch (error) {
                if (!unmounted) setIsError(true);
            }
            if (!unmounted) setIsLoading(false);
        };

        fetchData();
        return () => { unmounted = true; };
    }, []);

    return (
        <>
            {isError && <p>Something went wrong ...</p>}
            {isLoading && (
                <p>Loading...</p>
            )}

            {posts.map(post => (
                <Link to={'/post/' + post.id} key={post.id}>
                    <h2>
                        {post.title}
                    </h2>
                </Link>
            ))}
        </>
    );
}