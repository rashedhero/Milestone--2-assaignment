
function tinyFriend(names){

   var min=names[0];

    for (i=0; i<names.length; i++){
  
        var currentFrnd=names[i];

        if (currentFrnd<min){

            min=currentFrnd;
        }

       
    }

  
    return min;
}


var tinynames = tinyFriend(["rashed","minto","jahed","sohel"]);



console.log(tinynames);