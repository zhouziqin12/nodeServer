var express = require('express');
var router = express.Router();
let mongodb = require('mongodb');//引入对象
let MongoClient = mongodb.MongoClient;//实例化客户端
const url = 'mongodb://127.0.0.1:27017';//连接地址
const dbName = 'test1809';//库名
router.get('/', function(req, res){
  console.log(req.query.userName);
  MongoClient.connect(url, function(err, client) {
    const db = client.db(dbName);//连接库
    const vue = db.collection('vue');//连接表|集合
    vue.find(
      {username:req.query.userName,password:req.query.passWord},
    ).toArray(
      (err,data)=>{
        console.log('find data',data);
        
        // res.send(data)
        if(data.length > 0){
          req.session.username=req.query.userName;//种  库里面用户的 ID
          console.log(req.session);
          res.send({error:0,msg:'成功',data:res.data});
        }else if(data.length == 0){
          res.send({error:1,msg:'没有账号',data:res.data});
        }

        client.close();
      }
    )
  });
})
module.exports = router;
