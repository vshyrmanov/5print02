function test1(a, str1, str2, str3){
    str1 = "You're catnip to girl like me. Handsome, dazed, and to die for ...";
    str2 = "\n\[Batman Resturns\] Batman: \"I tried to save you.\"";
    str3 = "\nSelina Kyle: catwoman\"Mmm seemsCatwomanlike everyCatWomanwoman you try to save windsCatWOMANup dead... or deeply resentful"
    a = "Just string: " + 
    "You're catnip to girl like me. Handsome, dazed, and to die for ...\n" + 
    "Length: " + str1.length + 
    "\nCharacter number 2 is: " + 
    str1.charAt(2) + "\nTo uppercase" + 
    str1.toUpperCase() + 
    "\nConcatenation in a phrase: " + 
    str1.concat(" - Catwoman") + 
    str2 + 
    str3.replace(new RegExp("catwoman"), "")
        .replace(new RegExp("Catwoman"), " ")
        .replace(new RegExp("CatWoman"), " ")
        .replace(new RegExp("CatWOMAN"), " ");
    
    alert(a);
    };
    test1();