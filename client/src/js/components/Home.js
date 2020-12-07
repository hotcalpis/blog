import React, { useState, useEffect } from "react";
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import PostBoard from './PostBoard';
import Post from './Post';

export default function Home(props) {

    return (
        <div>
            <header>
                <FontAwesomeIcon icon={faPlus} />
            </header>
            <Router>
                <Switch>
                    <Route path={["/public/index.html", "/"]} component={PostBoard} />
                    <Route path="/post/:id" component={Post} />
                </Switch>
            </Router>
        </div>
    );
}