var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
  console.log('news服务',req.headers.origin);
  // res.setHeader('Access-Control-Allow-Origin',req.headers.origin);//当前服务允许跨域
  //兜库-->mysql|mongodb  代理

  let data=[{
    "title":"习近平平abc：弘扬宪法精神推动宪法实施",
    "id":1,
    "detail":"新华社杭州12月4日电 在第3个国家宪法日到来之际，中共中央总书记、国家主席、中央军委主席习近平作出重要指示强调，宪法是国家的根本法，是治国安邦的总章程"
  },{
    "title":"习近平：弘扬宪法精神推动宪法实施",
    "id":2,
    "detail":"新华社杭州12月4日电 在第3个国家宪法日到来之际，中共中央总书记、国家主席、中央军委主席习近平作出重要指示强调，宪法是国家的根本法，是治国安邦的总章程"
  },{
    "title":"习近平：弘扬宪法精神推动宪法实施",
    "id":3,
    "detail":"新华社杭州12月4日电 在第3个国家宪法日到来之际，中共中央总书记、国家主席、中央军委主席习近平作出重要指示强调，宪法是国家的根本法，是治国安邦的总章程"
  }];
  // req.session.nikename='bmw2';//req.query.username
  res.send(data);

});

module.exports = router;
