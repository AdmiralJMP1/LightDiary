import React from 'react';
import ContainerItem from './containerItem';
import Row from './row';

class Board extends ContainerItem {
  render() {
    const { innerItems } = this.state;
    const { name } = this.props;
    const { newItemName } = this.state;
    const boardItems = innerItems.map((text, id) => (
      <Row
        key={text}
        name={text}
        id={id}
        clickAction={this.deleteInnerItem}
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
          { boardItems }
        </div>
        <form
          onSubmit={this.addInnerItem}
          className="new-row-form"
        >
          <input
            type="text"
            placeholder="Enter row name"
            onChange={this.newItemNameUpdate}
            value={newItemName}
          />
          <input type="submit" value="+" />
        </form>
      </div>
    );
  }
}

export default Board;
