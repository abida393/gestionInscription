import  { Component } from "react";

class AddCatalogue extends Component {
  render() {
    return (
      <form className="ui form">
        <div className="fields">
          <div className="four wide field">
            <label>Matricule Catalogue</label>
            <input type="text" name="matricule_catalogue" placeholder="Matricule Catalogue" />
          </div>

          <div className="four wide field">
            <label>Intitule Catalogue</label>
            <input type="text" name="intitule_catalogue" placeholder="Intitule Catalogue" />
          </div>

          <div className="four wide field">
            <label>Semestre </label>
            <input type="test" name="semestre_id" placeholder="Semestre" />
          </div>

          <div className="four wide field">
            <button className="ui primary button">save</button>
          </div>
        </div>
      </form>
    );
  }
}

export default AddCatalogue;
