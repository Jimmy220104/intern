// Count how many keys are in an object.
// const obj = {
//     firstName: "Jimmy",
//     lastName: "Mahajan",
//     age: 21,
    
// };

// let res = Object.keys(obj);
// console.log(res.length);



// Change all values in an object to uppercase.
// const obj = {
//     firstName: "Jimmy",
//     lastName: "Mahajan",
//     country: "India",
// };

// function capital(){
//     let res = "";
//     for(let y in obj){
//         res += obj[y] + " ";
//     }
//     return res;
// }
// console.log(capital());

 

// Swap keys and values in an object.
// const obj = {
//     firstName: "Jimmy",
//     lastName: "Mahajan",
//     country: "India",
// };

// function swap(){
//     let res = {};

//     for(let keys in obj){
//         res[obj[keys]] = keys;
        
//     }
//     return res;
// }
// console.log(swap());



// 1. Merge two objects into one (new object).
// const obj = {
//     firstName: "Jimmy",
//     lastName: "Mahajan",
//     country: "India",
// };

// const obj2 = {
//     age : 21,
//     city: "Ankleshwar",
// };

// let res = {...obj, ...obj2};
// console.log(res);



// 2. Find the key that has a certain value.
// const obj = {
//     firstName: "Jimmy",
//     lastName: "Mahajan",
//     country: "India",
// };

// function key(val){
// for(let x in obj ){
//     if(obj[x] == val){
//         return x;
//     }

// }
// }
// console.log(key("Jimmy"));



//3. Check if an object has no keys.
// function isCheck(){
//     const obj = {};
//     const obj2 = {
//         firstName: "Jimmy",
//     }
//     if(Object.keys(obj2).length === 0){
//         return true;
//     }else{
//         return false;
//     }
// }
// console.log(isCheck());



// 4. Add all the numbers in an object’s values.
// function sum(){
//     const obj = {
//         a: 10,
//         b: 20, 
//         c: 30,
//     };

//     let sum = 0;
//     for(let value in obj){
//         sum += obj[value];
//     }
//     return sum;
// }
// console.log(sum());



//5. Delete all keys where the value is null or undefined.
// function del(){
    // const obj = {
    //     fName: "Jimmy",
    //     lName: "Mahajan",
    //     age: null,
        
//     };
//     let res = {};
//     for(let key in obj){
//         if(obj[key] == null || obj[key] == undefined ){
//              delete obj[key];
             
//         }
//     }
//     return obj;
// }
// console.log(del());



//6. Get a nested value from an object like obj.user.name.first.

// function val(){
//         const obj = {
//         fName: "Jimmy",
//         lName: "Mahajan",
//         age: 21,
//         car: {
//             hyundai: "Venue",
//             suzuki: "Vitara",
//             mahindra: "Xuv",
//         },
// };
//  return obj.car.hyundai;
// }
// console.log(val());




// 7. Change a nested value inside an object.
// function changeVal(){
//         const obj = {
//         fName: "Jimmy",
//         lName: "Mahajan",
//         age: 21,
//         car: {
//             hyundai: "Venue",
//             suzuki: "Vitara",
//             mahindra: "Xuv",
//         },
// };
//   obj.car.hyundai = "creta";
//   return obj;
// }
// console.log(changeVal());



// 8. Find the length of an array that’s inside an object like obj.friends.
// function lengthArr(){
//     const obj = {
//         fName: "Jimmy",
//         lName: "Mahajan",
//         friends: ["Vraj", "Bhago", "Nisu", "Dev"],

//     };
//     return obj.friends.length;
// }
// console.log(lengthArr());



// 9. Add a value to an array that’s inside an object.
// function addArr(){
    // const obj = {
    //     fName: "Jimmy",
    //     lName: "Mahajan",
    //     friends: ["Vraj", "Bhago", "Nisu", "Dev"],

    // };
//      obj.friends.push("Pal");
//      return obj;
// }
// console.log(addArr());



//10. Rename some keys in an object using a mapping.
function rename(){
        const obj = {
        fName: "Jimmy",
        lName: "Mahajan",
        friends: ["Vraj", "Bhago", "Nisu", "Dev"],

    };
    const mapp = {
        fName : "firstName",
        lName : "lastName",
    }
    return Object.fromEntries(
        Object.entries(obj).map(([key, value]) => 
        [mapp[key] || key, value]));
}
console.log(rename());



// 11. Turn "a=1,b=2" into an object like { a: "1", b: "2" }.
function turn(){
    let str = "a=1,b=2";
    
    let res = Object.fromEntries(
        str.split(",").map(pair => pair.split("="))
    );
    return res;

    
}
console.log(turn());



// 12. Flatten one level of a nested object (e.g. { a: { b: 1 } } → { 'a.b': 1 }).
function flatten(){
    const obj = {
        a: { 
            b: 1
        }
    };
    

}