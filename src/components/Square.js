import React from 'react';
import './Square.css';





function Square(props) {

    return (
        <>
            <span className="square" style={{
                backgroundColor: props.backgroundColor,
                border: props.border
            }}>
                <p>{props.text}</p>
            </span>
        </>
    )

}

export default Square