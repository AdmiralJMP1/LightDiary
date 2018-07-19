import React from 'react';
import TextItem from './textItem';
import ContainerItem from './containerItem';

class ItemList extends ContainerItem {
  render() {
    const { innerItems } = this.state;
    const { name } = this.props;
    const { newItemName } = this.state;
    const listItems = innerItems.map((text, id) => (
      <TextItem
        key={text}
        name={text}
        id={id}
        clickAction={this.deleteInnerItem}
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
                onClick={this.selfDelete}
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
            onSubmit={this.addInnerItem}
            className="new-item-form"
          >
            <input
              type="text"
              placeholder="Enter item text"
              onChange={this.newItemNameUpdate}
              value={newItemName}
            />
            <input type="submit" value="+" />
          </form>
        </div>
      </div>
    );
  }
}

export default ItemList;
