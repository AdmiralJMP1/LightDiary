import React from 'react';
import ItemList from './itemsList';
import ContainerItem from './containerItem';

class Row extends ContainerItem {
  render() {
    const { innerItems } = this.state;
    const { name } = this.props;
    const { newItemName } = this.state;
    const rowItems = innerItems.map((text, id) => (
      <ItemList
        key={text}
        name={text}
        id={id}
        clickAction={this.deleteInnerItem}
      />
    ));
    return (
      <div className="row">
        <div className="row__top-line">
          { name }
          <button
            type="button"
            onClick={this.selfDelete}
            className="row__delete fas fa-trash-alt"
          />
        </div>
        <div className="row__items">
          {rowItems}
          <form
            onSubmit={this.addInnerItem}
            className="new-row-item-form"
          >
            <input
              type="text"
              placeholder="Enter item name"
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

export default Row;
