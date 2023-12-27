let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ' ]').classList.add('active');
            })
        }
    })
}


$('#toggle').click(function() {
    $(this).toggleClass('active');
    $('#overlay').toggleClass('open');
   });
 
const form = document.querySelector('form');
const fullName = document.getElementById("fullName");
const email = document.getElementById("email");
const phoneNumber = document.getElementById("phoneNumber");
const Message = document.getElementById("Message");
const Subject = document.getElementById("Subject");


function sendEmail() {

    const bodyMessage = `Full Name: ${fullName.value} <br> Email: ${email.
        value} <br> Phone Number: ${phoneNumber.value} <br> Message: ${Message.value}`;
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "abdallahkashta0@gmail.com",
        Password : "8E4E73F3BC3243E577249A7EC14FE28DE551",
        To : 'abdallahkashta0@gmail.com',
        From : "abdallahkashta0@gmail.com",
        Subject : Subject.value,
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}


form.addEventListener("submit",(e) => {
    e.preventDefault();

    sendEmail();
})