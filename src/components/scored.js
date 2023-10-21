

import React, { Component } from "react";

class Score extends Component {
    render(){
        const { score } = this.props;
        return(
            <div>
                <h2>Final Result</h2>
                <h4>Score: {this.props.score}</h4>
                <button className="btn btn-primary mt-2" onClick = {this.props.onNextQuestion}>Restart</button>
            </div>
        );
    }
}

// function Score (props){
//     console.log(props.score);
//     return(
//         <div>
//             <h2>Final Result</h2>
//             <h4>Score: {props.score}</h4>
//             <button>Restart</button>
//         </div>
//     );
// }
export default Score;