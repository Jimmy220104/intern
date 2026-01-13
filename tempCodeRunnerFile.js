function turn(){
    let str = "a=1,b=2";
    
    let res = Object.fromEntries(
        str.split(",").map(pair => pair.split("="))
    );
    return res;

    
}
console.log(turn());