var container=document.getElementById("container");
var register=document.getElementById("register");
var inputEmail=document.getElementById("inputEmail");
var inputPassword=document.getElementById("inputPassword");

let arrayOfCart = [54,53,52];

const userClients=[];
let isExists;
register.onsubmit= (event)=>{
    debugger
     event.preventDefault();

     if(userClients == 0){
         userClients.push(inputEmail.value,inputPassword.value)
         console.log(userClients);
         alert("welcome to the family members");
     }
     else{
         for (let i = 0; i < userClients.length; i++) {
             if(inputEmail.value == userClients[i]){
                isExists = true;
             }
         }
         if(isExists != true){
            userClients.push(inputEmail.value,inputPassword.value);
            alert("welcome to the family members");
         }
         else{
             alert("you are already a member ")
         }
     }
 }
 

