/* eslint-disable react/jsx-filename-extension */
import Phaser from 'phaser';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import playGame from './phaser/scene';

const config = {
  type: Phaser.AUTO,
  parent: 'phaser',
  width: 800,
  height: 600,
  scene: playGame,
};

const game = new Phaser.Game(config);

ReactDOM.render(
  <App />,
  document.getElementById('root') || document.createElement('div'),
);
