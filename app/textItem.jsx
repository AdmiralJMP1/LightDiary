import React from 'react';
import BaseItem from './baseItem';

class TextItem extends BaseItem {
  render() {
    const { name } = this.props;
    return (
      <div className="item">
        <div className="item__text">
          {name}
        </div>
        <div className="item__menu-button fa fa-ellipsis-v">
          <div className="item__menu">
            <button
              type="button"
              onClick={this.selfDelete}
              className="item__delete"
            >
              Delete item
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default TextItem;
