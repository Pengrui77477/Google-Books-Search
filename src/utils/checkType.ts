export const checkType = (arg:any)=>{
    let res = Object.prototype.toString.call(arg);
    let str = res.split(' ')[1]
    return  str.slice(0,str.length-1)
}