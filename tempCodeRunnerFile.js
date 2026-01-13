function flatten(){
    const obj = {
        a: { 
            b: 1
        }
    };
    const res = {};
    for(let key in obj){
        if(typeof obj[key] == "object" && obj[key] !== null){
            for(let innerKey in obj[key]){
                res[`${key}.${innerKey}`] = obj[key][innerKey]
            }
        }else{
                res[key] = obj[key];
            }
    }
    return res;
}
console.log(flatten());