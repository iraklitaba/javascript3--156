"use strict"

// ფუნქციის საშულებით გამოიტანეთ ყველა რიცხვის ჯამი: არგუმენტად გადაეცით ეს მასივი:
// 10, 50, 6, 7, 8, 11, 6, 3, 9

let fncsum = function (numbers) {
    let numbersum = 0
    for (let item of numbers) {
        numbersum += item
               
    }
    console.log(numbersum);
}

 fncsum ([10, 50, 6, 7, 8, 11, 6, 3, 9])

//  .........................

//  let user = {
//     firstname: 'giorgi',
//     lastname: 'saakadze',
//     age: 32,
//     isloggedin: true
//   }
//   ფუნქციამ უნდა დააბრუნოს სახელი და გვარი ადგილის გამოტოვებით (მაგ: 
//   'giorgi saakadze') თუ isloggedin არის true და false თუ isloggedin ფროფერთი არის false;
  
let user = {
    firstname: 'giorgi',
    lastname: 'saakadze',
    age: 32,
    isloggedin: true
  }
   function FirstLast() {
    if (user.isloggedin == true) {
        let saxeligvari = `${user.firstname} ${user.lastname}` 
        return saxeligvari
        
    }
      
   }
    console.log(FirstLast ());
// ................................

    // შექმენით ფუნქცია რომელსაც გადაეცემა ერთი პარამეტრი. ეს პარამეტრი უნდა იყოს რიცხვების მასივი და ფუნქციამ უნდა დააბრუნოს ამ რიცხვებიდან მაქსიმალური

    // ვერ  გავიგე  მესამე ამოცანა 
// .................

    // დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიიღებს ერთ რიცხვს და გამოთვლის
    // გადაცემული მნიშვნელობა კენტია თუ ლუწი; თუ ლუწია დააბრუნოს - this number is
    // even‘; თუ კენტია დააბრუნოს - this number is odd

 function oddeven (numbers) {
    if (numbers % 2 === 0) {
        return "this number is even"
        
    }
    return "this number is odd"
    
 }
 let returnnumber = oddeven(11)
 console.log(returnnumber);

//  .................
// // მოცემულია მასივი:
// let array = [1,2,3,4,5]; 
// for ციკლის საშუალებით მიიღეთ reverse ვერისია, ანუ 5,4,3,2,1

let array = [1,2,3,4,5];
console.log(array.reverse ());

let array1 = [1,2,3,4,5];

//  for ციკლით  ვერ ვიპოვე ვერსად :))))

// ................................................

// ფუნქციის საშუალებით გამოთვალეთ იუსერის ასაკი ( არგუმენტად გადაეცით 
//     ნებისმიერი რიცხვი) და დაამატეთ შემდეგი პირობა, თუ გადაცემული 
//     ასაკი მეტია 18- ზე დააბრუნეთ - სრულლოვანი, თუ ნაკელებია  
//     დააბრუნეთ არასწულწლოვანი. 
// ეს ამოცანა დაწერეთ arrow function-ით და if ის პირობა ჩაწერეთ 
// ახალი სინტაქსით;

let userage1 = (birthyear,yearnow) => {
     
    let age = yearnow - birthyear
    let userage = age >18 ? "სრულწლოვანი" : "არასრულწლოვანი"
    console.log(age);
    return userage

}
let result = userage1(2020,2023)
console.log(result);

