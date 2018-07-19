import React from 'react';
import PropTypes from 'prop-types';

class TextItem extends React.Component {
  constructor(props) {
    super(props);

    this.deleteTextItem = this.deleteTextItem.bind(this);
  }

  deleteTextItem() {
    const { id } = this.props;
    const { clickAction } = this.props;
    clickAction(id);
  }

  render() {
    const { text } = this.props;
    return (
      <div className="item">
        <div className="item__text">
          {text}
        </div>
        <div className="item__menu-button fa fa-ellipsis-v">
          <div className="item__menu">
            <button
              type="button"
              onClick={this.deleteTextItem}
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

TextItem.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  clickAction: PropTypes.func.isRequired,
};

export default TextItem;
