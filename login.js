function validation()
{
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    document.getElementById('userPassVal').innerHTML='';
    if(username=="admin" && password=="password")
    {
        return window.location.href='todo.html';
    }
    else{
        document.getElementById('userPassVal').innerHTML="** Invalid Username/Password";
    }
}