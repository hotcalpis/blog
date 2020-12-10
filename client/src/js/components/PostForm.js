import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons';

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
        <Vertical>
            <label>Title</label>
            <input type='text' value={title} style={{width: '80%'}} onChange={handleChangeTitle} />
            <label>Body</label>
            <textarea value={body} rows='5' style={{width: '80%'}} onChange={handleChangeBody} />
            <FaIcon icon={faArrowAltCircleUp} size='2x' onClick={handleSubmit} />
        </Vertical>
    )
}

const Vertical = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: space-around;
    justify-content: center;
    align-items: center;
`;

const FaIcon = styled(FontAwesomeIcon)`
    margin: 0.4em;
`;