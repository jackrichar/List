const Form = document.getElementById("User");
const FirstName = document.getElementById("Fname");
const LastName = document.getElementById("Lname");
const Age = document.getElementById("Age");
const Grade = document.getElementById("Grade");
const Address = document.getElementById("Address");
let Person_info_base = [];
Form.addEventListener('submit',e =>
{
    e.preventDefault();
    checkinput()
});

function insert()
{
    const FirstNameValue = FirstName.value.trim();
    const LastNameValue = LastName.value.trim();
    const AgeValue = Age.value.trim();
    const GradeValue = Grade.value.trim();
    const AddressValue = Address.value.trim();

    let Isit = false
    Person_info_base.forEach((item)=>
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
    }
    if(Isit === false)
    {
        Person_info_base.push(Person_info);
    }
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
        document.getElementById("Fname").style.cssText="outline: 1px solid red;transition:outline ease 153ms";
        setTimeout
        (function()
        {
            document.getElementById("Fname").style.cssText="outline:none";

        }
        , 1000)
    }
    if(LastNameValue === '')
    {
        document.getElementById("Lname").style.cssText="outline: 1px solid red;transition:outline ease 153ms";
        setTimeout
        (function()
            {
                document.getElementById("Lname").style.cssText="outline:none";

            }
            , 1000)
    }
    if(AgeValue === '')
    {
        document.getElementById("Age").style.cssText="outline: 1px solid red;transition:outline ease 153ms";
        setTimeout
        (function()
            {
                document.getElementById("Age").style.cssText="outline:none";

            }
            , 1000)
    }
    if(AddressValue === '')
    {
        document.getElementById("Address").style.cssText="outline: 1px solid red;transition:outline ease 153ms";
        setTimeout
        (function()
            {
                document.getElementById("Address").style.cssText="outline:none";

            }
            , 1000)
    }
    else
    {
        insert()
    }


}
