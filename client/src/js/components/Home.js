import React, { useState, useEffect } from "react";
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import PostBoard from './PostBoard';
import Post from './Post';

export default function Home(props) {

    return (
        <Router>
            <Switch>
                <Route path="/public/index.html" exact>
                    <PostBoard/>
                </Route>
                <Route path="/post/:id">
                    <Post/>
                </Route>
            </Switch>
        </Router>
    );
}