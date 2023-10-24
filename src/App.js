import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import React, {Component} from 'react';
import Question from "./components/question.js";
import qBank from './components/questionbank';
import Score from "./components/scored.js";

import sb from "./components/sb.jpg"

// document.body.style = 'background-image: url("./components/sb.jpg");';
// document.body.style.backgroundImage = sb;

document.body.classList.add("bg-img");
document.body.classList.add("has-bg-img");

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      questionBank: qBank,
      currentQuestion: 0,
      selectedOption: "",
      score: 0,
      quizEnd: false,
    };
  }

  handleOptionChange = (e) => {
    this.setState({selectedOption: e.target.value});
  }

  handleFormSubmit = (e) =>{
    e.preventDefault();
    this.checkAnswer();
    this.handleNextQuestion();
  }

  checkAnswer = () =>{
    const {questionBank, currentQuestion, selectedOption, score} = this.state;
    if(selectedOption == questionBank[currentQuestion].answer){
      this.setState((prevState) => ({score: prevState.score + 1}));
    }
  }
  handleNextQuestion = () =>{
    const {questionBank, currentQuestion} = this.state;
    if(currentQuestion+1 != questionBank.length){
      this.setState((prevState) => ({
        currentQuestion: prevState.currentQuestion + 1,
        selectedOption: "",
      }))
    }
    else if(this.state.quizEnd){
      this.setState((prevState) => ({
        quizEnd: false,
        currentQuestion: 0,
        selectedOption: "",
        score: 0,
      }))
    }
    else{
      this.setState({
        quizEnd: true,
      })
    }
  }
  render(){
    const {questionBank, currentQuestion, selectedOption, score, quizEnd} = this.state
    return(
    <div className="App">
      <h1 className='app-title'>Donkey Kong Country 2 Quiz App</h1>
      {!quizEnd ? (
      <Question 
        question={questionBank[currentQuestion]}
        selectedOption={selectedOption}
        onOptionChange={this.handleOptionChange}
        onSubmit = {this.handleFormSubmit}
      />
      ) : (
      <Score
      score = {score}
      onNextQuestion={this.handleNextQuestion}
      className = "score" />
      )}
    </div>);
  }
}

export default App;
