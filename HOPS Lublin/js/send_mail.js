document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var formData = new FormData(this);
    
    fetch(this.action, {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        this.reset();
    })
    .catch(error => {
        console.error('Помилка:', error);
        alert("Помилка при відправці повідомлення.");
    });
});