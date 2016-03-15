var React = require('react');
var echarts = require('echarts');

exports.ECharts = React.createClass({

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


