import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

export default function PostForm(props) {
    const [title, setTitle] = useState([]);
    const [body, setBody] = useState([]);

    const handleChangeTitle = e => setTitle(e.target.value);
    const handleChangeBody = e => setBody(e.target.value);

    const handleSubmit = () => {
        axios
            .post('http://localhost:3001/api/posts', {'title': title, 'body': body})
            .then(result => {
                console.log('success');
            })
            .catch(() => {

            });
    }

    return (
        <>
            <label>Title</label>
            <input value={title} onChange={handleChangeTitle} />
            <label>Body</label>
            <textarea value={body} onChange={handleChangeBody} />
            <button type='button' onClick={handleSubmit}>送信</button>
        </>
    )
}