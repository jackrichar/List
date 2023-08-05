const Form = document.getElementById("User");
const FirstName = document.getElementById("Fname");
const LastName = document.getElementById("Lname");
const Age = document.getElementById("Age");
const Grade = document.getElementById("Grade");
const Address = document.getElementById("Address");
const user_input = document.getElementById("User-input");
const Person_info_base = [];

Form.addEventListener('submit',e =>
{
    e.preventDefault();
    checkinput()
});

function insert()
{
    let ID = Person_info_base.length;

    const FirstNameValue = FirstName.value.trim();
    const LastNameValue = LastName.value.trim();
    const AgeValue = Age.value.trim();
    const GradeValue = Grade.value.trim();
    const AddressValue = Address.value.trim();

    let Isit = false
    Person_info_base.forEach((item,index)=>
        {
            if(item.FirstName === FirstNameValue && item.LastName === LastNameValue)
            {
                Isit = true;
            }
        }
    )
    const Person_info = {
        FirstName: FirstNameValue,
        LastName: LastNameValue,
        Age: AgeValue,
        Grade:GradeValue,
        Address: AddressValue,
        id:ID,
    }
    if(Isit === false)
    {
        Person_info_base.push(Person_info);
    }

    input_user();
    console.log(Person_info_base)
}

function checkinput()
{
    const FirstNameValue = FirstName.value.trim();
    const LastNameValue = LastName.value.trim();
    const AgeValue = Age.value.trim();
    const GradeValue = Grade.value.trim();
    const AddressValue = Address.value.trim();

    if(FirstNameValue === '')
    {
        document.getElementById("Fname").style.cssText="outline: 1px solid red;animation:move 0.5s";
        document.querySelector(".label-Fname").style.cssText="animation:move 0.5s"
        setTimeout
        (function()
        {
            document.getElementById("Fname").style.cssText="outline:none;animation:none";
            document.querySelector(".label-Fname").style.cssText="animation:none"

        }
        , 1000)
    }
    if(LastNameValue === '')
    {
        document.getElementById("Lname").style.cssText="outline: 1px solid red;animation:move 0.5s";
        document.querySelector(".label-Lname").style.cssText="animation:move 0.5s"
        setTimeout
        (function()
            {
                document.getElementById("Lname").style.cssText="outline:none;animation:none";
                document.querySelector(".label-Lname").style.cssText="animation:none"

            }
            , 1000)
    }
    if(AgeValue === '')
    {
        document.getElementById("Age").style.cssText="outline: 1px solid red;animation:move 0.5s";
        document.querySelector(".label-Age").style.cssText="animation:move 0.5s"
        setTimeout
        (function()
            {
                document.getElementById("Age").style.cssText="outline:none;animation:none";
                document.querySelector(".label-Age").style.cssText="animation:none"


            }
            , 1000)
    }
    if(GradeValue === '')
    {
        document.getElementById("Grade").style.cssText="outline: 1px solid red;animation:move 0.5s";
        document.querySelector(".label-Grade").style.cssText="animation:move 0.5s"
        setTimeout
        (function()
            {
                document.getElementById("Grade").style.cssText="outline:none;animation:none";
                document.querySelector(".label-Grade").style.cssText="animation:none"


            }
            , 1000)
    }
    if(AddressValue === '')
    {
        document.getElementById("Address").style.cssText="outline: 1px solid red;animation:move 0.5s";
        document.querySelector(".label-Address").style.cssText="animation:move 0.5s"
        setTimeout
        (function()
            {
                document.getElementById("Address").style.cssText="outline:none;animation:none";
                document.querySelector(".label-Address").style.cssText="animation:none"

            }
            , 1000)
    }
    else
    {
        insert()

    }


}

function input_user()
{
    Person_info_base.map((value,index,array)=>{
        user_input.innerHTML+=
            `        <tr>
           <td>${value.id}</td>
           <td>${value.FirstName}</td>
           <td>${value.LastName}</td>
           <td>${value.Age}</td>
           <td>${value.Grade}</td>
            <td>${value.Address}</td>
        </tr>`
    });
}
