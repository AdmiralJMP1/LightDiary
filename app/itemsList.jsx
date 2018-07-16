import React from 'react';
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
    this.itemTextUpdate = this.itemTextUpdate.bind(this);

  }

  addItem(event) {
    event.preventDefault();
    if(this.state.itemName === '') {
      alert('Please enter a item name');
      return;
    }
    if(this.state.items.indexOf(this.state.itemName) !== -1) {
      alert('Please enter a NEW rowItem name');
      return;
    }
    const newItems = this.state.items;
    newItems.push(this.state.itemName);

    this.setState({items: newItems});
  }

  deleteItem(id) {
    const newItems = this.state.items;
    newItems.splice(id, 1);

    this.setState({items: newItems});
  }

  itemTextUpdate(event) {
    this.setState({itemName: event.target.value});
  }

  render() {
    const items = this.state.items.map((text, id) => (
      <TextItem
        key={id}
        text={text}
        id={id}
        clickAction={this.deleteItem}
      />
    ));
    return (
      <div class="items-list row-item">
        <div class="items-list__top-line">
          <div class="items-list__header">
            { this.props.name }
          </div>
          <div class="items-list__menu-button fa fa-bars">
            <div class="items-list__menu">
              <div
                onClick={this.props.clickAction.bind(this, this.props.id )}
                class="items-list__delete"
              >
                Delete Item
              </div>
            </div>
          </div>
        </div>
        <div class="items-list__items">
          {items}
        </div>
        <form 
          onSubmit={this.addItem}
          class="new-item-form">
          <input
            type="text"
            placeholder="Enter item text"
            onChange={this.itemTextUpdate}
            value={this.state.itemName} />
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default ItemList;
