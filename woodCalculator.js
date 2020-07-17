
function woodCalculator(chair,table,bed){

var chairCount=chair*1 ;
var tableCount=table*4 ;
var bedCount =bed*5 ;

var totalWood=chairCount+tableCount+bedCount;

return totalWood;

}

var woodresult=woodCalculator(1,1,1)

console.log(woodresult);