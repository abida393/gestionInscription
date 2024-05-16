import  { Component } from "react";
import Catalogue from "./Catalogue";
class CatalogueListe extends Component {
 

  render() {
    return (
      <div className="data">
        <table className="ui celled table">
          <thead>
            <tr>
              <th style={{ textAlign: "center" }}>#</th>
              <th>Matricule Catalogue</th>
              <th>Intitule Catalogue</th>
              <th>Semestre </th>
              <th style={{  }}>Action</th>
            </tr>
          </thead>

          <tbody>
           <Catalogue />
          </tbody>
        </table>
      </div>
    );
  }
}

export default CatalogueListe;