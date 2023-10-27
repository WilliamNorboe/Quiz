import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import React, {Component} from 'react';
import Question from "./components/question.js";
import qBank from './components/questionbank';
import Score from "./components/scored.js";
import { useState } from 'react';
import sb from "./components/sb.jpg"

// document.body.style = 'background-image: url("./components/sb.jpg");';
// document.body.style.backgroundImage = sb;

document.body.classList.add("bg-img");
document.body.classList.add("has-bg-img");

function App(){
  const [props, setProps] = useState({
      questionBank: qBank,
      currentQuestion: 0,
      selectedOption: "",
      score: 0,
      quizEnd: false,
  })


  let checkAnswer = () =>{
    const {questionBank, currentQuestion, selectedOption, score} = props;
    if(selectedOption == questionBank[currentQuestion].answer){
      setProps(prevState => {return {...prevState, score: prevState.score + 1}});
    }
  }
  let handleNextQuestion = () =>{
    const {questionBank, currentQuestion} = props;
    if(currentQuestion+1 != questionBank.length){
      setProps(prevState => {return {
        ...prevState, currentQuestion: prevState.currentQuestion + 1,
        selectedOption: "",}});
    }
    else if(props.quizEnd){

      setProps(prevState => {return {
        ...prevState,
             quizEnd: false,
        currentQuestion: 0,
        selectedOption: "",
        score: 0,
      }});
    }
    else{
      setProps(prevState => {return {...prevState,quizEnd: true}});
    }
  }

  let handleOptionChange = (e) => {
    setProps(prevState => {return {...prevState,selectedOption: e.target.value}});
  }

  let handleFormSubmit = (e) =>{
    e.preventDefault();
    checkAnswer();
    handleNextQuestion();
  }

    const {questionBank, currentQuestion, selectedOption, score, quizEnd} = props;
    return(
    <div className="App">
      <h1 className='app-title'>Donkey Kong Country 2 Quiz App</h1>
      {!quizEnd ? (
      <Question 
        question={questionBank[currentQuestion]}
        selectedOption={selectedOption}
        onOptionChange={handleOptionChange}
        onSubmit = {handleFormSubmit}
      />
      ) : (
      <Score
      score = {score}
      onNextQuestion={handleNextQuestion}
      className = "score" />
      )}
    </div>);
}


export default App;
