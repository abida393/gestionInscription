import { Component } from "react";

class AddCour extends Component {
  render() {
    return (
      <form className="ui form">
        <div className="fields">
          <div className="four wide field">
            <label>Matricule Cour</label>
            <input
              type="text"
              name="matricule_cour"
              placeholder="Matricule Cour"
            />
          </div>

          <div className="four wide field">
            <label>Intitule Cour</label>
            <input
              type="text"
              name="intitule_cour"
              placeholder="Intitule Cour"
            />
          </div>

          <div className="four wide field">
            <label>But Cour </label>
            <input type="test" name="but_cour" placeholder="But Cour" />
          </div>
          <div className="four wide field">
            <label>Mass Horaire </label>
            <input type="test" name="but_cour" placeholder="Mass Horaire" />
          </div>
          <div className="four wide field">
            <label>Pre Requis </label>
            <input type="test" name="prerequis" placeholder="Pre Requis" />
          </div>
          <div className="four wide field">
            <label>Catalogue </label>
            <input type="test" name="catalogue_id" placeholder="Catalogue" />
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

export default AddCour;
