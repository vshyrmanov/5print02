function test2 () {
let test1 = Number;
test1 = prompt('Chose a number from 1 to 10')
switch (test1) {
    case "1":
        alert ("Back to square 1");
        break;
    case "2":
        alert ("Goody 2-shoes");
    case "3":  case "6":    
        alert ("Two's company, three's a crowd");
        break;    
    case "4": case "9":    
        alert ("Counting sheep");
        break; 
    case "5":
        alert("Take five");
        break;
    case "7":
        alert("Seventh heaven");
        break;
    case "8":
        alert("Behind the eight-ball");
        break;
    case "10":
        alert("Cheaper by the dozen");
        break;
    default:
            alert("Hey, it's must be a number from 1 to 10, wake up!!!");
            test2()
            
            
}
}
test2()