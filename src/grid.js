import React from 'react';
import ReactDOM from 'react-dom';

class Header extends React.Component {

  render() {

    const cols =  this.props.keys.map((value, i) => {
          return (
            <td key={value}>{value}</td>
          );
    });

    return (
      <tr>
        {cols}
      </tr>
    );
  }
}

class Row extends React.Component {

    render() {

    const cols =  Object.values(this.props.stock).map((value, i) => {
          return (
            <td key={i}>{value}</td>
          );
    });

    return (
      <tr>
        {cols}
      </tr>
    );
  }
}

export class Grid extends React.Component {

  constructor() {
    super();  
  }

  render() {

     const rows = this.props.marketdata.map((stock, id) => {
      return (
        <Row key={stock.stock} stock={stock} />
      );
    });

    return (
      <table>
        <thead>
          <Header keys={Object.keys(this.props.marketdata[0])} />
        </thead>
        <tbody>
          {rows} 
        </tbody>
      </table>
    );
  }
}

export default Grid;