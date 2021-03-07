
var text = " ";
var num = prompt("Chose the humber for multiplication table by Do/while" );
var i = 1;

do {
    text += "\nResult of multiply " + num + " x " + (i) + " is: " + (num*i);
    i++;
}
while (i<=10);
alert("Multiplication table for " + num + text)


var text2 = " ";
var num2 = prompt("Chose the humber for multiplication table by While" );
var ii = 1;
while (ii<=10){
    text2 += "\nResult of multiply " + num2 + " x " + (ii) + " is: " + (num2*ii);
    ii++;
}

alert("Multiplication table for " + num2 + text2)

