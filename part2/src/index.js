import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const Display = ({text, value}) => <p>{text}: {value}</p>

const Button = ({text, onClick}) => {
    return (
        <button onClick = {onClick}>
            {text}
        </button>
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
            <Display value = {good} text = 'Good' />
            <Display value = {bad} text = 'Bad' />
            <Display value = {neutral} text = 'Neutral' />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

