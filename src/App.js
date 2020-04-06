import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import SearchBox from "./components/search-box/SearchBox";
import CardList from "./components/card-list/CardList";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monsters: [],
      searchField: ""
    };
  }

  componentDidMount() {
    axios("https://jsonplaceholder.typicode.com/users").then(users =>
      this.setState({ monsters: users.data })
    );
  }
  onSearchChange = e => {
    this.setState({ searchField: e.target.value });
  };
  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox
          onSearchChange={this.onSearchChange}
          placeholder="Search Monster"
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
