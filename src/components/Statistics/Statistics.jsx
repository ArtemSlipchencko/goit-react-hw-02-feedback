import React from 'react';
import './Statistics.css';

const Statistics = (props) => {

    const {good, neutral, bad, total, positivePercentage} = props;

    return (
        <>
            <h2>Statistics</h2>
            <ul>
                <li>good: {good}</li>
                <li>neutral: {neutral}</li>
                <li>bad: {bad}</li>
                <li>total: {total}</li>
                <li>positivePercentage: {positivePercentage}</li>
            </ul>
        </>
    );

};

export default Statistics;