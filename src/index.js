import React, { useState } from 'react'
import ReactDOM from 'react-dom'

//define statistics
const Statistic = (props) =>{
  return(
    //assign row, and individual cells 
      <tr>
    <td>{props.text}</td><td>{props.value}</td>
    </tr>
    
  )
}

//define buttons
const Button = (props) => {
  return (
      <button onClick={props.event}>{props.text}</button>
  )
}
const Statistics = (props) => {
  const all = (props.good + props.neutral + props.bad)
  const average = (props.good - props.bad) / all
  const positive = props.good / all * 100
  if(all === 0){
    return(
      <div>
        <p>No feedback yet</p>
      </div>
    )
  }
  return(
    <div>
    <table>
      <tbody>
      <Statistic text = "good" value = {props.good}></Statistic>
      <Statistic text = "neutral" value = {props.neutral}></Statistic>
      <Statistic text = "bad" value = {props.bad}></Statistic>
      <Statistic text = "all" value = {all}></Statistic>
      <Statistic text = "average" value = {average}></Statistic>
      <Statistic text = "positive" value = {positive + '%'}></Statistic>
      </tbody>
    </table>
    
    </div>
  )
  
  
}

const App = (props) => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give your feedback!</h1>
      <br></br>
      <Button event={()=> setGood(good + 1)} text = "good" />
      <Button event={()=> setNeutral(neutral + 1)} text = "neutral" />
      <Button event={()=> setBad(bad + 1)} text = "bad" />
      <br></br>
      <h1>Statistics</h1>
      
      <Statistics good={good} bad ={bad} neutral={neutral}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)