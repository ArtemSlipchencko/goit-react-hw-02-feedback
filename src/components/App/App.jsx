import React, {Component} from 'react';
import './App.css';
import Buttons from '../Buttons/Buttons';
import Statistics from '../Statistics/Statistics';

class App extends Component {

    state = {
        good: 0,
        neutral: 0,
        bad: 0,
        total: 0,
        positivePercentage: 0,
    };

    countTotalFeedback() {
        this.setState(prevState => {
            return { total: prevState.total + 1};
        });
    };

    countPositiveFeedbackPercentage() {
        this.setState((prevState) => {
            return {positivePercentage: 
                Math.round(prevState.good / prevState.total * 100)
            };
        });
    };

    handleFeedback = (e) => {
        switch (e.target.textContent) {
            case 'Good':
                this.setState(prevState => {
                    this.countTotalFeedback();
                    this.countPositiveFeedbackPercentage();
                    return { good: prevState.good + 1};
                });
            break;
          
            case 'Neutral':
                this.setState(prevState => {
                    this.countTotalFeedback();
                    this.countPositiveFeedbackPercentage();
                    return { neutral: prevState.neutral + 1};
                });
            break;
          
            case 'Bad':
                this.setState(prevState => {
                    this.countTotalFeedback();
                    this.countPositiveFeedbackPercentage();
                    return { bad: prevState.bad + 1};
                });
            break;
        }
    }

    render() {

        return(
            <>
                <h1>Expresso</h1>
                <Buttons handleFeedback={this.handleFeedback} />
                <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.state.total} positivePercentage={this.state.positivePercentage} />
            </>
        )
    };

};

export default App;
