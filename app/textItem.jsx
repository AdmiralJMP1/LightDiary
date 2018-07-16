import React from 'react';

class TextItem extends React.Component {
  render() {
    return (
      <div class="item">
        {this.props.text}
        <div
          onClick={this.props.clickAction.bind(this, this.props.id )}
          class="item__delete"
        >
        -item
        </div>
      </div>
    )
  }
}

export default TextItem;
