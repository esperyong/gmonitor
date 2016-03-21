//var gmonitorui = require('./src/gmonitorui');
//var ReactDOM = require('react-dom');
//var React = require('react');
//
//if ( $('#queryboard-content').length > 0 ){
//    ReactDOM.render(
//      <gmonitorui.QueryBoardUI />,
//      document.getElementById('queryboard-content')
//    );
//
//}else if($('#dashboard-content').length > 0){
//    ReactDOM.render(
//      <gmonitorui.DashBoardUI />,
//      document.getElementById('dashboard-content')
//    );
//}

import React from 'react'
import {render} from 'react-dom'
import {Router, hashHistory} from 'react-router'
import routes from './src/routes'

render(
    <Router routes={routes} history={hashHistory} />,
    document.getElementById('content')
)


