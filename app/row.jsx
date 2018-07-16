import React from 'react';
import ItemList from './itemsList';

class Row extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rowItems: [],
      rowItemName: '',
    };

    this.addRowItem = this.addRowItem.bind(this);
    this.deleteRowItem = this.deleteRowItem.bind(this);
    this.rowItemTextUpdate = this.rowItemTextUpdate.bind(this);

  }

  addRowItem(event) {
    event.preventDefault();
    if(this.state.rowItemName === '') {
      alert('Please enter a item name');
      return;
    }
    if(this.state.rowItems.indexOf(this.state.rowItemName) !== -1) {
      alert('Please enter a NEW rowItem name');
      return;
    }
    const newRowItems = this.state.rowItems;
    newRowItems.push(this.state.rowItemName);

    this.setState(
      {
        rowItems: newRowItems,
        rowItemName: '',
      }
    );
  }

  deleteRowItem(id) {
    const newRowItems = this.state.rowItems;
    newRowItems.splice(id, 1);

    this.setState({rowItems: newRowItems});
  }

  rowItemTextUpdate(event) {
    this.setState({rowItemName: event.target.value});
  }

  render() {
    const rowItems = this.state.rowItems.map((name, id) => (
      <ItemList
        key={id}
        name={name}
        id={id}
        clickAction={this.deleteRowItem}
      />
    ));
    return (
      <div class="row">
        <div class="row__top-line">
          {this.props.name}
          <div
            onClick={this.props.clickAction.bind(this, this.props.id )}
            class="row__delete fas fa-trash-alt"
          >
          </div>
        </div>
        <div class="row__items">
          {rowItems}
          <form 
            onSubmit={this.addRowItem}
            class="new-row-item-form">
            <input
              type="text"
              placeholder="Enter item name"
              onChange={this.rowItemTextUpdate}
              value={this.state.rowItemName} />
            <input type="submit" value="+"/>
          </form>
        </div>
      </div>
    )
  }
}

export default Row;
