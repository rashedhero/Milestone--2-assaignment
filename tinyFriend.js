
function tinyFriend(names){

    var min =names[0];

    for (i=0; i<names.length; i++){
  
        var currentFrnd=names[i];

        if (currentFrnd<min){

            min=currentFrnd;
        }

       
    }

    return min;
   
}

var names =(["rashed","minto","jahed","sohel"]);

var result=tinyFriend()

console.log(names.length);