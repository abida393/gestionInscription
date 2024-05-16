import{ Component } from "react";

class Formateur extends Component {
  render() {
    return (
      <tr>
        <td>1</td>
        <td>143745</td>
        <td>Errebache</td>
        <td>Ahmed </td>
        <td>ahmed@gmail.com</td>
        <td>
          <button className="ui mini orange button">update</button>
          <button className="ui mini red button">delete</button>
        </td>
      </tr>
    );
  }
}

export default Formateur;
