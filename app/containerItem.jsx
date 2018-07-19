import BaseItem from './baseItem';

class ContainerItem extends BaseItem {
  constructor(props) {
    if (new.target === ContainerItem) {
      throw new TypeError('Cannot construct Abstract instances directly');
    }
    super(props);

    this.state = {
      innerItems: [],
      newItemName: '',
    };

    this.addInnerItem = this.addInnerItem.bind(this);
    this.deleteInnerItem = this.deleteInnerItem.bind(this);
    this.newItemNameUpdate = this.newItemNameUpdate.bind(this);
  }

  addInnerItem(event) {
    event.preventDefault();
    const { newItemName } = this.state;
    const { innerItems } = this.state;
    if (newItemName === '') {
      alert('Please enter a item name');
      return;
    }
    if (innerItems.indexOf(newItemName) !== -1) {
      alert('Please enter a NEW rowItem name');
      return;
    }
    const newItems = innerItems;
    newItems.push(newItemName);

    this.setState(
      {
        innerItems: newItems,
        newItemName: '',
      },
    );
  }

  deleteInnerItem(id) {
    const { innerItems } = this.state;
    const newItems = innerItems;
    newItems.splice(id, 1);

    this.setState({ innerItems: newItems });
  }

  newItemNameUpdate(event) {
    this.setState({ newItemName: event.target.value });
  }

  render() {
    return null;
  }
}

export default ContainerItem;