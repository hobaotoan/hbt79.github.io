window.onload = function showInfo(){
    
    document.getElementById('namePerson').innerHTML = "" + sessionStorage.getItem("username") + "";
    var person_email = document.getElementById('emailPerson');
    person_email.innerHTML = "" + sessionStorage.getItem("email") + "";
    var person_phone = document.getElementById('phonePerson');
    person_phone.innerHTML = "" + sessionStorage.getItem("phone") + "";
    document.getElementById('namePerson').innerHTML = "" + localStorage.getItem("username") + "";
    var person_email = document.getElementById('emailPerson');
    person_email.innerHTML = "" + localStorage.getItem("email") + "";
    var person_phone = document.getElementById('phonePerson');
    person_phone.innerHTML = "" + localStorage.getItem("phone") + "";
}
