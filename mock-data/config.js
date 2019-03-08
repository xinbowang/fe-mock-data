module.exports = {
    publicPath: 'mock-data/public',
    routes: {
      getHelloData: {
        url: '/hello',
        method: 'get',
        callbackStatus: 404,
        json: 'mock-data/json/hello.json',
        paginationQueryConfig: {
          pageIndex: 'index',
          pageSize: 'size',
          startIndex: 1,
          listName: 'result.list'
        }
      },
      getHiData: {
        url: '/hi',
        method: 'get',
        callbackStatus: 200,
        json: 'mock-data/json/aaa.json',
        renderFn: function (dataRes, req, res, ext) {
          console.log(dataRes);
          res.send('hahha');
          // res.status(200).sendFile(ext.path.join(ext.path.resolve(''), 'mock-data/json/identify.png'));
        }
      },
      getWsData: {
        url: '/ws/hi',
        method: 'ws',
        interval: 3000,
        json: 'mock-data/json/aaa.json'
        // renderFn: function(dataRes, ws, req, ext) {
        //   console.log(dataRes);
        // }
      }
    }
  }