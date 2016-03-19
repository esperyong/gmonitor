import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return (
      <div>
        <h1>GmonitorAdmin</h1>
        <ul role="nav">
            <li>
                <Link to="/admin/cluster/">
                    Cluster管理
                </Link>
            </li>
            <li>
                <Link to="/admin/department/">
                    部门管理
                </Link>
            </li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})
