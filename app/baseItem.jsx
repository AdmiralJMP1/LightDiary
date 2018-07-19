import React from 'react';
import PropTypes from 'prop-types';

class BaseItem extends React.Component {
  constructor(props) {
    if (new.target === BaseItem) {
      throw new TypeError('Cannot construct Abstract instances directly');
    }
    super(props);
    this.selfDelete = this.selfDelete.bind(this);
  }

  selfDelete() {
    const { id } = this.props;
    const { clickAction } = this.props;
    clickAction(id);
  }

  render() {
    return null;
  }
}

BaseItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  clickAction: PropTypes.func,
};

export default BaseItem;
