const express = require('express');
const mongoose = require('mongoose');
const co = require("co");
const Promise = require("bluebird");
var fs = require("fs");
//方法Promise化
var readFileAsync = Promise.promisify(fs.readFile);
const db1 = mongoose.createConnection('mongodb://localhost/test');
const Schema = mongoose.Schema
var PersonSchema = new Schema({
    name:String,
    age:Number,
    sex:Schema.Types.Mixed
})

var Person = db1.model("Person",PersonSchema);
var files = ['1.txt','2.txt'];
// Promise.map(files,function(file){
//     return readFileAsync(file,'utf-8');
// }).then(function(content){
//     console.log("map:" + content) ;
// })


co(function* (){
    const  aa = yield Promise.props({flie1:readFileAsync('1.txt', 'utf-8'),file2:readFileAsync('2.txt', 'utf-8')}).then( obj => obj )
console.log(aa)
})




// function promise() {
//     return new Promise(function(reslove,reject){
        
//     })
// }

// function save(person) {
//      person.name = "我不是数据";
//      person.save(function(err,aa){
//          if(err){
//              console.log(err);
//          }else{
//              console.log("修改完毕")
//          }
//      });
// }

// function create(name) {
//     var person = new Person({
//         name:name,
//         sex:"nan",
//         age:18
//     });
//     person.save(function(err,aa){
//          if(err){
//              console.log(err);
//          }else{
//              console.log("新建完毕")
//          }
//      });
// }

// //bluebird.promisify(user.save, user)()
// //捕捉错误信息的问题，成功返回正确消息，错误则返回错误信息，这时候需要在函数里进行判断是否是需要的信息
// function* aa(name) {
//     const person = yield Person.findOne({name}).exec();
//     if(person){
//         const people = yield bluebird.promisify(save)(person);
//     }else{
//         yield bluebird.promisify(create)(name)
//     }
// };

// co(aa("我qq是数据"));

























// var obj = {
//     name:"小刚",
//     age:55,
//     sex:"man"
// }

// Person.findByIdAndRemove({_id:"58d32ed470a03e1cf810ae6f"},function(err,person){
//     if(err){
//         console.log(err);
//         return;
//     }else{
//         console.log("删除成功");
//     }
// })

// Person.findByIdAndUpdate("58d32ed470a03e1cf810ae6e",{'$addToSet':{'array':10} },function(err,proson){
//     if(err){
//         console.log(err);
//         return;
//     }else{
//         console.log("更新成功")
//     }
// })

// Person.findOneAndRemove({sex:"wemon"},function(err,express){
//     if(err){
//         console.log(err);
//         return;
//     }else{
//         console.log("移除成功")
//     }
// })


// for(var i = 0;i<10 ;i++){
//     var tom = Person({
//         name:"小明",
//         age:i*10
//     });
//     tom.sex = "man";
//     tom.save();
// }

// Person.remove({age:20}).exec(function(err,person){
//     if(err){
//         console.log(err)
//         return;
//     }else{
//         console.log('删除成功')
//     }

// })


