/**
 * Created by tina on 2017/3/2.
 */
// function NyRequire(path) {
//     function  Module() {
//         this.exports={};
//     }
//     var fs=require('fs');
//     //同步读文件
//     var source=fs.readFileSync(path);
//     //拼接代码变成一个函数的string;
//     var package='(function(exports,module){ '+source+' return module.exports;' +' })';
//
//     var packobj=eval(package);
//
//     //用构造函数创建module
//     var module=new Module();
//
//     var obj=packobj(module.exports,module);
//     return obj;
// }
//
// var adder=NyRequire('./notfoo.js');
// // console.log(add);



var post=require('http-poster');
post.get('http://www.baidu.com',function(err,res,data){
 console.log(data);
});
