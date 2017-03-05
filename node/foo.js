/**
 * Created by tina on 2017/3/2.
 */
var fs=require('fs'); //引入模块
var rf=function(path,callback){
   fs.access(path,(err)=>{
    if(err){
      callback(err);
    }
    fs.readFile(path,'utf8',(err,data)=>{
       callback(null,data);
    })
   });
}
//查看当前路径是否存在。

//异步读文件
// fs.readFile('./notfoo.js','utf8',(err,data)=>{
//   console.log(data);
// });
// //同步读文件
// var source=fs.readFileSync('./notfoo.js','utf8');
// var package='(function(exports,module){'+source+' return module.exports;})';
// console.log(package);


module.exports=rf;





