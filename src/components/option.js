
function Options(props){
    const options = props.options;
    const selectedOption = props.selectedOption;
    const onOptionChange = props.onOptionChange
    return(
        <div className="options">
            {options.map((option, index)=>(
                <div key = {index} className = "form-check">
                    <input
                    // className="form-check-input"
                    type = "radio"
                    value = {option}
                    name = "option"
                    checked = {selectedOption === option}
                    onChange = {onOptionChange}
                    />
                    <label className="form-check-label">{option}</label>
                </div>
            ))}
        </div>
    );
}

export default Options