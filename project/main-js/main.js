const scrollToTopBtn = document.getElementById('scrollToTopBtn');
const progressCircle = document.querySelector('.progress-ring circle');
const circleRadius = progressCircle.r.baseVal.value;
const circumference = 2 * Math.PI * circleRadius;


progressCircle.style.strokeDasharray = `${circumference}`;
progressCircle.style.strokeDashoffset = `${circumference}`;


function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}


scrollToTopBtn.addEventListener('click', scrollToTop);


function setProgress(scrollPercentage) {
    const offset = circumference - (scrollPercentage / 100) * circumference;
    progressCircle.style.strokeDashoffset = offset;
}


window.addEventListener('scroll', function() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercentage = (scrollTop / docHeight) * 100;

    
    setProgress(scrollPercentage);
});
            
            document.querySelectorAll('.sign-up-btn').forEach(button => {
    button.addEventListener('click', function() {
        document.getElementById("registrationForm").style.display = "flex";
    });
});


document.querySelectorAll('.login-btn').forEach(button => {
    button.addEventListener('click', function() {
        document.getElementById("loginForm").style.display = "flex";
    });
});


function submitForm() {
    var firstName = document.getElementById("first-name").value;
    var lastName = document.getElementById("last-name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (!firstName || !lastName || !email || !password) {
        showMessage("Invalid input, please enter the needed info");
    } else {
        document.getElementById("registrationForm").style.display = "none"; 
        showMessage("You've been registered successfully!");
    }
}


function submitLoginForm() {
    var email = document.getElementById("login-email").value;
    var password = document.getElementById("login-password").value;

    if (!email || !password) {
        showMessage("Invalid input, please enter the needed info");
    } else {
        document.getElementById("loginForm").style.display = "none"; 
        showMessage("Login successful!");
    }
}


function showMessage(message) {
    document.getElementById("messageText").textContent = message;
    document.getElementById("messagePopup").style.display = "flex";
}


function closeMessagePopup() {
    document.getElementById("messagePopup").style.display = "none"; 
}
window.addEventListener('click', function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
    }
});

function openPopup() {
        document.getElementById('popup').style.display = 'block';
    }

    
    function closePopup() {
        document.getElementById('popup').style.display = 'none';
    }

    
    document.querySelectorAll('.open-popup').forEach(button => {
        button.addEventListener('click', openPopup);
    });

    
    document.querySelector('.close').addEventListener('click', closePopup);

    
    window.addEventListener('click', (event) => {
        if (event.target === document.getElementById('popup')) {
            closePopup();
        }
    });

    // Function to open the modal
function openModal() {
    document.getElementById('resetPasswordModal').style.display = 'block';
}

// Function to close the modal
function closeModal() {
    document.getElementById('resetPasswordModal').style.display = 'none';
}

// Set up event listeners for the Forget Password button and other buttons
document.getElementById('resetPasswordButton').addEventListener('click', openModal);
document.querySelectorAll('.open-modal').forEach(button => {
    button.addEventListener('click', openModal);
});

// Set up event listener for the close button
document.querySelector('.close').addEventListener('click', closeModal);

// Close modal if clicking outside
window.addEventListener('click', (event) => {
    if (event.target === document.getElementById('resetPasswordModal')) {
        closeModal();
    }
});

// Handle form submission
document.getElementById('emailForm').addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the default form submission
    const email = document.getElementById('email').value;
    console.log('Email submitted:', email); // Process the email (e.g., send it to the server)
    closeModal(); // Close the modal
});
