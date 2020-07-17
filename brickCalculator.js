

function brickCalculator(floor){

if (floor<=10){
  
    return 15*1000
}else if(floor<=20){

    return 12*1000
}else if (floor<=30){

    return 10*1000
}
  

}

var result=brickCalculator(20);

console.log(result);
