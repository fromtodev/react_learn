import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
    console.log(props)
    return <h1>{props.course.name}</h1>
}


const Part = (props) => {
    console.log(props)
    return(
        <p>
            {props.part} {props.exercise}
        </p>
    )
}

const Content = (props) => {
    console.log(props)
    return(
        <div>
            <Part part = {props.course.parts[0].name} exercise = {props.course.parts[0].exercises}/>
            <Part part = {props.course.parts[1].name} exercise = {props.course.parts[1].exercises}/>
            <Part part = {props.course.parts[2].name} exercise = {props.course.parts[2].exercises}/>
        </div>
    )
}

const Footer = (props) => {
    console.log(props)
    let result = 0;
    for (let i = 0; i < props.course.parts.length; i++){
        result += props.course.parts[i].exercises
    }
    return(
        <p>
            Number of exercises: {result}
        </p>
    )
}

const App = () => {
    const course = {
        name: 'Half stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10
            },
            {
                name: 'Using props to pass data',
                exercises: 7
            },
            {
                name: 'State of a component',
                exercises: 14
            }
        ]
    }  
    return (
    <div>
       <Header course = {course}/>
       <Content course = {course} />
       <Footer course = {course} />
    </div>
    )
}
    
ReactDOM.render(<App />, document.getElementById('root'));

 