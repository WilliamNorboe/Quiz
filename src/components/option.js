
function Options(props){

    let Inputs = []
    for(let i = 0; i < props.options.length; ++i){
        Inputs.push(
            <div key = {i} className = "form-check">
                <input
                // className="form-check-input"
                type = "radio"
                value = {props.options[i]}
                name = "option"
                checked = {props.selectedOption === props.options[i]}
                onChange = {props.onOptionChange}
                />
                <label className="form-check-label">{props.options[i]}</label>
            </div>)
    }
  
    return(
        <div className="options">
            {Inputs}
        </div>
    );
}

export default Options