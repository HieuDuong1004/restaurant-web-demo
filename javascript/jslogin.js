var attempt = 2000; // so lan nhap thu
function validate(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if ( username == "admin" && password == "admin"){
        alert ("Đăng nhập thành công");
        window.location = "index.html"; // dien ten link tab ra 
        return false;
    }
    else
        if(username == "" && password == ""){
            alert ("Nhập tài khoản và mật khẩu");
        }
    else{
        attempt --;
        alert("Sai mật khẩu hoặc tài khoản");
        if( attempt == 0){
        document.getElementById("username").disabled = true;
        document.getElementById("password").disabled = true;
        document.getElementById("submit").disabled = true;
        return false;
        }
    }
}