import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare, faTh } from '@fortawesome/free-solid-svg-icons';
import PostBoard from './PostBoard';
import Post from './Post';
import PostForm from './PostForm';

export default function Home(props) {

    return (
        <Router>
            <Header>
                <Link to='/'>
                    <FaIcon icon={faTh} size='2x' />
                </Link>
                <Link to='/post/create'>
                    <FaIcon icon={faPlusSquare} size='2x' />
                </Link>
            </Header>
            <Container>
                <Switch>
                    <Route path='/' exact component={PostBoard}/>
                    <Route path='/post/create' component={PostForm} />
                    <Route path='/post/:id' component={Post} />
                </Switch>
            </Container>
        </Router>
    );
}

const Header = styled.header`
    display: flex;
    justify-content: start;
`;

const Container = styled.div`
    display: flex;
    justify-content: center;
    color: black;
`;

const FaIcon = styled(FontAwesomeIcon)`
    margin-left: 0.4em;
`;
