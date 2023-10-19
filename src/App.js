import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import React, {Component} from 'react';
import Question from "./components/question.js"
let qBank = [
  {
  id: 1,
  question: "What is my name?",
  options: ["will","bill","William"],
  answer: "William",
  }
]
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
      <h1>Quiz App</h1>
      {!quizEnd ? (
      <Question 
        question={questionBank[currentQuestion]}
        selectedOption={selectedOption}
        onOptionChange={this.handleOptionChange}
        onSubmit = {this.handleFormSubmit}
      />
      ) : (
      <>final score here</>
      )}
    </div>);
  }
}

export default App;
