let mongodb = require('mongodb');//引入对象
let MongoClient = mongodb.MongoClient;//实例化客户端

const url = 'mongodb://127.0.0.1:27017';//连接地址
const dbName = 'test1809';//库名

MongoClient.connect(url, function(err, client) {
  //err 连接失败 集合
  //client 连接

  const db = client.db(dbName);//连接库

  const user = db.collection('user');//连接表|集合

  // user.insertOne({aa:1,bb:2},(err,res)=>{ //插入一条
  // user.insertMany([{aa:1},{bb:2}],(err,res)=>{//插入多条
  // user.deleteOne({aa:1},(err,res)=>{//删除一条
  // user.deleteMany({aa:1},(err,res)=>{//删除多条
  // user.updateOne({username:/^h/},{$set:{username:'呵呵'}},(err,res)=>{//更新一条
  // user.updateMany({username:"ppp"},{$set:{username:'皮皮皮'}},(err,res)=>{//更新多条
 
  /* user.updateMany(
    {username:"皮皮皮"},
    {$set:{username:'ppp'}},
    {
      // upsert:true,//找不到，要求插入
      projection:true,//全局替换
    },
    (err,res)=>{//更新多条
    //业务
    if(err){
      console.log('err',err)
    }else{
      console.log('res',res.result)
    }
    client.close();//关闭连接

  }) */

  //查询
  /* user.find(
    {username:'ppp'},
    // {配置},
    (err,res)=>{//更新多条
      //res 库返回的一个集合
      res.toArray((err,data)=>{//转换到数组  toArray方法，是异步的
        console.log('find data',data)
      })

    })

  }) */

  user.find(
    {username:'ppp'}
  ).toArray(
    (err,data)=>{
      console.log('find data',data);
      client.close();
    }
  )

});