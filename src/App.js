import React, { Component } from 'react';
import './App.css';
import TomHanksPic from "./components/picture/picture";
import Header from "./components/header/header";
import Modal from "./components/modal/modal";
import Modal2 from "./components/modal/modal2";
import movies from "./hanks.json";
import _ from "underscore";


class App extends Component {
  //Sets the current state
  state = {
    count: 0,
    movies,
    alreadyClicked: [],
    level2: false,
    showModal: "none",
    showModal2: "none",
    showInput: "none",
    counter: "fixed",
    input: "",
    numberCorrect: 0
  };

  // handleIncrement increases this.state.count by 1 when each picture is clicked
  handleIncrement = id => {
    //If it is not level 2
    if (!this.state.level2) {
      //If the image being clicked has not already been clicked
      if (!this.state.alreadyClicked.includes(movies[id - 1])) {
        //And if the this.state.count is less than 14
        if (this.state.count < 14) {
          // Add the image being clicked to the alreadyClicked array
          this.state.alreadyClicked.push(movies[id - 1]);

          console.log("Already Clicked:");
          console.log(this.state.alreadyClicked);
          console.log("Count: " + this.state.count);
          //Set the state for increasing count by 1 and shuffling the images using the underscore.js library's shuffle function
          this.setState({
            count: this.state.count + 1,
            movies: _.shuffle(movies)
          });
          //If this.state.count has reached 14, reveal the congrats modal, return the counter element to the top, and set count to 15
        } else if (this.state.count > 13) {
          this.setState({
            showModal: "block",
            counter: "absolute",
            count: 15
          });

        }
        //If the image has already been clicked, then count is set back to 0, the alreadyClicked array is emptied, and the images are shuffled again
      } else {
        this.setState({
          count: 0,
          movies: _.shuffle(movies),
          alreadyClicked: []
        });
      }
    }
  };

  //Handles hiding both modals when their X's are clicked
  closeModal = () => {
    this.setState({ showModal: "none" });
    this.setState({ showModal2: "none" });
  }

  //Handles when the first modal is closed and level 2 begins
  level2 = () => {
    //The input fields for each image are shown, and the modal is hidden
    this.setState(
      {
        showInput: "block",
        level2: true,
        showModal: "none"
      }
    )
  }

//Handles level 2 inputs, feeding in a movie's name and id
  handleLevel2 = (e, movieName, id) => {
    //Splitting into two functions for onkeypress and onkeyup allows the answer to be confirmed with every real-time key press
    onkeypress = (e) => {
      e.target.oldvalue = e.target.value;
    }

    onkeyup = (e) => {
      //Sets this.state.input to the input value being typed
      this.setState({ input: e.target.value });
      //if this.state.input is equal to the movie's name (not case-sensitive)
      if (this.state.input.toLowerCase() === movieName.toLowerCase()) {
        //The border fo the input turns green
        e.target.style.border = "5px solid green";
        //If the movie has not been answered before (which keeps this.state.numberCorrect from increasing when not appropriate)
        if (!movies[id - 1].answered) {
          //That movie image's answered value is set to true
          movies[id - 1].answered = true;
          //If all the movie names have not been typed correctly yet
          if (this.state.numberCorrect < 14) {
            //this.state.numberCorrect is increased by 1 when an answer is correct
            this.setState({ numberCorrect: this.state.numberCorrect + 1 });
            console.log("Number Correct: " + this.state.numberCorrect);
            //Else if all 15 answers are correct, the second modal is shown
          } else {
            this.setState({ showModal2: "block" });
          }
        }
        //Else if the answer being typed is not correct yet
      } else {
        e.target.style.border = "5px solid red";
      }
    }


  }

  //Function for resetting everything back to the original state (when game is finished)
  restart = () => {
    this.setState({
      count: 0,
      movies: movies,
      alreadyClicked: [],
      level2: false,
      showModal: "none",
      showModal2: "none",
      showInput: "none",
      counter: "fixed",
      input: "",
      numberCorrect: 0
    })
  }

  render() {
    return (
      <div className="App">
        <Header count={this.state.count} counter={this.state.counter} />

        <TomHanksPic movies={this.state.movies} handleIncrement={this.handleIncrement} showInput={this.state.showInput} handleLevel2={this.handleLevel2} />
        <Modal show={this.state.showModal} onHide={this.closeModal} level2={this.level2} />
        <Modal2 show={this.state.showModal2} onHide={this.closeModal} restart={this.restart} />
      </div>
    );
  }
}

export default App;
