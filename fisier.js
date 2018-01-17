
window.onload = function () {
    schimbaStil(document.getElementById("branding"));
    changeText(text);

}

function schimbaStil(el) {
    el.style.color = "darkCyan";
    el.style.fontFamily = "Arial";
    el.style.fontSize = "larger";
}
function changeText(text) {
    text = document.getElementById("dark1");
    text.innerHTML = ("Photography is a way of feeling, of touching, of loving. What you have caught on film is captured forever… It remembers little things, long after you have forgotten everything.");
}

function adaugaElement(element) {
    var newLi = document.createElement("li");
    element = document.createElement("h3");
    var menu = document.getElementById("art").getElementsByTagName("ul")[0];
    menu.appendChild(newLi);
    newLi.appendChild(element);


}
function Validation() {
    var text = document.forms["myForm"]["email"].value;
    var atposition = text.indexOf("@");
    var dotposition = text.lastIndexOf(".");
    if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 > text.length) {

        alert("Enter a valid Email");
        return false;

    }
    else {
        alert("Thanks for subscribing!");
    }


}