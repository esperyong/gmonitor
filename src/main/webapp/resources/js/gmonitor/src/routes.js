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

var gmonitorui = require('./modules/gmonitorui')

module.exports = (
  <Route path="/" component={GmonitorAdmin}>
      <IndexRoute component={gmonitorui.DashBoardUI}/>
      <Route path="/queryboard/" component={gmonitorui.QueryBoardUI}/>
      <Route path="/admin/cluster/" component={ClusterAdmin}>
          <IndexRoute component={ClusterCrud}/>
          <Route path="/admin/cluster-member/crud" component={ClusterMemberCrud}/>
          <Route path="/admin/cluster-member/relation" component={ClusterMemberRelation}/>
      </Route>
      <Route path="/admin/department/" component={DepartmentAdmin}>
          <IndexRoute component={DepartmentCrud}/>
          <Route path="/admin/account-member/crud" component={AccountMemberCrud}/>
          <Route path="/admin/account-member/dept-relation" component={AccountMemberDeptRelation}/>
      </Route>
  </Route>
)

