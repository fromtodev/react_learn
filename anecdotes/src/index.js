import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const Button = ({onClick, text}) => {
    return(
        <button onClick = {onClick}>
            {text}
        </button>
    )
}



const App = (props) => {
    const [selected, setSelected] = useState(0)
    const [votes, setVotes] = useState(
        {
            0:0,
            1:0,
            2:0,
            3:0,
            4:0,
            5:0,
            6:0,
            7:0,
            8:0
        }
    )

    const funcToVote = () => {
        const temp = {...votes}
        temp[selected] += 1
        return (
            setVotes(temp)
        )  
    }

    const getMaxVoted = () => {
        let temp = 0;
        let index = 0;
        for(let i = 0; i < props.anecdotes.length; i++){
            if (temp < votes[i]){
                temp = votes[i]
                index = i
            }
        }
        return index
    }

    return (
        <div>
            <div>
                {props.anecdotes[selected]}
            <p>
                Votes: {votes[selected]}
            </p>
            </div>
            <div>
                <Button onClick = {() => setSelected(Math.floor(Math.random() * (props.anecdotes.length)))} text = "Randomize" />
                <Button onClick = {funcToVote} text = 'Vote for anecdote' />
            </div>
            <h1>
                Mostly voted anecdote:
            </h1>
            <div>
                {props.anecdotes[getMaxVoted()]}
            <p>
                Votes: {votes[getMaxVoted()]}
            </p>
            </div>
        </div>
    )
}

const anecdotes = [
    'Anecdote 1',
    'Anecdote 2',
    'Anecdote 3',
    'Anecdote 4',
    'Anecdote 5',
    'Anecdote 6',
    'Anecdote 7',
    'Anecdote 8',
    'Anecdote 9'
]

ReactDOM.render(<App anecdotes = {anecdotes} />, document.getElementById('root'));
