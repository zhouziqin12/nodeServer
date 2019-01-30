var express = require('express');
var router = express.Router();
let mongodb = require('mongodb');//引入对象
let MongoClient = mongodb.MongoClient;//实例化客户端
const url = 'mongodb://127.0.0.1:27017';//连接地址
const dbName = 'test1809';//库名
router.get('/', function(req, res){
  console.log(req.query);
  MongoClient.connect(url, function(err, client) {
    const db = client.db(dbName);//连接库
    const vue = db.collection('vue');//连接表|集合
    vue.updateMany({password:req.query.oldpassword},{$set:{password:req.query.newpassword}},(err ,abc)=>{
      console.log(abc.modifiedCount)
      if(abc.modifiedCount==1){
        res.send({error:0})
      }else if(abc.modifiedCount==0){
        res.send({error:1})
      }
    })
  });
})
module.exports = router;
