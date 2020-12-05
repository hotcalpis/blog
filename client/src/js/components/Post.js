import React, { useState, useEffect } from "react";
import axios from 'axios';

export default function Post(props) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios
                .get('http://localhost:3001/api/posts')
                .then(result => {
                    setPosts(result.data);
                    console.log(posts);
                })
                .catch(() => {
                    console.log('失敗しました');
                });
        };

        fetchData();
    }, []);

    return (
    <div>
        {posts.map(post => (
            <h2 style={{textAlign: 'center'}} key={post.id}>
                {post.title}
            </h2>
        ))}
    </div>
    );
}