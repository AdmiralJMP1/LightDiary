import React from 'react';
import Row from './row';


class Board extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rowList: [],
      rowName: '',
    };

    this.addRow = this.addRow.bind(this);
    this.deleteRow = this.deleteRow.bind(this);
    this.rowTextUpdate = this.rowTextUpdate.bind(this);

  }

  addRow(event) {
    event.preventDefault();
    if(this.state.rowName === '') {
      alert('Please enter a row name');
      return;
    }
    if(this.state.rowList.indexOf(this.state.rowName) !== -1) {
      alert('Please enter a NEW row name');
      return;
    }
    const newRowList = this.state.rowList;
    newRowList.push(this.state.rowName);

    this.setState(
      {
        rowList: newRowList,
        rowName: '',
      }
    );
  }

  deleteRow(id) {
    const newRowList = this.state.rowList;
    newRowList.splice(id, 1);

    this.setState({rowList: newRowList});
  }

  rowTextUpdate(event) {
    this.setState({rowName: event.target.value});
  }

  render() {
    const rows = this.state.rowList.map((name, id) => (
      <Row
        key={id}
        name={name}
        id={id}
        clickAction={this.deleteRow}
      />
    ));
    return (
      <div class="board">
        <div class="board__name">
          Board {this.props.name}
        </div>
        <div class="row-wrapper">
          { rows }
        </div>
        <form 
          onSubmit={this.addRow}
          class="new-row-form">
          <input
            type="text"
            placeholder="Enter row name"
            onChange={this.rowTextUpdate}
            value={this.state.rowName} />
          <input type="submit" value="+"/>
        </form>
      </div>
    )
  }
}

export default Board; 