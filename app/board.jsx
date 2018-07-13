import React from 'react';
import Row from './row';

// function Board(prop) {
//   const numbers = prop.numbers;
//   const rowList = numbers.map((number) =>
//     <Row key = {number.toString()}
//          value = {number} />
//   );
//   return (
//     <div>
//       {rowList}
//     </div>
//   );

// };

class Board extends React.Component {
  constructor(props) {
    super(props);

    this.addRow = this.addRow.bind(this);
    this.createRowList = this.createRowList.bind(this);

    const numbers = [];
    const rowList = this.createRowList(numbers);
    this.state = {
      numbers: numbers,
      rowList: rowList,
    };
  }
// this.state.numbers.push(this.state.numbers.lenght);
  addRow(){
    // const newNumbers = [1,2,3];
    this.state.numbers.push(this.state.numbers.length + 1);
    const newRowList = this.createRowList(this.state.numbers);
    this.setState(prevState => ({
      rowList: newRowList,
    }))
  }

  createRowList(numbers){
    return numbers.map((number) =>
      <Row key = {number.toString()}
           value = {number} />
    );
  }

  render(){ 
    return (
      <div>
        {this.state.rowList}
        <button onClick={this.addRow}>+</button>
      </div>
    );
  }
}

export default Board;
