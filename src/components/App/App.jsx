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
        positivePercentage: 0
    };

    handleFeedback = (e) => {
        switch (e.target.textContent) {
            case 'Good':
                this.setState(prevState => {
                    return { good: prevState.good + 1 };
                });
            break;
          
            case 'Neutral':
                this.setState(prevState => {
                    return { neutral: prevState.neutral + 1 };
                });
            break;
          
            case 'Bad':
                this.setState(prevState => {
                    return { bad: prevState.bad + 1 };
                });
            break;

            default: 
                console.log("Nothing :)");
        }
    }

    render() {

        let {good, neutral, bad, total, positivePercentage} = this.state;
        total = good + neutral + bad;
        positivePercentage = Math.round(good / total * 100);

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
