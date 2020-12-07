import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import PostBoard from './PostBoard';
import Post from './Post';

export default function Home(props) {

    return (
        <div>
            <Header>
                <FontAwesomeIcon icon={faPlus} />
            </Header>
            <Router>
                <Switch>
                    <Route path={['/public/index.html', '/']} component={PostBoard} />
                    <Route path="/post/:id" component={Post} />
                </Switch>
            </Router>
        </div>
    );
}

const Header = styled.header`
    display: flex;
    justify-content: flex-end;
`;

// const PlusIcon = styled(FontAwesomeIcon)`
    
// `;