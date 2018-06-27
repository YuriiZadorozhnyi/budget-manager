const bodyParser = require('body-parser');

module.exports = (app) => {

  // custom middleware example 
  // const processController = (req, res, next) => {
  //   if(req) {
  //     console.log(req.body)
  //     console.log('Sign In request received !!!');
  //     next();
  //   } else if (res) {
  //     console.log('Sign In response send !!!');
  //     next();
  //   }
  // }

  // custom middleware example 
  // app.use(function( req, res, next ) {
  //   var data = '';
  //   req.on('data', function( chunk ) {
  //     data += chunk;
  //   });
  //   req.on('end', function() {
  //     // req.rawBody = data;
  //     console.log( 'on end: ', data )
  //     // if (data && data.indexOf('{') > -1 ) {
  //     //   req.body = JSON.parse(data);
  //     // }
  //     next();
  //   });
  // });

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  // app.use(processController);
  app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Expose-Headers", "*");
    next();
  });

}
