import Widget from 'widget';
import ReactDOM from 'react-dom';
import React from 'react';

const showChatTemplate = element => {
  ReactDOM.render(<Widget text="suka" />,
  element);
};

module.exports = showChatTemplate;
