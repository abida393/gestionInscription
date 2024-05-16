import { Component } from "react";

class Catalogue extends Component {
  render() {
    return (
      <tr>
        <td>1</td>
        <td>DEVs</td>
        <td>Errebache</td>
        <td>semstre septembre 2024 </td>
        <td>
          <button className="ui mini orange button">update</button>
          <button className="ui mini red button">delete</button>
        </td>
      </tr>
    );
  }
}

export default Catalogue;
