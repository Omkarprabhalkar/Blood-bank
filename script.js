// Login function
function loginUser(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === "admin" && password === "1234") {
        window.location.href = "home.html"; // Redirect to home page after login
    } else {
        alert("Invalid username or password!");
    }
}

// Slider functionality
let index = 0;
function showSlide(n) {
    let slides = document.querySelector('.slides');
    let totalSlides = document.querySelectorAll('.slide').length;
    if (n >= totalSlides) index = 0;
    else if (n < 0) index = totalSlides - 1;
    else index = n;
    slides.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
    showSlide(index + 1);
}

function prevSlide() {
    showSlide(index - 1);
}

// Open Forms
function openForm(type) {
    if (type === 'donor') {
        window.location.href = "donor-form.html";
    } else if (type === 'patient') {
        window.location.href = "patient-form.html";
    }
}
