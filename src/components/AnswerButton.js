import React from "react";
import { decodeHTML } from "../lib";

class AnswerButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button
        /*
        Take a look at Question component
        function accepts a single parameter: handleGuess = (answer) 
        create a conts to pass this value "answer"
        */

        onClick={() => {
          this.props.handleGuess(this.props.answer);
        }}
        className="btn btn-outline-primary"
      >
        {decodeHTML(this.props.answer)}
      </button>
    );
  }
}

export { AnswerButton };
