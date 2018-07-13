import React from 'react';
import { render } from 'react-dom';
import TestComponent from './TestComponent';
import Board from './board'
import './appStyle.css';

const numbers = [1,2,3,4,5,6,7];
render(<Board numbers={numbers} />, document.getElementById('app'));
