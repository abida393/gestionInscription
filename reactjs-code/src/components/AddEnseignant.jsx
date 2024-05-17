import  { Component } from "react";

class AddEnseignant extends Component {
  render() {
    return (
      <form className="ui form">
        <div className="fields">
          <div className="four wide field">
            <label>First name</label>
            <input type="text" name="first_name" placeholder="First Name" />
          </div>

          <div className="four wide field">
            <label>Last name</label>
            <input type="text" name="last_name" placeholder="Last Name" />
          </div>

          <div className="four wide field">
            <label>E-mail</label>
            <input type="email" name="email" placeholder="joe@schmoe.com" />
          </div>

          <div className="four wide field">
            <button className="ui primary button">save</button>
          </div>
        </div>
      </form>
    );
  }
}

export default AddEnseignant;
