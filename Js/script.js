// Welcome message handler
document.addEventListener('DOMContentLoaded', function() {
    const storedName = localStorage.getItem('visitorName');
    const welcomeMessage = document.getElementById('welcomeMessage');
    
    if (storedName && welcomeMessage) {
        welcomeMessage.textContent = `Hi ${storedName}!`;
    }
});

// Form validation and submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form values
            const name = document.getElementById('name').value;
            const birthdate = document.getElementById('birthdate').value;
            const gender = document.querySelector('input[name="gender"]:checked').value;
            const message = document.getElementById('message').value;

            // Store name for welcome message
            localStorage.setItem('visitorName', name);

            // Display form results
            const formResult = document.getElementById('formResult');
            formResult.innerHTML = `
                <h3>Form Submission Results:</h3>
                <p><strong>Current time:</strong> ${new Date().toLocaleString()}</p>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Birthdate:</strong> ${birthdate}</p>
                <p><strong>Gender:</strong> ${gender}</p>
                <p><strong>Message:</strong> ${message}</p>
            `;
            formResult.style.display = 'block';

            // Reset form
            contactForm.reset();
        });
}

let slideIndex = 0;

function showSlides() {
        const slides = document.getElementsByClassName("slide");
    
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
    
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }
    
        slides[slideIndex - 1].style.display = "block";
        setTimeout(showSlides, 3000); // Change slide every 3 seconds
}


document.addEventListener('DOMContentLoaded', showSlides);