let button_ya_faith = document.getElementById('btn');


button_ya_faith.addEventListener('click', function(){

    let faith = "This is a button owned by faith";
  
    alert(faith);

});

function executeFunctions(){


    let faith = "Hello faith, welcome to our tutorial";

    console.log(faith);



}


function add(num1, num2, callback){


    // let num1 = 1;
    // let num2 = 4;
    
    let result = num1+num2;//5

    console.log("Result is: "+result);

    if(result > 5){

        callback();

    }
 
    
}


function subtract(){
    ///

    alert("Subtract numbers");
 
}

//recursive function

function callYourself(value){

    if(value == 0){
        console.log("Finish");
    }else{
        console.log(value);

        callYourself(value-1);
    }

}

//scenario 1
// add(1,4);
// executeFunctions();


//scenario 2
//add(1,4, executeFunctions);

add(1,9, function(){

    //define
    console.log("another function")


});