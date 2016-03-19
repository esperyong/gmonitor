import React from 'react'
import { Link } from 'react-router'

export default React.createClass({

  render() {
    return (
      <div>
        <h1>DepartmentAdmin</h1>
        <ul role="nav">
            <li>
                <Link to="/admin/department/crud">
                    部门
                </Link>
            </li>
            <li>
                <Link to="/admin/account-member/crud">
                    成员
                </Link>
            </li>
        </ul>
        {this.props.children}
      </div>
    )
  }

})
