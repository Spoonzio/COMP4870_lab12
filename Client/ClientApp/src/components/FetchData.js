import React, { Component } from 'react';

export class FetchData extends Component {
  static displayName = FetchData.name;

  constructor(props) {
    super(props);
    this.state = { forecasts: [], loading: true };
  }

  componentDidMount() {
    this.populateToonData();
  }

  static renderToonsTable(toons) {
    console.log(toons);
    return (

      <table class="table">
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Occupation</th>
            </tr>
        </thead>
        <tbody>
          {toons.map(toon =>
              <tr>
                <td>{toon.id}</td>
                <td>{toon.firstName} {toon.lastName}</td>
                <td>{toon.occupation}</td>
            </tr>
          )}
        </tbody>
    </table>

    );
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : FetchData.renderToonsTable(this.state.toons);

    return (
      <div>
        <h1 id="tabelLabel" >Weather forecast</h1>
        <p>This component demonstrates fetching data from the server.</p>
        {contents}
      </div>
    );
  }

  async populateToonData() {
    const response = await fetch('http://localhost:7071/api/toons');
    const data = await response.json();
    this.setState({ toons: data, loading: false });
  }
}
