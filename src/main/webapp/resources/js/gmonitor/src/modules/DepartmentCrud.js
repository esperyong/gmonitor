import React from 'react'
var gmonitorui = require('./gmonitorui')

export default React.createClass({

  render() {

    var tableHeads = ['部门名称','部门描述'];

    var rowDatas = [
                                  ['研发一部','研发一部'],
                                  ['研发二部','研发二部'],
                                  ['研发三部','研发三部'],
                    ];

    return (
      <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
          <div className="sub-header">
              部门管理
          </div>
          <gmonitorui.SimpleResultTable theads={tableHeads} 
                                        rowDatas={rowDatas} />
      </div>
    )
  }

})

