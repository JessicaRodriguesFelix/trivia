import React, { Component } from "react";
import { Question } from "./components";

const category = "";
const TRIVIA_API = `https://opentdb.com/api.php?amount=1&category=${category}&difficulty=easy`;
console.log(TRIVIA_API);

class App extends Component {
  //API response is a complex object, we will initialize state.question as null, so we can check if question is present or not
  constructor() {
    super();
    this.state = { question: null };
  }

  componentDidMount() {
    fetch(TRIVIA_API)
      .then((res) => res.json())
      .then((data) => {
        this.setState({ question: data.results[0] });
      });
  }

  render() {
    //const question = this.state;
    return (
      <div className="container l:w-50 p-5">
        <h1 className="display-1">Trivia</h1>
        <h2 className="fw-lighter fs-5 mb-4">
          (we couldn&lsquo;t think of a better name,{" "}
          <span className="fw-bolder">sorry</span>)
          {this.state.question && <Question question={this.state.question} />}
        </h2>
        <hr />
        <div></div>
      </div>
    );
  }
}

export { App };
