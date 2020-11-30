import React, {Component} from 'react';
import './App.css';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Statistics from '../Statistics/Statistics';
import Section  from '../Section/Section';
import Notification from '../Notification/Notification';

class App extends Component {

    state = {
        good: 0,
        neutral: 0,
        bad: 0,
        total: 0,
        positivePercentage: 0,
    };

    countTotalFeedback(prevState) {
       return { total: prevState.total + 1 };
    };

    countPositiveFeedbackPercentage(prevState) {
            return { positivePercentage: Math.round(prevState.good / prevState.total * 100) };
    };

    handleFeedback = (e) => {
        switch (e.target.textContent) {
            case 'Good':
                this.setState(prevState => {
                    const {total} = this.countTotalFeedback(prevState);
                    const {positivePercentage} = this.countPositiveFeedbackPercentage(prevState);
                    return { good: prevState.good + 1, total, positivePercentage};
                });
            break;
          
            case 'Neutral':
                this.setState(prevState => {
                    const {total} = this.countTotalFeedback(prevState);
                    const {positivePercentage} = this.countPositiveFeedbackPercentage(prevState);
                    return { neutral: prevState.neutral + 1, total, positivePercentage };
                });
            break;
          
            case 'Bad':
                this.setState(prevState => {
                    const {total} = this.countTotalFeedback(prevState);
                    const {positivePercentage} = this.countPositiveFeedbackPercentage(prevState);
                    return { bad: prevState.bad + 1, total: total, positivePercentage: positivePercentage };
                });
            break;

            default: 
                console.log("Nothing :)");
        }
    }

    render() {

        const {good, neutral, bad, total, positivePercentage} = this.state;

        return(
            <>
                <FeedbackOptions handleFeedback={this.handleFeedback} />
                <Section title="Statistics">
                    {total !== 0 
                        ? <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage} />
                        : <Notification message="No feedback given"/>
                    }
                </Section>
            </>
        );
    };

};

export default App;
