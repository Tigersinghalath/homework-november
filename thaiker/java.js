var attempt = 3; 
function loginhub(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;

//admin
if ( username == "admin" && password == "12345"){
alert ("Login successfully");
window.location = "admin.html"; // Redirecting to other page.
return false;
}
else{
if( attempt == 0){
document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("loginsubmit").disabled = true;
return false;
}
}
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;


//user
if ( username == "user" && password == "12345"){
alert ("Login successfully");
window.location = "client.html"; // Redirecting to other page.
return false;
}
else{
if( attempt == 0){
document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("loginsubmit").disabled = true;
return false;
}
}


//error
if ( username == "" && password == ""){
    window.location = "error_page.html"; // Redirecting to other page.
    return false;
    }
    else{
    if( attempt == 0){
    document.getElementById("username").disabled = false;
    document.getElementById("password").disabled = false;
    document.getElementById("loginsubmit").disabled = false;
    return false;
    }
    }
   
    
//incorrect 
if ( username == "" && password == ""){
    return false;
    }
    else{
    alert("Your username or password is incorrect");
    if( attempt == 0){
    document.getElementById("username").disabled = true;
    document.getElementById("password").disabled = false;
    document.getElementById("loginsubmit").disabled = false;
    return false;
    }
    }
        

}