let test1 = prompt("First number");
let test2 = prompt("Last number");
test1 = parseInt(test1)
if (test1 <= 0 || test2 > 100){alert("Wrong input")} else {test3()}
function test3(){
for (let x = test1; x <= test2 ; x++) { 


if ((x%2==0) && !(x%10==0)) {
 console.log(x + " is even")}
else if ((x%3==0) && !(x%10==0)) {
  console.log(x + " is multiple of 3")
}
else if ((x%2==0) && (x%3==0) && (x%10==0)){
  console.log (x + " is even, a multiple of 3 a multiple of 10")  
}  
else if (x%10==0) {
  console.log (x + " is a multiple of 10")
}
  

else (console.log(x+" -"))
 
}}