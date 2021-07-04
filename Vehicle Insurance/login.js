function validate() {
    let msg;
    if(document.myForm.userPass.value.length>5 && document.myForm.userPass.value.length<8){
        msg="good";
    }
    else if(document.myForm.userPass.value.length>8){
        msg="strong";
    }

    else{
        msg="weak";
    }
    document.getElementById('mylocation').innerText=msg;
}

function validateemail()
{
    let x=document.myForm.eml.value;
    let atposition=x.indexOf("@");
    let dotposition=x.lastIndexOf(".");
    if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){
        alert("Please enter a valid e-mail address");
        return false;
    }
}

function matchpass(){
    let firstpassword=document.myForm.userPass.value;
    let secondpassword=document.myForm.Pass.value;

    if(firstpassword==secondpassword){
        return true;
    }
    else{
        alert("password must be same!");
        return false;
    }
}