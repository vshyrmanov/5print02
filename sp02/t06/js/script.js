function showtypes(x1){
    let a1 = 12;
    let b1 = "Some text";
    let c1 = 243n;
    let d1 = true;
    let e1 = null;
    let f1;
    let g1 = {age:30};
    let h1 = Symbol();
    let j1 = function(){};
    x1 = typeof a1 + "\n" + 
        typeof b1 + "\n" + 
        typeof c1 + "\n" + 
        typeof d1 + "\n" + 
        typeof e1 + "\n" + 
        typeof f1 + "\n" + 
        typeof g1 + "\n" + 
        typeof h1 + "\n" + 
        typeof j1 + "\n";
    alert(x1);
    }
    
    showtypes();