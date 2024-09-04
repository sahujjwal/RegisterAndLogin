function validation() {
    var user =document.getElementById('username').value;
    var email =document.getElementById('email').value;
    var mobile =document.getElementById('mobile').value;
    var date =document.getElementById('date').value;
    var password =document.getElementById('password').value;
    var conpassword =document.getElementById('conpassword').value;
    document.getElementById('userVal').innerHTML='';
    document.getElementById('emailVal').innerHTML='';
    document.getElementById('mobileVal').innerHTML='';
    document.getElementById('dobVal').innerHTML='';
    document.getElementById('passVal').innerHTML='';
    document.getElementById('conpassVal').innerHTML='';

   
    if(user==""){
         document.getElementById('userVal').innerHTML="**please enter the name";
        
    }
    else if((user.length<=2 )|| (user.length>20))
    {
        document.getElementById('userVal').innerHTML="**username must be between 2 and less than 20";
        
    }
    else if(!isNaN(user)) {
        document.getElementById('userVal').innerHTML="**only characters are allowed";
    }
    else if(email==""){
        document.getElementById('emailVal').innerHTML="**please enter the Email";
        
    }
        else if((email.length<=2 )|| (email.length>20)){
        document.getElementById('emailVal').innerHTML="**email must be between 2 and less than 20";
    }
     else if(email.indexOf('@') <=0){
        document.getElementById('emailVal').innerHTML="**  @ is in invalid position ";
    }
    else if((email.charAt(email.length-4)!=".") &&  (email.charAt(email.length-3)!='.') ) {

        document.getElementById('emailVal').innerHTML="** . is in invalid position";

        }
        else if(mobile==""){
            document.getElementById('mobileVal').innerHTML="**please enter the phone number";
        
        }
        else if(isNaN(mobile)){
            document.getElementById('mobileVal').innerHTML="**only number are allowed not character";

        }
        else if(mobile.length!=10){
            document.getElementById('mobileVal').innerHTML="** mobile number must be of 10 digits";

        }
       else if(date==""){
            document.getElementById('dobVal').innerHTML="**please enter the date";
        }
       else if(password==""){
            document.getElementById('passVal').innerHTML="**please enter the password";
        }
        else if((password.length<=5 )|| (password.length>20)){
            document.getElementById('passVal').innerHTML="** password must be between 5 and 20";
        }
        else if(conpass==""){
            document.getElementById('conpassVal').innerHTML="**please enter the password";
        }
        else if(password!=conpassword){
            document.getElementById('conpassVal').innerHTML="** password are not matching";
        }
        else{
            return window.location.href='login.html';
        }
        
    }