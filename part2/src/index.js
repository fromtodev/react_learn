import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const Display = ({text, value}) => <tr><td>{text}</td><td>{value}</td></tr>

const Button = ({text, onClick}) => {
    return (
        <button onClick = {onClick}>
            {text}
        </button>
    )
}

const Statistics = ({good, bad, neutral}) => {
    let percentGood = good / (good + neutral + bad)
    let average = (good * 1 + bad * (-1)) / (good + neutral + bad)
    if (isNaN(percentGood) || isNaN(average)){
        return(
            <div>
                No statistics available
            </div>
        )
    }
    return(
        <div>
            <table>
                <tbody>
                    <Display value = {good} text = 'Good' />
                    <Display value = {bad} text = 'Bad' />
                    <Display value = {neutral} text = 'Neutral' />
                    <Display text = 'Average: ' value = {average} />
                    <Display text = 'Percantage of positive: ' value = {percentGood} />
                </tbody>
            </table>

        </div>
    )
}

const App = () => {
    const [good, setGood] = useState(0)
    const [bad, setBad] = useState(0)
    const [neutral, setNeutral] = useState(0)
    return(
        <div>
            <h1>Give feedback for us</h1>
            <Button text = 'Good' onClick = {() => setGood(good + 1)} />
            <Button text = 'Bad' onClick = {() => setBad(bad + 1)} />
            <Button text = 'Neutral' onClick = {() => setNeutral(neutral + 1)} />
            <Statistics good = {good} bad = {bad} neutral = {neutral} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

