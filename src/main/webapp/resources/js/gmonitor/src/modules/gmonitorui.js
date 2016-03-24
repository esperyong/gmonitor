var React = require('react');
var react_echarts = require('../react_echarts/react-echarts');
import { Link } from 'react-router'
import NavLink from './NavLink'


var NavHeader = React.createClass({
    
    handleClickLogout: function(){
       this.refs.form.submit(); 
    },

    render: function() {
        return (

    <nav className="navbar navbar-inverse navbar-fixed-top">
      <div className="container-fluid">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="#">Gmonitor</a>
        </div>
        <div id="navbar" className="collapse navbar-collapse">
          <ul className="nav navbar-nav">
            <li>
                <Link activeStyle={{ color: 'white' }} to="/" onlyActiveOnIndex>
                    统计仪表板
                </Link>
            </li>
            <li>
                <Link activeStyle={{ color: 'white' }} to="/queryboard/">
                    指标数据查询
                </Link>
            </li>
            <li>
                <Link activeStyle={{ color: 'white' }} to="/admin/cluster/">
                    Cluster管理
                </Link>
            </li>
            <li>
                <Link activeStyle={{ color: 'white' }} to="/admin/department/">
                    部门管理
                </Link>
            </li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li></li>
            <li><a>欢迎：{this.props.currentUser.name}</a></li>
            <li><a href="#" onClick={this.handleClickLogout}>注销</a></li>
            <form style={ {visibility: "hidden"} }
                  ref="form" method="post" 
                  action="/logout"></form>
          </ul>
        </div>
      </div>
    </nav>
        );
    }

});

exports.NavHeader = NavHeader;

var BoardContent = React.createClass({

    render: function() {

        var content = null;
        if(this.props.boardType == 'dashboard'){
            content = <DashBoard chartConfigs={ this.props.chartConfigs } />;
        }else{
            content = <QueryBoard chartConfig={ this.props.chartConfig } tableHeads={this.props.tableHeads} rowDatas={ this.props.rowDatas } />;
        }
        return (
        <div className="container-fluid">
          <div className="row">
                <SideBar menudatas={this.props.menudatas} />
                { content }
          </div>
        </div>
        );
    }

});

var AccordionMenu = React.createClass({


    makeid: function(length) {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    
        for( var i=0; i < length; i++ )
            text += possible.charAt(Math.floor(Math.random() * possible.length));
    
        return text;
    },

    handleClick: function(e){
        this.props.handleClick(e);
    },

    render: function() {


        var submenus = [];

        this.props.menudata.submenus.forEach(function(submenu){
            if(submenu.hasOwnProperty("submenus") && submenu.submenus.length > 0){
                submenus.push(<AccordionMenu handleClick={this.props.handleClick} menudata={submenu} />);
            }
        }.bind(this));

        if(submenus.length == 0){
            var smenus = [];
            this.props.menudata.submenus.forEach(function(submenu){
                smenus.push(<li><a href='#' onClick={this.props.handleClick}>{submenu.name}</a></li>); 
            }.bind(this));
            
            submenus = (
                  <ul className="nav nav-sidebar">
                     {smenus} 
                  </ul>
            );
        }

        var menuid = "menu-" + this.makeid(5);
        var collapseid = "collapse-" + this.makeid(5);

        return (
<div className="panel-group" id={menuid}>

  <div className="panel panel-default">

    <div className="panel-heading">
        <h4 className="panel-title">
            <a className="accordion-toggle collapsed"
               data-toggle="collapse" 
               data-parent={"#"+menuid}
               onClick={this.props.handleClick}
               href={"#"+collapseid}>
               {this.props.menudata.name}
            </a>
        </h4>
    </div>

    <div className="panel-collapse collapse" id={collapseid}>

      <div className="panel-body">
          {submenus}
      </div>

    </div>

  </div>
</div>
        );
    }

});

var SideBar = React.createClass({

    handleMenuItemClick: function(e){
        e.preventDefault();
        if(!$(e.target).hasClass("accordion-toggle")){
            //$(e.target).css({"background-color":"#8dd7f9"});
        }
    },

    render: function() {

        var menus = [];
        this.props.menudatas.forEach(function(menudata){
            menus.push(<AccordionMenu handleClick={this.handleMenuItemClick} menudata={menudata} />);
        }.bind(this)); 

        return (
<div className="col-sm-3 col-md-2 sidebar">
  <ul className="nav nav-sidebar">
      {menus}
  </ul>
</div>
        );
    }

});

var DashBoard = React.createClass({

    render: function() {
        return (
          <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
              <QueryBar  />
              <ChartsPanel chartConfigs={this.props.chartConfigs} />
          </div>
        );
    }

});

var QueryBoard = React.createClass({

    render: function() {

        return (
          <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
              <ChartPanel chartConfig={this.props.chartConfig} />
              <QueryBar selectMetric={true}/>
              <SimpleResultTable theads={this.props.tableHeads} 
                                 rowDatas={this.props.rowDatas} />
          </div>
        );
    }

});

var ChartPanel = React.createClass({

    render: function() {
        return (
          <div>
            <div className="row placeholders">
              <div className="col-xs-12 col-sm-6 placeholder">
                <react_echarts.ECharts {...this.props.chartConfig} />
              </div>
            </div>
          </div>
        );
    }

});

var ChartsPanel = React.createClass({

    render: function() {

        var contents = [];
        this.props.chartConfigs.forEach(function(chartConfig,index){
                contents.push(
                      <div className="col-xs-12 col-sm-6 placeholder">
                          <react_echarts.ECharts {...chartConfig} />
                      </div>
                );
        });

        return (
          <div className="row placeholders">
            {contents}
          </div>
        );
    }

});

var MetricSelect = React.createClass({

    render: function() {
        return (
              <div className="form-group">
                <label>指标项：</label>
                <select className="form-control">
                    <option value="1">CPU</option>
                    <option value="2">内存</option>
                    <option value="3">GC</option>
                </select>
              </div>
        );
    }

});

var QueryBar = React.createClass({

    render: function() {
        var metricSelect = null;
        if(this.props.selectMetric){
            metricSelect = <MetricSelect/>; 
        }
        return (
            <form className="form-inline sub-header">
              { metricSelect }
              &nbsp;
              <div className="form-group">
                <label>开始时间：</label>
                <input type="text" className="form-control" ref="startDate" placeholder="开始时间"/>
              </div>
              &nbsp;
              <div className="form-group">
                <label>结束时间：</label>
                <input type="email" className="form-control" ref="endDate" placeholder="结束时间"/>
              </div>
              &nbsp;
              <button type="button" className="btn btn-primary">查询</button>
            </form>
        );
    }
});

var SimpleResultTableHead = React.createClass({

    render: function() {

        var theads = [];
        this.props.theads.forEach(function(head,key){
            theads.push(<th key={key}>{head}</th>);
        }); 

        return (
            <thead>
                <tr>
                   {theads}
                </tr>
            </thead>
        );

    }

});

var SimpleResultTableBody = React.createClass({


    render: function() {
        var rows = [];

        this.props.rowDatas.forEach(function(rowData,key){

            var cells = [];
            rowData.forEach(function(cellData,key){
                cells.push(<td key={key}>{cellData}</td>)
            });

            rows.push(<tr key={key}>{cells}</tr>);
        }); 

        return (
          <tbody>{rows}</tbody>
        );
    }

});

var SimpleResultTable = React.createClass({
    render: function() {
        return (

          <div className="table-responsive">
            <table className="table table-striped">
              <SimpleResultTableHead theads={this.props.theads} />
              <SimpleResultTableBody rowDatas={this.props.rowDatas} />
            </table>
          </div>

        );
    }

});

exports.SimpleResultTable = SimpleResultTable;

exports.QueryBoardUI = React.createClass({

    getInitialState: function() {
        return {
            currentNode:{},
            currentMetric:'CPU',
            startDateTime:'', 
            endDateTime:'', 
            chartConfig:[], 
            rowDatas:[],

        };
    },

    getChartConfig: function(){
        function randomData() {
            now = new Date(+now + oneDay);
            value = value + Math.random() * 21 - 10;
            return {
                name: now.toString(),
                value: [
                    [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('-'),
                    Math.round(value)
                ]
            }
        }
        
        var data = [];
        var now = +new Date(1997, 9, 3);
        var oneDay = 24 * 3600 * 1000;
        var value = Math.random() * 1000;
        for (var i = 0; i < 1000; i++) {
            data.push(randomData());
        }
        
        var option = {
            chartStyle: {width:"900", height:"600px"},
            title: {
                text: 'CpuUsage'
            },
            tooltip: {
                trigger: 'axis',
                formatter: function (params) {
                    params = params[0];
                    var date = new Date(params.name);
                    return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' : ' + params.value[1];
                },
                axisPointer: {
                    animation: false
                }
            },
            xAxis: {
                type: 'time',
                splitLine: {
                    show: false
                }
            },
            yAxis: {
                type: 'value',
                boundaryGap: [0, '100%'],
                splitLine: {
                    show: false
                }
            },
            series: [{
                name: 'CpuUsage',
                type: 'line',
                showSymbol: false,
                hoverAnimation: false,
                data: data
            }]
        };

        //option = {
        //    chartStyle: {width:"900", height:"600px"},
        //    //className:"img-responsive",//can delete if required
        //    title: {
        //        text: 'ECharts 入门示例'
        //    },
        //    tooltip: {},
        //    legend: {
        //        data:['销量']
        //    },
        //    xAxis: {
        //        data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
        //    },
        //    yAxis: {},
        //    series: [{
        //        name: '销量',
        //        type: 'bar',
        //        data: [5, 20, 36, 10, 10, 20]
        //    }]
        //};

        return option;

    },

    render: function() {
        var menudatas = [
        {
          name:'个人网银/集群',
          submenus:[
            {
             name:'Locators',
             submenus:[
                 {name:'Locator1',submenus:[]},
                 {name:'Locator2',submenus:[]},
                 {name:'Locator3',submenus:[]},
                 {name:'Locator4',submenus:[]},
             ],
            },
            {
             name:'CacheServers',
             submenus:[
                 {name:'CacheServers1'},
                 {name:'CacheServers2'},
                 {name:'CacheServers3'},
                 {name:'CacheServers4'},
             ],
            },
          ],
        },
        {
          name:'参数集群',
          submenus:[
            {
             name:'Locators',
             submenus:[
                 {name:'Locator1'},
                 {name:'Locator2'},
                 {name:'Locator3'},
                 {name:'Locator4'},
             ],
            },
            {
             name:'CacheServers',
             submenus:[
                 {name:'CacheServers1'},
                 {name:'CacheServers2'},
                 {name:'CacheServers3'},
                 {name:'CacheServers4'},
             ],
            },
          ],
        },
        {
          name:'企业集群',
          submenus:[
            {
             name:'Locators',
             submenus:[
                 {name:'Locator1'},
                 {name:'Locator2'},
                 {name:'Locator3'},
                 {name:'Locator4'},
             ],
            },
            {
             name:'CacheServers',
             submenus:[
                 {name:'CacheServers1'},
                 {name:'CacheServers2'},
                 {name:'CacheServers3'},
                 {name:'CacheServers4'},
             ],
            },
          ],
        },
    ];
      // 指定图表的配置项和数据
      var chartConfig = this.getChartConfig();

      var tableHeads = ['指标项','指标值','采集时间'];

      var rowDatas = [
                                    ['CPU','53.01%','2015-12-14 22:22:00'],
                                    ['CPU','53.01%','2015-12-14 22:22:00'],
                                    ['CPU','53.01%','2015-12-14 22:22:00'],
                                    ['CPU','53.01%','2015-12-14 22:22:00'],
                                    ['CPU','53.01%','2015-12-14 22:22:00'],
                                    ['CPU','53.01%','2015-12-14 22:22:00'],
                                    ['CPU','53.01%','2015-12-14 22:22:00'],
                                    ['CPU','53.01%','2015-12-14 22:22:00'],
                      ];
      var currentUser = {
          id: 'liuyong',
          name: '刘勇',
          role: 'ADMIN',
      };
        return (
            <div>
                <BoardContent boardType='queryBoard' 
                    menudatas={ menudatas } 
                    chartConfig={chartConfig} 
                    tableHeads={tableHeads} 
                    rowDatas={rowDatas} />
            </div>
        );
    }

});

exports.DashBoardUI = React.createClass({

    getChartConfigs:function(){
        var configs = [];
        var charts = ['CpuUsage','CurrentHeapSize','ClientConnectionCount','GarbageCollectionCount','JVMPauses','TotalFileDescriptorOpen'];
        for (var i = 0; i < charts.length; i++) {
            configs.push(this.getChartConfig(charts[i]));
        };
        return configs;
    },

    getChartConfig: function(chartName){
        function randomData() {
            now = new Date(+now + oneDay);
            value = value + Math.random() * 21 - 10;
            return {
                name: now.toString(),
                value: [
                    [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('-'),
                    Math.round(value)
                ]
            }
        }
        
        var data = [];
        var now = +new Date(1997, 9, 3);
        var oneDay = 24 * 3600 * 1000;
        var value = Math.random() * 1000;
        for (var i = 0; i < 1000; i++) {
            data.push(randomData());
        }
        
        var option = {
            chartStyle: {width:"600px", height:"400px"},
            title: {
                text: chartName,
            },
            tooltip: {
                trigger: 'axis',
                formatter: function (params) {
                    params = params[0];
                    var date = new Date(params.name);
                    return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' : ' + params.value[1];
                },
                axisPointer: {
                    animation: false
                }
            },
            xAxis: {
                type: 'time',
                splitLine: {
                    show: false
                }
            },
            yAxis: {
                type: 'value',
                boundaryGap: [0, '100%'],
                splitLine: {
                    show: false
                }
            },
            series: [{
                name: 'CpuUsage',
                type: 'line',
                showSymbol: false,
                hoverAnimation: false,
                data: data
            }]
        };

        //option = {
        //    chartStyle: {width:"900", height:"600px"},
        //    //className:"img-responsive",//can delete if required
        //    title: {
        //        text: 'ECharts 入门示例'
        //    },
        //    tooltip: {},
        //    legend: {
        //        data:['销量']
        //    },
        //    xAxis: {
        //        data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
        //    },
        //    yAxis: {},
        //    series: [{
        //        name: '销量',
        //        type: 'bar',
        //        data: [5, 20, 36, 10, 10, 20]
        //    }]
        //};

        return option;

    },

    getInitialState: function() {
        return {
            currentNode:{},
            chartConfigs:[], 
            startDateTime:'', 
            endDateTime:'', 
        };
    },

    render: function() {

        var menudatas = [
        {
          name:'个人网银/集群',
          submenus:[
            {
             name:'Locators',
             submenus:[
                 {name:'Locator1',submenus:[]},
                 {name:'Locator2',submenus:[]},
                 {name:'Locator3',submenus:[]},
                 {name:'Locator4',submenus:[]},
             ],
            },
            {
             name:'CacheServers',
             submenus:[
                 {name:'CacheServers1'},
                 {name:'CacheServers2'},
                 {name:'CacheServers3'},
                 {name:'CacheServers4'},
             ],
            },
          ],
        },
        {
          name:'参数集群',
          submenus:[
            {
             name:'Locators',
             submenus:[
                 {name:'Locator1'},
                 {name:'Locator2'},
                 {name:'Locator3'},
                 {name:'Locator4'},
             ],
            },
            {
             name:'CacheServers',
             submenus:[
                 {name:'CacheServers1'},
                 {name:'CacheServers2'},
                 {name:'CacheServers3'},
                 {name:'CacheServers4'},
             ],
            },
          ],
        },
        {
          name:'企业集群',
          submenus:[
            {
             name:'Locators',
             submenus:[
                 {name:'Locator1'},
                 {name:'Locator2'},
                 {name:'Locator3'},
                 {name:'Locator4'},
             ],
            },
            {
             name:'CacheServers',
             submenus:[
                 {name:'CacheServers1'},
                 {name:'CacheServers2'},
                 {name:'CacheServers3'},
                 {name:'CacheServers4'},
             ],
            },
          ],
        },
    ];

      var chartConfigs = this.getChartConfigs();

      var currentUser = {
          id: 'liuyong',
          name: '刘勇',
          role: 'ADMIN',
      };

        return (
            <div>
                <BoardContent menudatas={ menudatas } 
                              boardType='dashboard' 
                              chartConfigs={chartConfigs} />
            </div>
        );
    }

});




