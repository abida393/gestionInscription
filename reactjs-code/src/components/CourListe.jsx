import  { Component } from "react";
import Cour from "./Cour";
class CourListe extends Component {
 

  render() {
    return (
      <div className="data">
        <table className="ui celled table">
          <thead>
            <tr>
              <th style={{ textAlign: "center" }}>#</th>
              <th>Matricule Cour</th>
              <th>Intitule Cour</th>
              <th>But Cour </th>
              <th>Mass Horaire </th>
              <th>Pre Requis </th>
              <th>Catalogue  </th>
              <th>Semestre </th>
              <th style={{  }}>Action</th>
            </tr>
          </thead>

          <tbody>
           <Cour />
          </tbody>
        </table>
      </div>
    );
  }
}

export default CourListe;