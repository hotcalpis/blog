import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link, useParams } from 'react-router-dom';

export default function Post(props) {
    const [post, setPost] = useState([]);
    const [isLoading, setIsLoading] = useState([]);
    let { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            await axios
                .get(`http://localhost:3001/api/posts/${id}`)
                .then(result => {
                    setPost(result.data);
                    console.log(post);
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
            <h1 style={{textAlign: 'center'}}>
                {post.title}
            </h1>
            <p style={{textAlign: 'center'}}>
                {post.body}
            </p>
        </div>
    )
}