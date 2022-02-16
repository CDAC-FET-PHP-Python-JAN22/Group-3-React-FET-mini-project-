$(document).ready(() => {
  $("#userLogin").submit((event) => {
    event.preventDefault();
    var username = $("#username").val();
    console.log(username)
    var password = $("#password").val();
    console.log(password)
    

    $.ajax({
      url: "http://localhost:3000/users",
      data: "GET",
      success: (x) => {

        x.forEach(element => {

          if (element.username === username && element.password === password) {
            sessionStorage.setItem('user', JSON.stringify(element));
            alert('Welcome '+ element.username);
            window.location = "userHome.html";
          }
        });
      },
      error: (e) => {
        alert("error: " + e);
      },
      complete: () => {
        console.log("call is completed...");
      },
    });

  });


  $("#doctorSignin").submit((event) => {
    event.preventDefault();
    var email = $("#doctorEmail").val();
    var password = $("#doctorPassword").val();
    $.ajax({
      url: "http://localhost:3000/doctor",
      data: "GET",
      success: (x) => {

        x.forEach(element => {
          if (element.email === email && element.password === password) {
            sessionStorage.setItem('doctor', JSON.stringify(element));
            window.location = "doctorDash.html"
          }


        });
      },
      error: (e) => {
        alert("error: " + e);
      },
      complete: () => {
        console.log("call is completed...");
      },
    });


  });
});