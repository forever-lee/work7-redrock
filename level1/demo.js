//call函数继承
function sayInfo(age){
    console.log('name:'+this.name)
    console.log('age:'+ age)
}    
var user = {
    name:'zzx'
}
sayInfo.call(user,100)
//模拟call函数
function func(a,b){
  console.log('name:'+a)
  console.log('age:'+b)
} 
let obj={name:'zx'} 
Function.prototype.myCall = function(newObj)  {
  
  let args =[];
  for(let i =1,len = arguments.length;i<len; i++){
    args.push(arguments[i]);

  }
  newObj = newObj||window;
  newObj.fn = this;
  newObj.fn(...args)//将数组转换为json参数序列，ES6
  
  delete newObj.fn;
  
}

func.myCall(obj,'zzx',100)
