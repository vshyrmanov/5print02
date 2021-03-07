var choiceName = prompt('What a name?');
var choiceGender = prompt('What a gender');
var choiceAge = prompt ('What an age?');
var answer;
var answer2;
var answer3;

if (choiceName.length <= 20 && choiceName == String){answer = choiceName} 
else (alert("wrong ipnut!")) 
if (choiceGender == "male" && choiceAge <= 18 && choiceAge.length <= 5){answer2 = '-boy'} 
else if (choiceGender == "male" && choiceAge >= 18 && choiceAge.length <= 5){answer2 = '-man'}
else if (choiceGender == "female" && choiceAge <= 18 && choiceAge.length <= 5){answer2 = '-girl'}
else if (choiceGender == "female" && choiceAge >= 18 && choiceAge.length <= 5){answer2 = '-woman'}
else if (choiceGender == "" && choiceAge <= 18 && choiceAge.length <= 5){answer2 = '-kid'}
else if (choiceGender == "" && choiceAge >= 18 && choiceAge.length <= 5){answer2 = '-hero'}

else (alert("wrong ipnut!")) 

alert("The superhero name is: " + answer + answer2 +"!");