const prompt = require("prompt-sync")({sigint:true});

let age = prompt(`enter your age=`);

if(isNaN(age)){
    console.log(`error`)
}
else if(age>= 18){
    console.log(`You are eligible for license`)
}
else if(age<18){
    console.log(`sorry you are not eligible for a license`);
}
else if (age< 0){
    console.log(`wrong input`)
}