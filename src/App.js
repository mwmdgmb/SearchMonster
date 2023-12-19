import "./App.css";
import CardList from "./components/card-list/CardList";
import React, { Component } from "react";
import SearchBox from "./components/search-box/SearchBox";
import axios from "axios";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monsters: [],
      searchField: "",
      isLoading: true,
    };
  }

  componentDidMount() {
    axios("https://jsonplaceholder.typicode.com/users").then((users) =>
      this.setState({
        monsters: users.data,
        isLoading: !this.state.isLoading,
      })
    );
  }
  onSearchChange = (e) => {
    this.setState({ searchField: e.target.value });
  };
  render() {
    const { monsters, searchField, isLoading } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox
          onSearchChange={this.onSearchChange}
          placeholder="Search Monster right now..."
        />
        {isLoading ? (
          <h1 className="display-1 text-danger">loading...</h1>
        ) : (
          <CardList monsters={filteredMonsters} />
        )}
      </div>
    );
  }
}

export default App;
