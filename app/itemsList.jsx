import React from 'react';
import PropTypes from 'prop-types';
import TextItem from './textItem';

class ItemList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      itemName: '',
    };

    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.deleteItemsList = this.deleteItemsList.bind(this);
    this.itemTextUpdate = this.itemTextUpdate.bind(this);
  }

  addItem(event) {
    event.preventDefault();
    const { itemName } = this.state;
    const { items } = this.state;
    if (itemName === '') {
      alert('Please enter a item name');
      return;
    }
    if (items.indexOf(itemName) !== -1) {
      alert('Please enter a NEW rowItem name');
      return;
    }
    const newItems = items;
    newItems.push(itemName);

    this.setState(
      {
        items: newItems,
        itemName: '',
      },
    );
  }

  deleteItem(id) {
    const { items } = this.state;
    const newItems = items;
    newItems.splice(id, 1);

    this.setState({ items: newItems });
  }

  deleteItemsList() {
    const { id } = this.props;
    const { clickAction } = this.props;
    clickAction(id);
  }

  itemTextUpdate(event) {
    this.setState({ itemName: event.target.value });
  }

  render() {
    const { items } = this.state;
    const { name } = this.props;
    const { itemName } = this.state;
    const listItems = items.map((text, id) => (
      <TextItem
        key={text}
        text={text}
        id={id}
        clickAction={this.deleteItem}
      />
    ));
    return (
      <div className="items-list row-item">
        <div className="items-list__top-line">
          <div className="items-list__header">
            { name }
          </div>
          <div className="items-list__menu-button fa fa-bars">
            <div className="items-list__menu">
              <button
                type="button"
                onClick={this.deleteItemsList}
                className="items-list__delete"
              >
                Delete Item
              </button>
            </div>
          </div>
        </div>
        <div className="items-list__items">
          { listItems }
          <form
            onSubmit={this.addItem}
            className="new-item-form"
          >
            <input
              type="text"
              placeholder="Enter item text"
              onChange={this.itemTextUpdate}
              value={itemName}
            />
            <input type="submit" value="+" />
          </form>
        </div>

      </div>
    );
  }
}

ItemList.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  clickAction: PropTypes.func.isRequired,
};

export default ItemList;
