var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/',function(req,res,next){
  req.query(' ');
  		//服务端通过req的body接收ajax的post数据
      var data = req.body;
      var userID = data.userID;
      var oldPassword = loginUser.password;
      //通过res的json方法向客户端发送一个 JSON 格式的响应
          res.json({status:'success'});
});

module.exports = router;
