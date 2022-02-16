$(document).ready(() => {
    // let personName = sessionStorage.getItem("user");
    var obj = JSON.parse(sessionStorage.getItem('user'));

    $('#username').html("Hello " + obj.username);

})