import { Component } from "react";
import Enseignant from "./Enseignant";

class EnseignantListe extends Component {
  render() {
    const { Enseignants } = this.props;
    return (
      <div className="data">
        <table className="ui celled table">
          <thead>
            <tr>
              <th style={{ textAlign: "center" }}>#</th>
              <th>Matricule</th>
              <th>Nom</th>
              <th>Prénom</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {Enseignants.map((Enseignant, index) => (
              <Enseignant
                key={Enseignant.id}
                index={index + 1}
                Enseignant={Enseignant}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default EnseignantListe;
