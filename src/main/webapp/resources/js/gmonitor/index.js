var gmonitorui = require('./src/gmonitorui');
var ReactDOM = require('react-dom');
var React = require('react');

if ( $('#queryboard-content').length > 0 ){
    ReactDOM.render(
      <gmonitorui.QueryBoardUI />,
      document.getElementById('queryboard-content')
    );

}else if($('#dashboard-content').length > 0){
    ReactDOM.render(
      <gmonitorui.DashBoardUI />,
      document.getElementById('dashboard-content')
    );
}
