//   Dates

let myDate= new Date()
// console.log(myDate);   //  2024-09-01T15:03:45.069Z
// console.log(myDate.toString());  // Sun Sep 01 2024 15:03:45 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString()); // Sun Sep 01 2024// alphabatically written in current dates
// console.log(myDate.toISOString()); //   2024-09-01T15:03:45.069Z  // only written in Number for current dates
// console.log(myDate.toJSON());  //  2024-09-01T15:03:45.069Z //  only written in Number for current dates
// console.log(myDate.toLocaleDateString()); // 9/1/2024
// console.log(myDate.toLocaleString()); //  9/1/2024, 3:03:45 PM
// console.log(myDate.toString()); //  Sun Sep 01 2024 15:03:45 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toTimeString());  // 15:03:45 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toUTCString());  // Sun, 01 Sep 2024 15:03:45 GMT


// console.log(typeof myDate);

let myCreatedDate = new Date("01-14-2023");
// console.log(myCreatedDate.toLocaleString());


let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));


let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDate());

newDate.toLocaleString('default',{
    weekday:"long",

})
console.log(newDate);