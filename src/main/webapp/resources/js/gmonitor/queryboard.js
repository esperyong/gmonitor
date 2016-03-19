var gmonitorui = require('./src/gmonitorui');
var ReactDOM = require('react-dom');
var React = require('react');

ReactDOM.render(
  <gmonitorui.QueryBoardUI />,
  document.getElementById('content')
);

