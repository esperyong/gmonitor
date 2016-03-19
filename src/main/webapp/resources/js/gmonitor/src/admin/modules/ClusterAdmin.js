import React from 'react'
import { Link } from 'react-router'

export default React.createClass({

  render() {
    return (
      <div>
        <h1>ClusterAdmin</h1>
        <ul role="nav">
            <li>
                <Link to="/admin/cluster/crud">
                    Cluster
                </Link>
            </li>
            <li>
                <Link to="/admin/cluster-member/crud">
                    ClusterMember
                </Link>
            </li>
        </ul>
        {this.props.children}
      </div>
    )
  }

})
