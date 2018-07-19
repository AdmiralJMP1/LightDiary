import React from 'react';
import PropTypes from 'prop-types';
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
    const { rowName } = this.state;
    const { rowList } = this.state;
    if (rowName === '') {
      alert('Please enter a row name');
      return;
    }
    if (rowList.indexOf(rowName) !== -1) {
      alert('Please enter a NEW row name');
      return;
    }
    const newRowList = rowList;
    newRowList.push(rowName);

    this.setState(
      {
        rowList: newRowList,
        rowName: '',
      },
    );
  }

  deleteRow(id) {
    const { rowList } = this.state;
    const newRowList = rowList;
    newRowList.splice(id, 1);

    this.setState({ rowList: newRowList });
  }

  rowTextUpdate(event) {
    this.setState({ rowName: event.target.value });
  }

  render() {
    const { rowList } = this.state;
    const { rowName } = this.state;
    const { name } = this.props;
    const rows = rowList.map((newRowName, id) => (
      <Row
        key={newRowName}
        name={newRowName}
        id={id}
        clickAction={this.deleteRow}
      />
    ));
    return (
      <div className="board">
        <div className="board__name">
          Board
          { ' ' }
          { name }
        </div>
        <div className="row-wrapper">
          { rows }
        </div>
        <form
          onSubmit={this.addRow}
          className="new-row-form"
        >
          <input
            type="text"
            placeholder="Enter row name"
            onChange={this.rowTextUpdate}
            value={rowName}
          />
          <input type="submit" value="+" />
        </form>
      </div>
    );
  }
}

Board.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Board;
