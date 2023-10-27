import Options from "./option";

function Question(props){
    
    return(
    <div>
        <div className="question">
            <h3>Question {props.question.id}</h3>
            <h5 className="mt-2">{props.question.question}</h5>
            <form className= "mt-2 mb-2" onSubmit={props.onSubmit}>
                <Options
                    options={props.question.options}
                    selectedOption = {props.selectedOption}
                    onOptionChange = {props.onOptionChange}
                />
                <button type = "submit" className="btn btn-primary mt-2">Submit</button>
            </form>

            <img src = {props.question.image} alt = "Question" className="questionImg" />
        </div>
    </div>

    )
}

export default Question