	//引入数据库模块

	var mongoose = require("mongoose");

	//连接本地名为test的数据库，格式

	//var db = mongoose.connect("mongodb://user:pass@localhost:port/database");

	var db = mongoose.connect("mongodb://127.0.0.1:27017/test");

	//用Schema定义集合结构

	var TestSchema = new mongoose.Schema({

    	name : { type:String },

    	age  : { type:Number, default:0 },

    	email: { type:String },

    	time : { type:Date, default:Date.now }

	});

	//创建model,在内存中创建结构为TestSchema名为test1的集合

	var TestModel = db.model("test1", TestSchema );

	//插入数据到内存中的test1集合

	var TestEntity = new TestModel({

    	name : "helloworld",

    	age  : 28,

    	email: "helloworld@qq.com"	

	});

	//将test1写入到数据库中

	TestEntity.save(function(error,doc){

  	if(error){

     	console.log("error :" + error);

  	}else{

     	console.log(doc);

  	}

	});