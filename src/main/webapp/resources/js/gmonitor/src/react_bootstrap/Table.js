var React = require('react');
var ObjectUtils = require('../utils/ObjectUtils')

var Table = React.createClass({

    propTypes: {
      datas: React.PropTypes.array.isRequired,
      renderRow: React.PropTypes.func.isRequired,
      renderHeader: React.PropTypes.func,
      renderFooter: React.PropTypes.func,
    },        

    render: function() {
        var rows = [];

        this.props.datas.forEach(function(data,key){
            rows.push(this.props.renderRow(data,key));
        }.bind(this));

        var header = ObjectUtils.hasOwnProperty(this.props,'renderHeader')? this.props.renderHeader():null; 
        var footer = ObjectUtils.hasOwnProperty(this.props,'renderFooter')? this.props.renderFooter():null;

        return (
          <div className="table-responsive">
            <table className="table table-striped">
              {header}
              <tbody>
              {rows}
              </tbody>
              {footer}
            </table>
          </div>
        );
    }

});

module.exports = Table;
