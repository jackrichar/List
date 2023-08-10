const Form = document.getElementById("User");
const FirstName = document.getElementById("Fname");
const LastName = document.getElementById("Lname");
const Age = document.getElementById("Age");
const Grade = document.getElementById("Grade");
const Price = document.getElementById("Price");
const Discount = document.getElementById("Discount");
const Address = document.getElementById("Address");
const user_input = document.getElementById("User-input");
const Table = document.querySelector(".Person-table");
let number = [];
let Person_info_base = [];
let ID

Form.addEventListener('submit', e => {
    e.preventDefault();
    checkinput()
});

function insert() {
    ID = Person_info_base.length;

    const FirstNameValue = FirstName.value.trim();
    const LastNameValue = LastName.value.trim();
    const AgeValue = Age.value.trim();
    const GradeValue = Grade.value.trim();
    const PriceValue = Price.value.trim();
    const DiscountValue = Discount.value.trim();
    const AddressValue = Address.value.trim();

    let Isit = false
    Person_info_base.forEach((item) => {
            if (item.FirstName === FirstNameValue && item.LastName === LastNameValue) {
                Isit = true;
            }
        }
    )
    let LastPrice = parseInt(PriceValue) * (parseInt(DiscountValue) / 100);
    LastPrice = parseInt(PriceValue) - LastPrice;
    let number = LastPrice.toString();
    let result = "";
    let count = 0;
    for (let i = number.length - 1; i >= 0; i--) {
        result = number[i] + result;
        count++;
        if (count === 3 && i !== 0) {
            result = "," + result;
            count = 0;
        }
    }

    const Person_info = {
        FirstName: FirstNameValue,
        LastName: LastNameValue,
        Age: AgeValue,
        Grade: GradeValue,
        Price: result+' تومان ',
        Address: AddressValue,
        id: ID,
    }
    if (Isit === false) {
        Person_info_base.push(Person_info);
        input_user();
        Form.reset();
    }
}

function checkinput() {
    const FirstNameValue = FirstName.value.trim();
    const LastNameValue = LastName.value.trim();
    const AgeValue = Age.value.trim();
    const GradeValue = Grade.value.trim();
    const PriceValue = Price.value.trim();
    const DiscountValue = Discount.value.trim();
    const AddressValue = Address.value.trim();

    if (FirstNameValue === '') {
        document.getElementById("Fname").style.cssText = "outline: 1px solid red;animation:move 0.5s";
        document.querySelector(".label-Fname").style.cssText = "animation:move 0.5s"
        setTimeout
        (function () {
                document.getElementById("Fname").style.cssText = "outline:none;animation:none";
                document.querySelector(".label-Fname").style.cssText = "animation:none"

            }
            , 1000)
    }
    if (LastNameValue === '') {
        document.getElementById("Lname").style.cssText = "outline: 1px solid red;animation:move 0.5s";
        document.querySelector(".label-Lname").style.cssText = "animation:move 0.5s"
        setTimeout
        (function () {
                document.getElementById("Lname").style.cssText = "outline:none;animation:none";
                document.querySelector(".label-Lname").style.cssText = "animation:none"

            }
            , 1000)
    }
    if (AgeValue === '') {
        document.getElementById("Age").style.cssText = "outline: 1px solid red;animation:move 0.5s";
        document.querySelector(".label-Age").style.cssText = "animation:move 0.5s"
        setTimeout
        (function () {
                document.getElementById("Age").style.cssText = "outline:none;animation:none";
                document.querySelector(".label-Age").style.cssText = "animation:none"


            }
            , 1000)
    }

    if (PriceValue === '') {
        document.getElementById("Price").style.cssText = "outline: 1px solid red;animation:move 0.5s";
        document.querySelector(".label-Price").style.cssText = "animation:move 0.5s"
        setTimeout
        (function () {
                document.getElementById("Price").style.cssText = "outline:none;animation:none";
                document.querySelector(".label-Price").style.cssText = "animation:none"


            }
            , 1000)
    }
    if (DiscountValue === '') {
        document.getElementById("Discount").style.cssText = "outline: 1px solid red;animation:move 0.5s";
        document.querySelector(".label-Discount").style.cssText = "animation:move 0.5s"
        setTimeout
        (function () {
                document.getElementById("Discount").style.cssText = "outline:none;animation:none";
                document.querySelector(".label-Discount").style.cssText = "animation:none"


            }
            , 1000)
    }
    if (AddressValue === '') {
        document.getElementById("Address").style.cssText = "outline: 1px solid red;animation:move 0.5s";
        document.querySelector(".label-Address").style.cssText = "animation:move 0.5s"
        setTimeout
        (function () {
                document.getElementById("Address").style.cssText = "outline:none;animation:none";
                document.querySelector(".label-Address").style.cssText = "animation:none"

            }
            , 1000)
    }
    if (GradeValue === '') {
        document.getElementById("Grade").style.cssText = "outline: 1px solid red;animation:move 0.5s";
        document.querySelector(".label-Grade").style.cssText = "animation:move 0.5s"
        setTimeout
        (function () {
                document.getElementById("Grade").style.cssText = "outline:none;animation:none";
                document.querySelector(".label-Grade").style.cssText = "animation:none"


            }
            , 1000)
    }
    if(FirstNameValue!==''&&LastNameValue!==''&&AgeValue!==''&&GradeValue!==''&&PriceValue!==''&&DiscountValue!==''&&AddressValue!=='') {
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
       <td>${Person_info.Price}</td>
       <td>${Person_info.Address}</td>
       <td><i class="fa-solid fa-trash-can" id="icon" data-index="${Person_info.id}" onclick="deleteRow(this)"></i></td>
     </tr>`
    );
}


function deleteRow(button) {
    const row = button.closest("tr.row");
    const index = parseInt(button.getAttribute("data-index"));
    Swal.fire({
        title: 'آیا مطمئن هستید؟',
        text: "شما نمی توانید این را برگردانید!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'Cancel',
        confirmButtonText: 'Yes'
    }).then((result) => {
        if (result.isConfirmed) {
            if (row) {
                row.remove();
                Person_info_base.splice(index, 1);
                console.log(Person_info_base);
            }
            Swal.fire(
                'حذف شد!',
                'فایل شما حذف شده است.',
            )
        }
    });
}


function searchByName() {
    let Filter = document.querySelector('.Filter').value.trim();
    const searchInput = document.getElementById("search-input").value.trim();

    const filteredRows = Person_info_base.filter((person) => {
        if (Filter === `FirstName`) {
            const firstName = person.FirstName.toLowerCase();
            const searchName = searchInput.toLowerCase();
            return firstName.includes(searchName);
        } else if (Filter === `LastName`) {
            const LastName = person.LastName.toLowerCase();
            const searchName = searchInput.toLowerCase();
            return LastName.includes(searchName);
        } else if (Filter === `Age`) {
            const Age = person.Age.toLowerCase();
            const searchName = searchInput.toLowerCase();
            return Age.includes(searchName);
        } else if (Filter === `Grade`) {
            const Grade = person.Grade.toLowerCase();
            const searchName = searchInput.toLowerCase();
            return Grade.includes(searchName);
        } else if (Filter === `Price`) {
            const Price = person.Price.toLowerCase();
            const searchName = searchInput.toLowerCase();
            return Price.includes(searchName);
        }

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
           <td>${person.Price}</td>
           <td>${person.Address}</td>
           <td><i class="fa-solid fa-trash-can" data-index="${person.id}" onclick="deleteRow(this)"></i></td>
         </tr>`
        );
    });
}

// let count=0;
// function Check_input()
// {
//     const Price = document.getElementById('Price').value.trim();
//     count++;
//     if (count === 3) {
//         document.getElementById('Price').value+=',';
//         count = 0;
//     }
// }



