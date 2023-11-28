function showHidePass(str){
    let input, eye;
    if (str === 'password'){
        input = document.querySelector("#password");
        eye = document.querySelector("#eye-pass");
    }
    else
    {
        input = document.querySelector("#confirmPass");
        eye = document.querySelector("#eye-con");
    }
    if(input.type === "password"){
        input.type = "text";
        eye.classList.remove('fa-eye');
        eye.classList.add('fa-eye-slash');
    }
    else{
        input.type = "password";
        eye.classList.remove('fa-eye-slash');
        eye.classList.add('fa-eye');
    }
}