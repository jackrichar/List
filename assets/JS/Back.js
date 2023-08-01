function Change(e)
{
    var Password = document.querySelector("#Pass");
    var Confirm_Password = document.querySelector("#Cpass");
    if(Password.type === 'password' && Confirm_Password.type === 'password')
    {
        Password.type = 'text'
        Confirm_Password.type = 'text';
        document.querySelector(".User-Password i").className = 'fa-solid fa-eye'
    }
    else if(Password.type === 'text' && Confirm_Password.type === 'text')
    {
        document.querySelector(".User-Password i").className = 'fa-solid fa-eye-slash'
        Password.type = 'password'
        Confirm_Password.type = 'password';
    }
    e.preventDefault();
}

function Check()
{
    var FirstName = document.querySelector("#Name");
    var LastName = document.querySelector("#Lname");
    var NationalCode = document.querySelector("#National");
    var PhoneNumber = document.querySelector("#Phone");
    var Password = document.querySelector("#Pass");
    var Confirm_Password = document.querySelector("#Cpass");

    if(Password.value !== Confirm_Password.value)
    {
        document.querySelector("#Pass").style.cssText = "border:2px solid red; animation:alert 0.5s";
        document.querySelector("#Cpass").style.cssText = "border:2px solid red; animation:alert 0.5s";
        document.querySelector("#Icon-Pass").style.cssText = "animation:alert 0.5s"
        setTimeout
        (
            ()=>
            {
                document.querySelector("#Pass").style.cssText = "border: 1px solid rgb(121, 118, 118);";
                document.querySelector("#Cpass").style.cssText = "border: 1px solid rgb(121, 118, 118);";
                document.querySelector("#Icon-Pass").style.cssText = ""
            }
            ,
            800
        )

    }


}