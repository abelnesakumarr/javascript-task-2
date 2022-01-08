//Program to remove duplicates (repeated) from an array

/*let arr = [1,33,33,44,1,55,67,88,97,00,88];

function removeDuplicates(data){
    return data.filter((value,index)=>data.indexOf(value)==index);
}
console.log(removeDuplicates(arr))*/


//Write a javascript program to display the current day and time

// setInterval(currentDateTime,1000);

// function currentDateTime(){
//     let a = new Date();
//     let date = a.toDateString();
//     let time = a.toLocaleTimeString()
//     console.log("Today Date is : "+date+ " and Now Time is : " + time)
//     return date,time 
// }
// currentDateTime()

//Write a javascript program to calculate multiplication and divison to two numbers 


/*function division(a,b){
    let quotent = a / b;
    let remainder = a % b;
    console.log("Quotent : " + quotent);
    console.log("Remainder : " + remainder);
    return quotent,remainder
}

division(1,5)


function multiplication(...a){
    let result = a[0];
    console.log("Result : " + result);
    return result
}

multiplication(10*6);*/


//Write a Javascript program to get the website URL (loading Page)



//write a javscript program to get the difference between a given number
//and 13, if the number is greater than 13 return double the absolute difference

/*function difference(n){
    if(n<=13){
        console.log(13-n)
        return 
    }
    else{
        console.log((n -13) *2);
        return 
    }
}
difference(14)*/


//write a javascript program to compute the sum of the two given integers.
//If the two values are same, then returns triple their sum.


/*function sum(a,b){
    let result =0;
    if(a==b){
        result +=(a+b)*3;
        console.log(result)
    }
    else{
        result+= a+b;
        console.log("Result is : " + result)
    }
};
sum(10,10)*/

//compare two arrays and form a third array with value which are same in the two arrays

/*function getCommon(arr1, arr2) {
    var common = [];                   
    for(var i=0 ; i<arr1.length ; ++i) {
      for(var j=0 ; j<arr2.length ; ++j) {
        if(arr1[i] == arr2[j]) {      
          common.push(arr1[i]);       
        }
      }
    }
    console.log(common)
    return common;                     
  }

  getCommon([1,22,33],[1,44,22])*/

//   Form an array with number which are divisible by 6 not by 9 from 1 t0 150
/*let arr = []
for(let i =1; i<=150; i++){
    if(i%6==0 && i%9==0){
        continue
    }
    else{
        arr.push(i)
    }
}  
console.log("Divisible by 6 noy by 9 : " + arr)*/


//write a javascript program to remove a character at the specified
//position of a given string and return the new string


/*let dummy = "My favourite game is Cricket";

function replace(a){
    let result = dummy.replace("Cricket",a);
    console.log(result);
    return result
}
console.log(dummy)
replace("Football");*/


// Write a javascript program to create a new string from a given string changing the position first and last 
//characters. The String length must be greater than or equal to 1.

/*function first_last(str1) 
  {
  if (str1.length <= 1)
  {
    return str1;
  }
  mid_char = str1.substring(1, str1.length - 1);
  return (str1.charAt(str1.length - 1)) + mid_char + str1.charAt(0);
}
console.log(first_last('a'));
console.log(first_last('ab'));
console.log(first_last('abc'));*/


// let num = [10,10,10,10,10,10,50];
// let n = 0;
// let name = ["abel","praveen","balamurugan",""]
// let details = num.map()

// let detail = [{name:"abel",age:20,place:"Coimbatore"},{name:"bala",age:23,place:"Coimbatore"},{name:"praveen",age:20,place:"Coimbatore"},{name:"selva",age:22,place:"Coimbatore"},{name:"karthi",age:22,place:"Coimbatore"},{name:"subash",age:23,place:"Coimbatore"}];


// let fetch  = detail.map((name)=>{
//     return name.age
// })
// console.log(fetch);
// let name = []
// let filter = detail.filter((adult)=>{
//     if(adult.age<22){
//         name.push(adult.name)
//         return adult
//     }
 
// })

// console.log(filter);
// console.log(name);

// let n = [100,100,22]

// let cart  = n.reduce((total,sum)=>{
//     return sum +total
// })
// console.log(cart)

// let y = "abe";
// let result = y.charAt(y.length-1)
// console.log(result)


// function recursive(number){
//     console.log(number)
//     let newNumber = number-1;
//     if(newNumber>0){
//         recursive(newNumber)
//     }
// }
// recursive(4)

// window.onload = function () {
  
//     var seconds = 00; 
//     var tens = 00; 
//     var appendTens = document.getElementById("tens")
//     var appendSeconds = document.getElementById("seconds")
//     var buttonStart = document.getElementById('button-start');
//     var buttonStop = document.getElementById('button-stop');
//     var buttonReset = document.getElementById('button-reset');
//     var Interval ;
  
//     buttonStart.onclick = function() {
      
//        clearInterval(Interval);
//        Interval = setInterval(startTimer, 100);
//     }
    
//       buttonStop.onclick = function() {
//          clearInterval(Interval);
//     }
    
  
//     buttonReset.onclick = function() {
//        clearInterval(Interval);
//       tens = "00";
//         seconds = "00";
//       appendTens.innerHTML = tens;
//         appendSeconds.innerHTML = seconds;
//     }
    
     
    
//     function startTimer () {
//       tens++; 
      
//       if(tens <= 9){
//         appendTens.innerHTML = "0" + tens;
//       }
      
//       if (tens > 9){
//         appendTens.innerHTML = tens;
        
//       } 
      
//       if (tens > 99) {
//         console.log("seconds");
//         seconds++;
//         appendSeconds.innerHTML = "0" + seconds;
//         tens = 0;
//         appendTens.innerHTML = "0" + 0;
//       }
      
//       if (seconds > 9){
//         appendSeconds.innerHTML = seconds;
//       }
    
//     }
    
  
//   }