const Form = document.getElementById("User");
const FirstName = document.getElementById("Fname");
const LastName = document.getElementById("Lname");
const Age = document.getElementById("Age");
const Grade = document.getElementById("Grade");
const Address = document.getElementById("Address");
const user_input = document.getElementById("User-input");
const Table = document.querySelector(".Person-table");
let Person_info_base = [];
let ID

Form.addEventListener('submit',e =>
{
    e.preventDefault();
    checkinput()
});

function insert()
{
    ID = Person_info_base.length;

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
        input_user();
    }
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

function input_user() {
    const Person_info = Person_info_base[Person_info_base.length - 1];
    user_input.insertAdjacentHTML(
        'beforeend',
        `<tr class="row">
       <td>${Person_info.FirstName}</td>
       <td>${Person_info.LastName}</td>
       <td>${Person_info.Age}</td>
       <td>${Person_info.Grade}</td>
       <td>${Person_info.Address}</td>
       <td><button type="click" data-index="${Person_info.id}" onclick="deleteRow(this)">حذف</button></td>
     </tr>`
    );
}


function deleteRow(button) {
    const row = button.closest("tr.row");
    const index = parseInt(button.getAttribute("data-index"));
    console.log(index)
    if (row) {
        row.remove();
        Person_info_base.splice(index, 1);
        console.log(Person_info_base)
    }
}
function searchByName() {
    const searchInput = document.getElementById("search-input").value.trim();

    const filteredRows = Person_info_base.filter((person) => {
        const firstName = person.FirstName.toLowerCase();
        const searchName = searchInput.toLowerCase();
        return firstName.includes(searchName);
    });

    user_input.innerHTML = '';
    filteredRows.forEach((person) => {
        user_input.insertAdjacentHTML(
            'afterbegin',
            `<tr class="row">
           <td>${person.FirstName}</td>
           <td>${person.LastName}</td>
           <td>${person.Age}</td>
           <td>${person.Grade}</td>
           <td>${person.Address}</td>
           <td><button type="click" data-index="${person.id}" onclick="deleteRow(this)">حذف</button></td>
         </tr>`
        );
    });
}



