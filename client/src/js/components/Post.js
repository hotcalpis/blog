import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link, useParams } from 'react-router-dom';

export default function Post(props) {
    const [post, setPost] = useState([]);
    const [isLoading, setIsLoading] = useState([]);
    const [isError, setIsError] = useState([]);
    let { id } = useParams();

    useEffect(() => {
        let unmounted = false;
        const fetchData = async () => {
            setIsLoading(true);
            setIsError(false);

            try {
                await axios
                    .get(`http://localhost:3001/api/posts/${id}`)
                    .then(result => {
                        if (!unmounted) setPost(result.data);
                        console.log(post);
                    })
                    .catch(() => {
                        console.log('失敗しました');
                    });
            } catch {
                if (!unmounted) setIsError(true);
            }
            if (!unmounted) setIsLoading(false);
        };

        fetchData();
        return () => { unmounted = true; };
    }, []);

    return (
        <div>
            {isError && <p>Something went wrong ...</p>}
            {isLoading && (
                <p>Loading...</p>
            )}
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </div>
    )
}