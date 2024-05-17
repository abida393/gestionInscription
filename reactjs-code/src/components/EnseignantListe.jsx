import  { Component } from "react";
import Enseignat from "./Enseignant";
class EnseignatListe extends Component {
 

  render() {
    return (
      <div className="data">
        <table className="ui celled table">
          <thead>
            <tr>
              <th style={{ textAlign: "center" }}>#</th>
              <th>Matricule</th>
              <th>Nom</th>
              <th>Prénom </th>
              <th>Email </th>
              <th style={{  }}>Action</th>
            </tr>
          </thead>

          <tbody>
           <Enseignat />
          </tbody>
        </table>
      </div>
    );
  }
}

export default EnseignatListe;