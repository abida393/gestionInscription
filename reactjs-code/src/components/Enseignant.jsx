import { Component } from "react";

class Enseignant extends Component {
  render() {
    const { index, Enseignant } = this.props;
    const { matricule, nom, prenom, email } = Enseignant;

    return (
      <tr>
        <td>{index}</td>
        <td>{matricule}</td>
        <td>{nom}</td>
        <td>{prenom}</td>
        <td>{email}</td>
        <td>
          <button className="ui mini orange button">Update</button>
          <button className="ui mini red button">Delete</button>
        </td>
      </tr>
    );
  }
}

export default Enseignant;
