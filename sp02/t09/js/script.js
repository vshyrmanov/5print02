function heroes() {
    var test1 = prompt("What's team?\n Avengers\n Shield\n Justice League of America\n Teen Titans")
    var test2 = prompt("What's universe?\n Marvel\n DC Comics")
    var test3 = prompt("What's race?\n human\n kryptonian")
    var test4 = prompt("What's eyeColor?\n green\n blue")
    var test5 = prompt("What's hairColor?\n lightBrown\n green\n black")
    if 
        (test1 == "Avengers" || 
        test1 == "Shield" && 
        test2 == "Marvel" && 
        test3 == "human" && 
        test4 == "green" && 
        test5 == "lightBrown" || 
        test5 == "green") 
        {alert("This is Black Widow")} 
    else if 
        (test1 == "Teen Titans" || 
        test1 == "Justice League of America" && 
        test2 == "DC Comics" && 
        test3 == "human" || 
        test3 == "kryptonian" && 
        test4 == "blue" && 
        test5 == "black") 
        {alert("This is a Superman or Robin!")}
     else 
        {alert("Didn't recognize!")}}
    heroes()