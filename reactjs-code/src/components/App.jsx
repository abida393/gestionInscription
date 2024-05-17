import { Component } from "react";
import AddEnseignant from "./AddEnseignant";
import axios from "axios";
import "./App.css";
import EnseignantListe from "./EnseignantListe";

class App extends Component {
  state = {
    Enseignants: [],
    url: "http://localhost/laravel-code/public/api/Enseignant",
  };

  getEnseignants = async () => {
    try {
      const response = await axios.get(this.state.url);
      this.setState({ Enseignants: response.data });
    } catch (error) {
      console.error("There was an error fetching the enseignants!", error);
    }
  };
  componentDidMount() {
    this.getEnseignants();
  }

  render() {
    return (
      <div>
        <div className="ui fixed inverted menu">
          <div className="ui container">
            <a href="/#" className="header item">
              Gestion Inscription
            </a>
          </div>
        </div>

        <div className="ui main container">
          <AddEnseignant />
          <EnseignantListe Enseignants={this.state.Enseignants} />
        </div>
      </div>
    );
  }
}

export default App;
