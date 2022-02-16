$(document).ready(() => {
  $("#docLogin").submit((event) => {
    event.preventDefault();
    var email = $("#email").val();
    var password = $("#password").val();
    $.ajax({
      url: "http://localhost:3000/doctor",
      data: "GET",
      success: (x) => {

        x.forEach(element => {
          if (element.email === email && element.password === password) {
            sessionStorage.setItem('doctor', JSON.stringify(element));
            window.location = "docDash.html"
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