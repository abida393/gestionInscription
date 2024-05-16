import { Component } from "react";
import AddFormateur from "./AddFormateur";
import './App.css'
import FormateurListe from "./FormateurListe";
import AddCatalogue from "./AddCatalogue";
import CatalogueListe from "./CatalogueListe";
import AddCour from "./AddCour";
import CourListe from "./CourListe";
class App extends Component {
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
         
          <AddFormateur/>
          <FormateurListe/>
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
