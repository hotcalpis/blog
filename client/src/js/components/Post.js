import React, { useState } from "react";
import axios from 'axios';

export default function Post(props) {
    const [posts, setPosts] = useState([]);
    axios
        .get('http://localhost:3001/api/posts')
        .then(result => {
            setPosts(result.data);
            console.log(posts);
        })
        .catch(() => {
            console.log('失敗しました');
        });

    let title;
    posts.map((row) => 
        title = row.title
    );

    return <h1>{title}</h1>;
}