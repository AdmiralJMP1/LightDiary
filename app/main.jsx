import React from 'react';
import { render } from 'react-dom';
import Board from './board';
import './appStyle.css';

render(<Board name="Main" id={0} />, document.getElementById('app'));
