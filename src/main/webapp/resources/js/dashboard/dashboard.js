var react_echarts = {};

(function (ns) {

    //private scoping
    var global;

    ns.ECharts = React.createClass({

        displayName: "ECharts",

        filterMap: function(filterArray,props){
          const options = {};
          filterArray.map((key) => {
            const option = props[key];
            if (option !== undefined) {
              options[key] = option;
            }
          });
          return options;
        },

        componentDidMount: function() {
          const { onReady } = this.props;
          this.initChart();
          if (onReady) onReady(this.chart);
        },

        componentDidUpdate: function(prevProps) {
          this.reRenderChart(this.props);
        },

        componentWillUnmount: function() {
          this.chart.dispose();
        },

        reRenderChart: function(chart_options) {
          this.chart.setOption(chart_options, chart_options.theme);
        },

        initChart: function() {
          // 指定图表的配置项和数据
          const node = this.refs.chart;
          const options = this.filterMap([
            'backgroundColor',
            'animation',
            'calculable',
            'renderAsImage',
            'timeline',
            'title',
            'toolbox',
            'tooltip',
            'legend',
            'dataRange',
            'dataZoom',
            'roamController',
            'grid',
            'color',
            'xAxis',
            'yAxis',
            'series',
          ], this.props);
          this.chart = echarts.init(node);
          this.chart.setOption(options, this.props.theme);
        },

        render: function() {
          return (
              <div ref="chart" className={this.props.className} style={ this.props.chartStyle }>
              </div>
          );
        }

    });

})(react_echarts);


var QueryBoardUI = React.createClass({

    render: function() {
        return (
            <div>
                <NavHeader />
                <QueryBoardContent />
            </div>
        );
    }

});

var NavHeader = React.createClass({

    render: function() {
        return (
            <nav className="navbar navbar-inverse navbar-fixed-top">
              <div className="container-fluid">
                <div className="navbar-header">
                  <button type="button" className="navbar-toggle collapsed" 
                          data-toggle="collapse" 
                          data-target="#navbar" 
                          aria-expanded="false" 
                          aria-controls="navbar">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>
                  <a className="navbar-brand" href="#">Project name</a>
                </div>
                <div id="navbar" className="navbar-collapse collapse">
                  <ul className="nav navbar-nav navbar-right">
                    <li><a href="#">Dashboard</a></li>
                    <li><a href="#">Settings</a></li>
                    <li><a href="#">Profile</a></li>
                    <li><a href="#">Help</a></li>
                  </ul>
                  <form className="navbar-form navbar-right">
                    <input type="text" className="form-control" placeholder="Search..."/>
                  </form>
                </div>
              </div>
            </nav>
        );
    }

});

var QueryBoardContent = React.createClass({

    render: function() {
        return (
        <div className="container-fluid">
          <div className="row">
                <SideBar />
                <QueryBoard />
          </div>
        </div>
        );
    }

});

var SideBar = React.createClass({
    render: function() {
        return (
        <div className="col-sm-3 col-md-2 sidebar">
          <ul className="nav nav-sidebar">
            <li className="active">
                <a href="#">
                    Overview <span className="sr-only">(current)</span>
                </a>
            </li>
            <li><a href="#">Reports</a></li>
            <li><a href="#">Analytics</a></li>
            <li><a href="#">Export</a></li>
          </ul>
          <ul className="nav nav-sidebar">
            <li><a href="">Nav item</a></li>
            <li><a href="">Nav item again</a></li>
            <li><a href="">One more nav</a></li>
            <li><a href="">Another nav item</a></li>
            <li><a href="">More navigation</a></li>
          </ul>
          <ul className="nav nav-sidebar">
            <li><a href="">Nav item again</a></li>
            <li><a href="">One more nav</a></li>
            <li><a href="">Another nav item</a></li>
          </ul>
        </div>
        );
    }

});

var QueryBoard = React.createClass({

    render: function() {
        return (
          <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
              <ChartsPanel />
              <QueryBar />
              <SimpleResultTable />
          </div>
        );
    }

});


var ChartsPanel = React.createClass({

    render: function() {

          // 指定图表的配置项和数据
          var chartConfigs = {
              chartStyle: {width:"600px", height:"400px"},
              className:"img-responsive",//can delete if required
              title: {
                  text: 'ECharts 入门示例'
              },
              tooltip: {},
              legend: {
                  data:['销量']
              },
              xAxis: {
                  data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
              },
              yAxis: {},
              series: [{
                  name: '销量',
                  type: 'bar',
                  data: [5, 20, 36, 10, 10, 20]
              }]
          };

        return (
          <div>
          <h1 className="page-header">Dashboard</h1>
          <div className="row placeholders">
            <div className="col-xs-6 col-sm-3 placeholder">
              <react_echarts.ECharts {...chartConfigs} />
            </div>
            <div className="col-xs-6 col-sm-3 placeholder">
              <img src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" width="200" height="200" className="img-responsive" alt="Generic placeholder thumbnail"/>
              <h4>Label</h4>
              <span className="text-muted">Something else</span>
            </div>
            <div className="col-xs-6 col-sm-3 placeholder">
              <img src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" width="200" height="200" className="img-responsive" alt="Generic placeholder thumbnail"/>
              <h4>Label</h4>
              <span className="text-muted">Something else</span>
            </div>
            <div className="col-xs-6 col-sm-3 placeholder">
              <img src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" width="200" height="200" className="img-responsive" alt="Generic placeholder thumbnail"/>
              <h4>Label</h4>
              <span className="text-muted">Something else</span>
            </div>
          </div>
          </div>
        );
    }

});

var QueryBar = React.createClass({

    render: function() {
        return (
          <h2 className="sub-header">Section title</h2>
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
              <SimpleResultTableHead theads={['指标项','指标值','采集时间']} />
              <SimpleResultTableBody rowDatas={[
                  ['CPU','53.01%','2015-12-14 22:22:00'],
                  ['CPU','53.01%','2015-12-14 22:22:00'],
                  ['CPU','53.01%','2015-12-14 22:22:00'],
                  ['CPU','53.01%','2015-12-14 22:22:00'],
                  ['CPU','53.01%','2015-12-14 22:22:00'],
                  ['CPU','53.01%','2015-12-14 22:22:00'],
                  ['CPU','53.01%','2015-12-14 22:22:00'],
                  ['CPU','53.01%','2015-12-14 22:22:00'],
              ]} />
            </table>
          </div>

        );
    }

});

ReactDOM.render(
  <QueryBoardUI />,
  document.getElementById('content')
);


