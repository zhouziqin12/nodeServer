var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
  console.log('article服务',req.query.id);
  //兜库-->mysql|mongodb  用 req.query.id
  let row={
    "title":"习近平1：弘扬宪法精神推动宪法实施",
    "author_face":"https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png",
    "time":"1508925210931",
    "content":"<p>推进职业教育现代化座谈会12月2日在京召开。中共中央政治局常委、国务院总理李克强作出重要批示。批示指出：加快发展现代职业教育</p><p>推进职业教育现代化座谈会12月2日在京召开。中共中央政治局常委、国务院总理李克强作出重要批示。批示指出：加快发展现代职业教育</p>"
  };
  // req.session.nikename='bmw2';//req.query.username
  res.send(row);
});

module.exports = router;
