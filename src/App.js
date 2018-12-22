import React, { Component } from 'react';
import './App.css';
import TomHanksPic from "./components/picture";
import Header from "./components/header";
import Modal from "./components/modal/modal";
import Modal2 from "./components/modal/modal2";
import movies from "./hanks.json";
import _ from "underscore";


class App extends Component {
  state = {
    count: 0,
    movies,
    alreadyClicked: [],
    level2: false,
    showModal: "none",
    showModal2: "none",
    showInput: "none",
    input: "",
    numberCorrect: 0
  };

  // handleIncrement increases this.state.count by 1
  handleIncrement = id => {

    if (!this.state.level2) {
      if (!this.state.alreadyClicked.includes(movies[id - 1])) {

        if (this.state.count < 14) {
          // We always use the setState method to update a component's state
          this.state.alreadyClicked.push(movies[id - 1]);

          console.log("Already Clicked:");
          console.log(this.state.alreadyClicked);
          console.log("Count: " + this.state.count);

          this.setState({
            count: this.state.count + 1,
            movies: _.shuffle(movies)
          });
        } else if (this.state.count > 13) {
          this.setState({ showModal: "block" });
        }
      } else {
        this.setState({
          count: 0,
          movies: _.shuffle(movies),
          alreadyClicked: []
        });
      }
    }
  };

  closeModal = () => {
    this.setState({ showModal: "none" });
    this.setState({ showModal2: "none" });
  }

  level2 = () => {
    this.setState(
      {
        showInput: "block",
        level2: true,
        showModal: "none",
        count: 15
      }
    )
  }


  handleLevel2 = (e, movieName, id) => {

    onkeypress = (e) => {
      e.target.oldvalue = e.target.value;
    }

    onkeyup = (e) => {
      this.setState({ input: e.target.value });

      if (this.state.input.toLowerCase() === movieName.toLowerCase()) {
        e.target.style.border = "5px solid green";
        if (!movies[id - 1].answered) {

          movies[id - 1].answered = true;
          if (this.state.numberCorrect < 14) {
            this.setState({ numberCorrect: this.state.numberCorrect + 1 });
            console.log("Number Correct: " + this.state.numberCorrect);

          } else {
            this.setState({ showModal2: "block" });
          }
        }
      } else {
        e.target.style.border = "5px solid red";
      }
    }


  }

  restart = () => {
    this.setState({
      count: 0,
      movies: movies,
      alreadyClicked: [],
      level2: false,
      showModal: "none",
      showModal2: "none",
      showInput: "none",
      input: "",
      numberCorrect: 0
    })
  }



  render() {
    return (
      <div className="App">
        <Header count={this.state.count} />
        <br />

        <TomHanksPic movies={this.state.movies} handleIncrement={this.handleIncrement} showInput={this.state.showInput} handleLevel2={this.handleLevel2} />
        <Modal show={this.state.showModal} onHide={this.closeModal} level2={this.level2} />
        <Modal2 show={this.state.showModal2} onHide={this.closeModal} restart={this.restart} />
      </div>
    );
  }
}

export default App;
