import React, { Component } from "react";
import CardList from "../components/CardList";
import Scroll from '../components/Scroll';
import SearchBox from "../components/SearchBox";
import ErrorBoundry from '../components/ErrorBoundry';
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchvalue: ""
    };
  }

  componentDidMount() {
    //online json info
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ robots: users }));
  }

  onSearchChange = event => {
    this.setState({ searchvalue: event.target.value });
  };

  render() {

    const filterRobos = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchvalue.toLowerCase());
    })

    if (this.state.robots.length === 0) {
      return <h1 className='tc red'> Loading </h1>
    } else {
      return (
        <div className="tc">
          <h1 className="f1">RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll> 
          <ErrorBoundry>
          <CardList robots={filterRobos} />
          </ErrorBoundry>
          </Scroll>
          
        </div>
      );
    }
  }
}

export default App;
