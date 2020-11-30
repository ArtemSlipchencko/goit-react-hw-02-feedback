import React from 'react';
import './Statistics.css';
import PropTypes from 'prop-types';

const Statistics = (props) => {

    const {good, neutral, bad, total, positivePercentage} = props;

    return (
            <ul>
                <li>good: {good}</li>
                <li>neutral: {neutral}</li>
                <li>bad: {bad}</li>
                <li>total: {total}</li>
                <li>positivePercentage: {positivePercentage}</li>
            </ul>
    );

};

Statistics.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positivePercentage: PropTypes.number,
};

export default Statistics;