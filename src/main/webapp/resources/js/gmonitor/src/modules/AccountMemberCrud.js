import React from 'react'

var gmonitorui = require('./gmonitorui');
var Table = require('../react_bootstrap/Table');
var Modal = require('../react_bootstrap/Modal');

export default React.createClass({

  getInitialState: function() {
      return {
          currentUpdateClusterId:'', 
          currentUpdateClusterAdmin:'', 
      };
  },

  handleClick : function(cluster,e){
      console.log(cluster);
      this.setState({currentUpdateClusterId: cluster.clusterId});
      this.setState({currentUpdateClusterAdmin: cluster.clusterAdmin});
  },

  updateCluster : function(){
      var currentUpdateClusterId = this.state.currentUpdateClusterId; 
      var currentUpdateClusterAdmin = this.state.currentUpdateClusterAdmin; 
      console.log(currentUpdateClusterId);
      console.log(currentUpdateClusterAdmin);
  },

  componentDidMount: function() {
      //TODO fetchData;
      //console.log($('#myModal'));
  },

  createCluster: function(){
      console.log('createCluster');
  },

  renderCreateModalBody:function(){
      return (<i>增加Cluster</i>);
  },

  renderCreateModalHeader:function(){
      return (
          <div>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
          <h4 className="modal-title" id="myModalLabel">更新Cluster</h4>
          </div>
      )
  },

  renderCreateModalFooter:function(){
      return (
          <div>
            <button type="button" onClick={this.createCluster} className="btn btn-primary">确认创建</button>
          </div>
           )
  },

  renderUpdateModalBody:function(){
      var handleUpdateClusterIdChange = function(event){
          this.setState({currentUpdateClusterId: event.target.value});
      }.bind(this);
      var handleUpdateClusterAdminChange = function(event){
          this.setState({currentUpdateClusterAdmin: event.target.value});
      }.bind(this);

      return (
          <div>
          <input type="text" value={this.state.currentUpdateClusterId}  onChange={handleUpdateClusterIdChange}/>
          <input type="text" value={this.state.currentUpdateClusterAdmin} onChange={handleUpdateClusterAdminChange} />
          </div>
      );
  },

  renderUpdateModalHeader:function(){
      return (
          <div>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
          <h4 className="modal-title" id="myModalLabel">更新Cluster</h4>
          </div>
      )
  },

  renderUpdateModalFooter:function(){
      return (
          <div>
              <button type="button" 
                  onClick={this.updateCluster} 
                  className="btn btn-primary">
                  确认更新
              </button>
          </div>
           )
  },

  render() {

    var rowDatas = [
                       {clusterId:'001',clusterAdmin:'张三'},
                       {clusterId:'002',clusterAdmin:'李四'},
                       {clusterId:'003',clusterAdmin:'王二麻子'},
                   ];

    var renderRow = function(cluster){
        var cells = [];
        cells.push(<td>{cluster.clusterId}</td>)
        cells.push(<td>{cluster.clusterAdmin}</td>)
        cells.push(
            (<td>
                <button type="button" 
                        onClick={this.handleClick.bind(this,cluster)} 
                        data-toggle="modal" 
                        data-target="#updateClusterModal"
                        className="btn btn-success">
                    修改Cluster成员
                </button>
            </td>)
        );
        return (<tr>{cells}</tr>)
    }.bind(this);

    var renderHeader = function(){
        return (
            <thead>
                <tr>
                <th>ClusterId</th>
                <th>联系人</th>
                <th>操作</th>
                </tr>
            </thead>
        )
    };

    return (
      <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
          <div className="sub-header">
                <button type="button" 
                    data-toggle="modal" data-target="#createClusterModal"
                    className="btn btn-success">增加Cluster</button>
          </div>
          <Table datas={rowDatas} renderRow={renderRow} renderHeader={renderHeader} />
          <Modal modalId="createClusterModal" 
                 renderBody={this.renderCreateModalBody} 
                 renderHeader={this.renderCreateModalHeader} 
                 renderFooter={this.renderCreateModalFooter} />

          <Modal modalId="updateClusterModal" 
                 renderBody={this.renderUpdateModalBody} 
                 renderHeader={this.renderUpdateModalHeader} 
                 renderFooter={this.renderUpdateModalFooter} />

      </div>
    )
  }

})
