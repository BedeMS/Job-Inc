import React from 'react';
import classes from "./Error.module.css";
import Header from "./../Header/Header";

function Error(props) {
    return (
        <div className={classes.Error}>
            <Header />
            <div className={classes.Error__message}>
                <h1 className={classes.Message}>Hmmm... This page doesn't exist.</h1>
            </div>
        </div>
    )
}

export default Error
