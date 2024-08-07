


 // site-navbar start

document.addEventListener("DOMContentLoaded", function() {
    fetch('../site-navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar-container').innerHTML = data;
        })
        .catch(error => console.error('Error loading navbar:', error));
});


 // site-navbar end