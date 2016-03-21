import React from 'react'
import { Link } from 'react-router'

var gmonitorui = require('./gmonitorui')

export default React.createClass({
  render() {
    var currentUser = {
        id: 'liuyong',
        name: '刘勇',
        role: 'ADMIN',
    };
    return (
      <div>
        <gmonitorui.NavHeader currentUser={ currentUser } />
        {this.props.children}
      </div>
    )
  }
})
