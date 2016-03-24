import React from 'react'
var gmonitorui = require('./gmonitorui')

export default React.createClass({

  render() {

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

    return (
      <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
          <div className="sub-header">
              Cluster管理
          </div>
          <gmonitorui.SimpleResultTable theads={tableHeads} 
                                        rowDatas={rowDatas} />
      </div>
    )
  }

})
