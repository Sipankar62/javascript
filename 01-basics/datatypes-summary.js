 // Primitive 
 // 7 types : String.Number,Boolean,Null,Undefined,Symbol and BigInt


 const id = Symbol('754224');
 const anotherId = Symbol('754224');
 console.log(id == anotherId);




 // Reference (Non Primitive)

 // Array:-

 const heros = ["Iron Man","Hulk","Thor"];

  // Objects :-
let myObject = {
    name:"Sipankar",
    age:23,
}

  // Functions :-

  const myFunction = function(){
    console.log("Hello World");
    
  }
  console.log(typeof heros);         // return types are object
  console.log(typeof myFunction);   // any types of function return it's own function
  console.log(typeof id);          // it's return types are symbol
  console.log(typeof anotherId);  // it's return types are symbol 



  // *********************************************************************


  // Stack (Primitive), Heap (Non-Primitive)

  let myFirstname = "Sipankar"
  let anothername = "myFirstname"
  anothername = "Debnath"

  console.log(myFirstname);
  console.log(anothername);

  let student1 = {
    email: "sipankardebnath@gmail.com",
    phone :"6371691502"
  }
  let student2 = student1
  student2.email ="debnath855@gmail.com"
  console.log(student1)
  console.log(student2)
  