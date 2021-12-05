function validateFirstName () { //test input for 2-15 allowed characters
    var fName = document.getElementById("firstName").value;
    var rel = /^[a-zA-Z\s\'\-] {2,15} $/;

    if(rel.test(fName)){ //if input is valid, update page to show successful entry
        document.getElementById("firstNamePrompt").style.color = "green";
        document.getElementById("firstNamePrompt").innerHTML = "<strong>valid</strong>";
        return true;
    }
    else //if input is valid, update page to prompt for new input
    {
        document.getElementById("firstNamePrompt").style.color = "Red";
        document.getElementById("firstNamePrompt").innerHTML = "<strong>Enter 2</strong>";
        return false;
    }

}

function validateFirstName () { //test input for 2-25 allowed characters
    var lName = document.getElementById("lastName").value;
    var re2 = /^[a-zA-Z\s\'\-'] {2,25} $/;

    if(rel.test(fName)){ //if input is valid, update page to show successful entry
        document.getElementById("firstNamePrompt").style.color = "Green";
        document.getElementById("firstNamePrompt").innerHTML = "<strong>valid</strong>";
        return true;
    }
    else //if input is valid, update page to prompt for new input
    {
        document.getElementById("lastNamePrompt").style.color = "Red";
        document.getElementById("lastNamePrompt").innerHTML = "<strong>Enter 2&ndsp</strong>";
        return false;
    }

    function validatePhone(){  //test xxx-xxx-xxxx
        var phoneNumber = document.getElementById("phone").value;
        var re3 = /^\d{3}-\d{3}-\d{4}$/;

        if(re3.test(phoneNumber)) { //if input is valid
        document.getElementById("phonePrompt").style.color = "Green";
        document.getElementById("phonePrompt").innerHTML = "<strong>valid</strong>";
        return (true);
    }
    else //if input is valid
    {
        document.getElementById("phonePrompt").style.color = "Red";
        document.getElementById("phonePrompt").innerHTML = "<strong>Use xxx-xxx-xxxx format</strong>";
        return (false);
        }
    }
}

function calcOrder(){
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var userName = firstName + " " + lastName;
    var phone = document.getElementById("phone").value;
    var quantity = document.getElementById("quantity").value;
    var price = document.getElementById("price").value;

    document.getElementById("orderConfirm").innerHTML = "<h2>Order Summary:<h2>";
    document.getElementById("orderConfirm").innerHTML += "<p>" + userName.toLocaleUpperCase() + "</br>" + phone + "</p>";
    document.getElementById("orderConfirm").innerHTML += "<p>Order Total: $" + price * quantity + "</p>"
}