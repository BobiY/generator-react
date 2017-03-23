// mongoose 由于存在 Model 和  Entity 两种操作数据库的方法，所以在对数据库进行 CRUD 时，我们需要学习这两种方式是怎样才做的。

// 1. 从 Model 开始

// 添加 
// Model 的添加传入的添加对象必须是纯净的js对象
var obj = {
    name:"小明",
    age:50,
    sex:"man"
} 

Person.create(obj,callback);

//这样就完成了添加

//删除
//删除使用的是 remove 命令进行的
// option 是删除数据时的查询条件，如果想删除全部的数据，直接传入空对象即可

Person.remove(option,callback);

Person.remove({age:50},function(err,person){
    if(err){
        //数据删除出错的操作
    }else{
        // 数据成功删除的操作
    }
});

// mongoose 支持链式调用，所以你的查询条件可以是链式的

Person.remove({name:"小刚"})
      .where("age").gt(11).lt(55)
      .where('likes').in(['vaporizing', 'talking'])
      .exec(callback);

//上面的操作移除的就是 名字是小刚  年龄在 11~55 之间 爱好中有 'vaporizing' 和 'talking' 的人

//移除一般用不到这么多的查询条件，所以一般都是采用第一种方式进行数据的删除操作

// 查找

// 因为查找是用的最多的操作，而且修改使用的频率也很高，但是修改都意味着查找，这里先说查找

model.find({}, callback);
//查找文档中所有的数据

model.find({},field,callback);
//过滤查询,参数2: {‘name’:1, ‘age’:0} 查询文档的返回结果包含name , 不包含age.(_id默认是1)

model.find({},null,{limit:20});
//过滤查询,参数3: 游标操作 limit限制返回结果数量为20个,如不足20个则返回所有.

model.findOne({}, callback);
//查询找到的第一个文档

model.findOneAndRemove(option,callback);
//查询找到的第一个文档并且将其移除

model.findOneAndUpdate(option, UpdateOption ,callback);
//查询找到的第一个文档并且将其按照更新条件进行更新

model.findById('obj._id', callback);
//查询找到的第一个文档,同上. 但是只接受 __id 的值查询

model.findByIdAndRemove('obj._id',callback);
//查询找到的第一个文档并且将其移除

model.findByIdAndUpdate('obj._id', UpdateOption ,callback);
//查询找到的第一个文档并且将其按照更新条件进行更新

//查询使用时往往伴随着一些数据的筛选操作，因为我们不是每次的需要所有的数据

//更新操作符

// ‘$inc’ 增减修改器,只对数字有效.下面的实例: 找到 age=22的文档,修改文档的age值自增1

Model.update({'age':22}, {'$inc':{'age':1} }  );
// 执行后: age=23

// ‘$set’ 指定一个键的值,这个键不存在就创建它.可以是任何MondoDB支持的类型.

Model.update({'age':22}, {'$set':{'age':'haha'} }  );
// 执行后: age=‘haha’ 这个键不存在就创建它


// ‘$unset’ 同上取反,删除一个键

Model.update({'age':22}, {'$unset':{'age':'haha'} }  );
// 执行后: age键不存在


// 数组修改器:

// ‘$push’ 给一个键push一个数组成员,键不存在会创建

Model.update({'age':22}, {'$push':{'array':10} }  );
// 执行后: 增加一个 array 键,类型为数组, 有一个成员 10

// ‘$addToSet’ 向数组中添加一个元素,如果存在就不添加

Model.update({'age':22}, {'$addToSet':{'array':10} }  );
// 执行后: array中有10所以不会添加

// ‘$each’ 遍历数组, 和 $push 修改器配合可以插入多个值

Model.update({'age':22}, {'$push':{'array':{'$each': [1,2,3,4,5]}} }  );
// 执行后: array : [10,1,2,3,4,5]

// ‘$pop’ 向数组中尾部删除一个元素

Model.update({'age':22}, {'$pop':{'array':1} }  );
// 执行后: array : [10,1,2,3,4]  tips: 将1改成-1可以删除数组首部元素

// ‘$pull’ 向数组中删除指定元素

Model.update({'age':22}, {'$pull':{'array':10} }  );
// 执行后: array : [1,2,3,4]  匹配到array中的10后将其删除

// 条件查询:

// “$lt”	小于
// “$lte”	小于等于
// “$gt”	大于
// “$gte”	大于等于
// “$ne”	不等于
Model.find({'age':{ '$get':18 , '$lte':30 } } );
// 查询 age 大于等于18并小于等于30的文档


// 或查询 OR:

// ‘$in’ 一个键对应多个值
// ‘$nin’ 同上取反, 一个键不对应指定值
// “$or” 多个条件匹配, 可以嵌套 $in 使用
// “$not”	同上取反, 查询与特定模式不匹配的文档

Model.find({'age':{ '$in':[20,21,22,'haha']} } );
// 查询 age等于20或21或21或’haha’的文档

Model.find({"$or" :  [ {'age':18} , {'name':'xueyou'} ] });
// 查询 age等于18 或 name等于’xueyou’ 的文档



// 类型查询:

// null 能匹配自身和不存在的值, 想要匹配键的值 为null, 就要通过  “$exists” 条件判定键值已经存在
// "$exists" (表示是否存在的意思)

Model.find({'age': { '$in' : [null] , '$exists' : true  } } );
// 查询 age值为null的文档

Model.find({name: {$exists: true}},function(error,docs){
//  查询所有存在name属性的文档
});

Model.find({telephone: {$exists: false}},function(error,docs){
//   //查询所有不存在telephone属性的文档
});



// 正则表达式:

// MongoDb 使用 Prel兼容的正则表达式库来匹配正则表达式

model.find( {'name' : /joe/i } )	
// 查询name为 joe 的文档, 并忽略大小写

model.find( {'name' : /joe?/i } )
// 查询匹配各种大小写组合( 名字为 jo* 的人 )



// 查询数组:

   Model.find({'array':10} );
// 查询 array(数组类型)键中有10的文档,  array : [1,2,3,4,5,10]  会匹配到

   Model.find({'array[5]':10} );
// 查询 array(数组类型)键中下标5对应的值是10,  array : [1,2,3,4,5,10]  会匹配到

// ‘$all’ 匹配数组中多个元素

    Model.find({'array':[5,10]} );
// 查询 匹配array数组中 既有5又有10的文档

// ‘$size’ 匹配数组长度

    Model.find({'array':{"$size" : 3} } );
// 查询 匹配array数组长度为3 的文档

// ‘$slice’ 查询子集合返回

   Model.find({'array':{"$slice" : 10} } );
// 查询 匹配array数组的前10个元素

    Model.find({'array':{"$slice" : [5,10] } } );
// 查询 匹配array数组的第5个到第10个元素



// where

// 用它可以执行任意javacript语句作为查询的一部分,如果回调函数返回 true 文档就作为结果的一部分返回

	find( {"$where" : function(){
		for( var x in this ){
		 //这个函数中的 this 就是文档
		}
		
		if(this.x !== null && this.y !== null){
		    return this.x + this.y === 10 ? true : false;
		}else{
		    return true;
		}
		
		
    }  }  )

// 简化版本

	find( {"$where" :  "this.x + this.y === 10" } )
	find( {"$where" : " function(){ return this.x + this.y ===10; } " } )



// 游标:

   limit(3)	//限制返回结果的数量,
   skip(3)	//跳过前3个文档,返回其余的
   sort( {'username':1 , 'age':-1 } )	//排序 键对应文档的键名, 值代表排序方向, 1 升序, -1降序