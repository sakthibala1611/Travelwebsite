window.addEventListener('load', function() {
    alert("Welcome to Ramanathapuram Tourism! 🌴");
});
// select the form
const form = document.getElementById("contanctus");

// submit button
const submitBtn = document.getElementById("submit");
submitBtn.addEventListener("click", function(e) {
    e.preventDefault(); // stop page refresh
    alert("Form submitted successfully! ✅");
});

// reset button
const resetBtn = document.getElementById("reset");
resetBtn.addEventListener("click", function() {
    form.reset(); // manually clear all fields
    alert("Form reset successfully 🔄");
});// smooth scroll for same-page sections
const navLinks = document.querySelectorAll('.navbar ul li a');

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if(href.startsWith('#')){
            e.preventDefault(); // prevent jump
            document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
        }
    });
});

