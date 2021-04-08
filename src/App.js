import "./App.css";
import { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      movieCaracters: [],
      searchString: "",
    };

    // this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users/")
      .then((response) => response.json())
      .then((users) => this.setState({ movieCaracters: users }));
  }

  handleChange = (event) => {
    this.setState({ searchString: event.target.value });
  };
  render() {
    const { movieCaracters, searchString } = this.state;
    const filteredMovieCharacters = movieCaracters.filter((character) =>
      character.name.toLowerCase().includes(searchString.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Movie Characters - React project</h1>
        <SearchBox
          placeholder="Search for characters"
          handleChange={this.handleChange}
        />
        <CardList movieCaracters={filteredMovieCharacters}></CardList>
      </div>
    );
  }
}

export default App;
