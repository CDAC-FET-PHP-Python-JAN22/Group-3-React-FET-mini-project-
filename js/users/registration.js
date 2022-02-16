$(document).ready(() => {
  $("#signUp").submit((event) => {
    event.preventDefault();
    var name = $("#name").val();
    var email = $("#email").val();
    var age = $("#age").val();
    var city = $("#city").val();
    var gender = $("#gender").val();
    var mobile = $("#mobile").val();
    var username = $("#username").val();
    var password = $("#password").val();
    var confirmpassword = $("#confirmpassword").val();


    $.ajax({
      url: "http://localhost:3000/users",
      method: "POST",
      required: "true",
      data: {
        name: name,
        email: email,
        age: age,
        city: city,
        gender: gender,
        mobile: mobile,
        username: username,
        password: password,
        confirmpassword: confirmpassword

      },
      success: (x) => {

        window.location = "userRegistration.html";
        alert(x.name + " added successfully");
      },
      error: (e) => {
        alert("error occured");
      }
    });
  });

});


