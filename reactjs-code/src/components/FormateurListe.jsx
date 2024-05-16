import  { Component } from "react";
import Formateur from "./Formateur";
class FormateurListe extends Component {
 

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
           <Formateur />
          </tbody>
        </table>
      </div>
    );
  }
}

export default FormateurListe;