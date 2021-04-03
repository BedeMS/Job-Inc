import React from 'react'

function Board(props) {
    return (
        <div className={classes.Board}>
            {props.children}
        </div>
    )
}

export default Board
