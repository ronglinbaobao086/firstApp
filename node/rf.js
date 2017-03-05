/**
 * Created by tina on 2017/3/2.
 */
var rf=require('./foo.js');
rf('./package.json',(err,data)=>{
    console.log(data);
});