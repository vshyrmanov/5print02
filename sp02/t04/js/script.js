function solver(a,b,c,d,e){
    if ( !(Number(a) && Number(b) && Number (c) && Number(d) && Number (e))) {return "Wrong input"}
    return (a**2-5*b*c+d/3+e).toFixed(2)
}
alert(solver(40, -9, 0.5, 7, 100));