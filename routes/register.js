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
    // console.log(req.query)
    vue.insertOne({username:req.query.userName ,password:req.query.passWord},(err ,abc)=>{
      console.log(res.insertedCount)
      if(abc.insertedCount==1){
        res.send({error:0})
      }else if(abc.insertedCount==0){
        res.send({error:1})
      }
    })

    // .toArray((err,data)=>{
    //   console.log(data)
    //   console.log(err)
    // })
    // ).toArray(
    //   (err,data)=>{
    //     console.log('find data',data);
        
    //     // res.send(data)
    //     // if(data.length > 0){
    //     //   // req.session.username=req.query.userName;//种  库里面用户的 ID
    //     //   // console.log(req.session);
    //     //   res.send({error:0,msg:'注册成功',data:res.data});
    //     // }else if(data.length == 0){
    //     //   res.send({error:1,msg:'注册失败',data:res.data});
    //     // }

    //     client.close();
    //   }
    // )
  });
})
module.exports = router;
