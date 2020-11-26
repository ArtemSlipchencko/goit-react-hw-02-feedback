import React from 'react';
import './FeedbackOptions.css';
import PropTypes from 'prop-types';

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

Buttons.propTypes = {
    handleFeedback: PropTypes.func,
};

export default Buttons;