const express = require('express');
const mongoose = require('mongoose');
const db1 = mongoose.createConnection('mongodb://localhost/test');
const Schema = mongoose.Schema
var PersonSchema = new Schema({
    name:String,
    age:Number,
    sex:Schema.Types.Mixed
})

var Person = db1.model("Person",PersonSchema);


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


