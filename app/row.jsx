import React from 'react';
import PropTypes from 'prop-types';
import ItemList from './itemsList';

class Row extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rowItems: [],
      rowItemName: '',
    };

    this.addRowItem = this.addRowItem.bind(this);
    this.deleteRow = this.deleteRow.bind(this);
    this.deleteRowItem = this.deleteRowItem.bind(this);
    this.rowItemTextUpdate = this.rowItemTextUpdate.bind(this);
  }

  addRowItem(event) {
    event.preventDefault();

    const { rowItemName } = this.state;
    const { rowItems } = this.state;

    if (rowItemName === '') {
      alert('Please enter a item name');
      return;
    }
    if (rowItems.indexOf(rowItemName) !== -1) {
      alert('Please enter a NEW rowItem name');
      return;
    }
    const newRowItems = rowItems;
    newRowItems.push(rowItemName);

    this.setState(
      {
        rowItems: newRowItems,
        rowItemName: '',
      },
    );
  }


  deleteRowItem(id) {
    const { rowItems } = this.state;
    const newRowItems = rowItems;
    newRowItems.splice(id, 1);

    this.setState({ rowItems: newRowItems });
  }

  deleteRow() {
    const { id } = this.props;
    const { clickAction } = this.props;
    clickAction(id);
  }

  rowItemTextUpdate(event) {
    this.setState({ rowItemName: event.target.value });
  }

  render() {
    const { rowItems } = this.state;
    const { rowItemName } = this.state;
    const { name } = this.props;
    const items = rowItems.map((itemName, id) => (
      <ItemList
        key={itemName}
        name={itemName}
        id={id}
        clickAction={this.deleteRowItem}
      />
    ));
    return (
      <div className="row">
        <div className="row__top-line">
          { name }
          <button
            type="button"
            onClick={this.deleteRow}
            className="row__delete fas fa-trash-alt"
          />
        </div>
        <div className="row__items">
          {items}
          <form
            onSubmit={this.addRowItem}
            className="new-row-item-form"
          >
            <input
              type="text"
              placeholder="Enter item name"
              onChange={this.rowItemTextUpdate}
              value={rowItemName}
            />
            <input type="submit" value="+" />
          </form>
        </div>
      </div>
    );
  }
}

Row.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  clickAction: PropTypes.func.isRequired,
};

export default Row;
