import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
//import { robots } from "./robots"; 
import "../containers/App.css";


class App extends Component {
    constructor() {
        super()
        this.state = {
        robots: [], //robots,
        searchfield: ""
        }
    }

componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
       .then(response=>response.json())
       .then(users => this.setState({ robots: users}));
    }




  //whenever we call this function the event happens  
    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    render() { 
        const { robots, searchfield } = this.state;
        const filteredRobots = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
          })
        return !robots.length ?
            <h1>Loading, wait...</h1> :
            (
    <div className="tc">
    <h1> Robofriends are always with you!</h1>
    <h2> Find your favourite</h2>
    <SearchBox searchChange={this.onSearchChange} />
    <Scroll>
     <CardList robots = {filteredRobots} />
     </Scroll>
     </div>
    );
}
}

export default App;