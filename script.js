/*---------Constructor-------*/
function Person(id, firstName, lastName, gender, telephone, email, region, hobbies, description){
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.telephone = telephone;
    this.email = email;
    this.region = region;
    this.hobbies = hobbies;
    this.description = description;
}
/*---------Data---------*/
var dataUser = [
    {
        id: 0,
        firstName: "Hieu",
        lastName: "Nguyen",
        gender: "male",
        telephone: "03342523433",
        email: "hieuls369@gmail.com",
        region: "asia",
        hobbies: ["cooking", "swimming", "shopping"],
        description: "This is my profile"
    },
    {
        id: 1,
        firstName: "Johnson",
        lastName: "Henry",
        gender: "male",
        telephone: "0334222244",
        email: "pizzatipo369@gmail.com",
        region: "asia",
        hobbies: ["cooking", "dance", "shopping"],
        description: "This is my Henry Profile"
    },
    {
        id: 2,
        firstName: "Tung",
        lastName: "Dinh",
        gender: "male",
        telephone: "0334222244",
        email: "tung@gmail.com",
        region: "asia",
        hobbies: ["cooking", "shopping"],
        description: "This is my Tung Profile"
    },
    {
        id: 4,
        firstName: "Hieu",
        lastName: "Nguyen",
        gender: "male",
        telephone: "03342523433",
        email: "hieuls369@gmail.com",
        region: "asia",
        hobbies: ["cooking", "swimming", "shopping"],
        description: "This is my profile"
    }
]

/*-------Validation--------*/
$('#input-form').validate( {
    onfocusout: false,
    onkeyup: false,
    onclick: false,
    errorClass: 'errors',
    rules: {
        "firstName": {
            required: true,
            maxlength: 20,
            pattern: /^([^0-9]*)$/
        },
        "lastName": {
            required: true,
            maxlength: 20,
            pattern: /^([^0-9]*)$/
        },
        "telephone": {
            minlength: 11,
            pattern: /^([^a-zA-Z]*)$/
        },
        "email": {
            pattern: /^\S+@\S+$/
        },
        "description": {
            maxlength: 200
        }
    },
    messages: {
        firstName: {
            required: "Please provide your first name",
            maxlength: "Who in the earth have this kind of first name? It must be less then 20 characters!",
            pattern: "Not contain number"
        },
        lastName: {
            required: "Please provide your last name",
            maxlength: "Jesus Christ! It must be less then 20 characters!",
            pattern: "Not contain number"
        },
        telephone: {
            minlength: "Phone must be at least 11 number",
            pattern: "Not contain any characters"
        }
    }
});

/*------Add-------*/
// $('#btn').on('click', () => {
//     let id = parseInt(localStorage.getItem("id")) + 1;
//     localStorage.setItem('id', id);
//     let firstName = $('#first').val();
//     let lastName = $('#last').val();
//     let gender = $('#gender').val();
//     let telephone = $('#phone').val();
//     let email = $('#email').val();
//     let region = $('input[name="region"]:checked').val();
//     let hobbies = [];
//     $('input[name="hobbies"]:checked').each(function(){
//         hobbies.push(this.value);
//     });
//     let description = $('#description').val();
//     dataUser.push(new Person(id, firstName, lastName, gender, telephone, email, region, hobbies, description));
//     window.localStorage.setItem('user', JSON.stringify(dataUser));
// });

/*-------------Push data to the search page----------*/
dataUser.forEach(user => {
    $('#dataUser').append('<tr id="' + user.id + '"><td>' + user.firstName + '</td><td>' + user.lastName + '</td><td>' + user.gender + '</td><td>' + user.telephone + '</td><td>' + user.email + '</td><td>' + user.region + '</td><td>' + user.hobbies + '</td><td>' + user.description + '</td></tr>');
});

var searchList = [];

/*-------------Search method---------------*/
$('#btn-search').on('click', () => {
    for (let i = 0; i < dataUser.length; i++) {
        listData = Object.values(dataUser[i]) + "";
        if (listData.includes($('#search').val())) {
            searchList.push(dataUser[i]);
        }
    }
    $('#dataUser').insertAfter('<tbody id="dataUser"></tbody>');
    $('#dataHeader').after('<tbody id="dataUser"></tbody>')
    searchList.forEach(user => {
        $('#dataUser').append('<tr id="' + user.id + '"><td>' + user.firstName + '</td><td>' + user.lastName + '</td><td>' + user.gender + '</td><td>' + user.telephone + '</td><td>' + user.email + '</td><td>' + user.region + '</td><td>' + user.hobbies + '</td><td>' + user.description + '</td></tr>');
    });
    searchList = [];
});








