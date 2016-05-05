import React from 'react';

var Modal = React.createClass({

    propTypes: {
      modalId:React.PropTypes.string.isRequired,
      renderHeader: React.PropTypes.func.isRequired,
      renderBody: React.PropTypes.func.isRequired,
      renderFooter: React.PropTypes.func.isRequired,
    },

    render: function() {
        return (
          <div className="modal fade" 
              id={this.props.modalId} 
              tabindex="-1" 
              role="dialog" 
              aria-labelledby="myModalLabel">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  {this.props.renderHeader()}
                </div>
                <div className="modal-body">
                  {this.props.renderBody()}
                </div>
                <div className="modal-footer">
                  {this.props.renderFooter()}
                </div>
              </div>
            </div>
          </div>
        );
    }

});

module.exports = Modal;

