import { Component } from "react";
import AddEnseignat from "./AddEnseignat";
import axios from "axios";
import './App.css'
import EnseignatListe from "./EnseignatListe";
import AddCatalogue from "./AddCatalogue";
import CatalogueListe from "./CatalogueListe";
import AddCour from "./AddCour";
import CourListe from "./CourListe";
class App extends Component {
  state={
    Enseignats:[],
    url:'http://127.0.0.1:8000/api/Enseignant' ,

  };
  getEnseignats = async () => {
    const Enseignats = await axios.get(this.state.url);
    this.setState({Enseignats : Enseignats.data});
  }
  render() {
    return (
      <div>
        <div className="ui fixed inverted menu">
          <div className="ui container">
            <a href="/#" className="header item">
              Getion Inscription
            </a>
          </div>
        </div>

        <div className="ui main container">
         
          <AddEnseignat/>
          <EnseignatListe/>
          <hr/>
          <hr/>
          <hr/>
          <AddCatalogue/>
          <CatalogueListe/>
          <hr/>
          <hr/>
          <hr/>
          <AddCour/>
          <CourListe/>

        </div>
      </div>
    );
  }
}

export default App;
