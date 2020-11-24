import React from 'react';
import './Buttons.css';

const Buttons = (props) => {

    const {handleFeedback} = props;

    return (
        <>
            <h2>Please, leave feedback!</h2>
            <button onClick={handleFeedback} type="button">Good</button>
            <button onClick={handleFeedback} type="button">Neutral</button>
            <button onClick={handleFeedback} type="button">Bad</button>
        </>
    )
};

export default Buttons;