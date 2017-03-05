/**
 * Created by tina on 2017/3/2.
 */
var add=function(v1,v2){
    console.log(__dirname);
    return v1+v2;
}


// module.exports=add;  //返回的是一个func
exports.add=add;      //返回的是一个对象