// 1. Create a JavaScript program that displays:
//    Today’s full date and time using toString()
//    Just the date using toDateString()
//    Just the time using toTimeString()
// let date = new Date().toString();
// console.log(date);
// let date1 = new Date().toDateString();
// console.log(date1);
// let time = new Date().toTimeString();
// console.log(time);



// 2 input 2025-06-12T10.30.25
//   output 12 june, 2025 10.30 

// let date = "2025-06-12T10.30.25";
// let input = date.replace("T" , " ").replaceAll(".", ":");
// let month = ["January", "february", "March", "April", "May", "June", "July", 
//             "August", "September", "October", "November", "December"];

// let date1 = new Date(input);
// let day = date1.getDate();
// let month1 = month[date1.getMonth()];
// let year = date1.getFullYear();
// let hour = date1.getHours();
// let minutes = date1.getMinutes();
// let amPm = hour >= 12 ? "PM" : "AM";

// console.log(`${day} ${month1} ${year} ${hour}:${minutes} ${amPm}`);



// 4 input Today: 12 June 2025
//   output 1 : 7 days from now: 19 June 2025

// let input = new Date("June 12, 2025")
// let month = ["January", "february", "March", "April", "May", "June", "July", 
//             "August", "September", "October", "November", "December"];

//  let date = input.setDate(input.getDate() + 7);
//  let date1 = input.getDate();
//  let month1 = month[input.getMonth()];
//  let year = input.getFullYear();

//  console.log(`7 days after: ${date1} ${month1} ${year}`);
// ------------------------------------------------------------------------------------------------------------------------------
//   output 2 : 30 days ago: 13 May 2025

// let input = new Date("June 12, 2025")
// let month = ["January", "february", "March", "April", "May", "June", "July", 
//             "August", "September", "October", "November", "December"];

//  let date = input.setDate(input.getDate() - 30);
//  let date1 = input.getDate();
//  let month1 = month[input.getMonth()];
//  let year = input.getFullYear();
 
//  console.log(`30 days before: ${date1} ${month1} ${year}`);



// 5 Convert UTC Time to IST and AUS
//   input = "2025-06-12T10:30:25Z"; 
//   output 1 : "12 June, 2025, 4:00 PM" (IST)
//   output 2 : "12 June, 2025, 8:00 PM" (AUS)

    let date = "2025-06-12T10:30:25Z"; 
    let month = ["January", "february", "March", "April", "May", "June", "July", 
                "August", "September", "October", "November", "December"];

    let date1 = new Date(date);

function time(date1){
    let day = date1.getDate();
    let month1 = month[date1.getMonth()];
    let year = date1.getFullYear();
    let hour = date1.getHours();
    let minutes = date1.getMinutes();
    let amPm = hour >= 12 ? "PM" : "AM";

    return `${day} ${month1} ${year} ${hour}:${minutes} ${amPm}`;
}
// output: 1
    let ind = new Date(date1);
    
// output: 2
    let aus = new Date(date1);
    aus.setHours(aus.getHours() + 4);
    aus.setMinutes(aus.getMinutes() + 30);

console.log(time(ind));
console.log(time(aus));











