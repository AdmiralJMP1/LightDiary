import React from 'react';
import { render } from 'react-dom';
import Board from './board'
import './appStyle.css';

render(<Board name="Main"/>, document.getElementById('app'));
