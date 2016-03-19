import React from 'react'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'

import GmonitorAdmin from './modules/GmonitorAdmin'

import ClusterAdmin from './modules/ClusterAdmin'
import ClusterCrud from './modules/ClusterCrud'
import ClusterMemberCrud from './modules/ClusterMemberCrud'
import ClusterMemberRelation from './modules/ClusterMemberRelation'

import DepartmentAdmin from './modules/DepartmentAdmin'
import DepartmentCrud from './modules/DepartmentCrud'
import AccountMemberDeptRelation from './modules/AccountMemberDeptRelation'
import AccountMemberCrud from './modules/AccountMemberCrud'

module.exports = (
  <Route path="/" component={GmonitorAdmin}>
      <Route path="/admin/cluster/" component={ClusterAdmin}>
          <Route path="/admin/cluster/crud" component={ClusterCrud}/>
          <Route path="/admin/cluster-member/crud" component={ClusterMemberCrud}/>
          <Route path="/admin/cluster-member/relation" component={ClusterMemberRelation}/>
      </Route>
      <Route path="/admin/department/" component={DepartmentAdmin}>
          <Route path="/admin/department/crud" component={DepartmentCrud}/>
          <Route path="/admin/account-member/crud" component={AccountMemberCrud}/>
          <Route path="/admin/account-member/dept-relation" component={AccountMemberDeptRelation}/>
      </Route>
  </Route>
)

