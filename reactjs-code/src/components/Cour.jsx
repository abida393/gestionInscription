import { Component } from "react";

class Cour extends Component {
  render() {
    return (
      <tr>
        <td>1</td>
        <td>Alogorithme</td>
        <td>90h</td>
        <td>aucune prerequis </td>
        <td>DEVs </td>
        <td>septembre 2024 </td>
        <td>
          <button className="ui mini orange button">update</button>
          <button className="ui mini red button">delete</button>
        </td>
      </tr>
    );
  }
}

export default Cour;
