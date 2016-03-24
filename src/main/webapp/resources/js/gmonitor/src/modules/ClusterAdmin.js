import React from 'react'
import { Link } from 'react-router'

export default React.createClass({

  render() {
    return (
<div className="container-fluid">
  <div className="row">
    <div className="col-sm-3 col-md-2 sidebar">
      <ul className="nav nav-sidebar">
        <div className="panel-group" id='clusterAdmin'>
          <div className="panel panel-default">
            <div className="panel-heading">
                <h4 className="panel-title">
                  <Link activeStyle={{ "color": "#fff","backgroundColor": "#428bca" }}  to="/admin/cluster/" onlyActiveOnIndex>

                      Cluster
                  </Link>
                </h4>
            </div>
          </div>
          <div className="panel panel-default">
            <div className="panel-heading">
                <h4 className="panel-title">
                  <Link activeStyle={{ "color": "#fff","backgroundColor": "#428bca" }}  to="/admin/cluster-member/crud">
                      ClusterMember
                  </Link>
                </h4>
            </div>
          </div>
        </div>
      </ul>
    </div>
    {this.props.children}
  </div>
</div>
    )
  }

})
