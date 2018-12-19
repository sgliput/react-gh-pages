import React, { Component } from 'react';
import './App.css';
import TomHanksPic from "./components/picture";
import Header from "./components/header";
import movies from "./hanks.json";
import _ from "underscore";


//let imgList = _.shuffle(movies);


class App extends Component {
  state = {
    count: 0,
    movies: movies,
    alreadyClicked: [],
    win: false
  };

  // handleIncrement increases this.state.count by 1
  handleIncrement = id => {
    if (!this.state.alreadyClicked.includes(movies[id - 1])) {

      if (this.state.count < 15) {
        // We always use the setState method to update a component's state
        this.state.alreadyClicked.push(movies[id - 1]);

        console.log("Already Clicked:");
        console.log(this.state.alreadyClicked);

        this.setState({
          count: this.state.count + 1,
          movies: _.shuffle(movies)
        });
      } else if (this.state.count === 14) {
        alert("Congratulations! You won!\n Tom Hanks would be so proud!");
      }
    } else {
      this.setState({
        count: 0,
        movies: _.shuffle(movies),
        alreadyClicked: []
      });
    }


  };

  render() {
    return (
      <div className="App">
        <Header count={this.state.count} />
        <br />

        <TomHanksPic movies={this.state.movies} name="Cast Away" image="../images/castaway.jpg" handleIncrement={this.handleIncrement} />
      </div>
    );
  }
}

export default App;
