let toTheTopButt = document.getElementById("topButt");
window.onscroll = function() { scrollFunction(); };

function scrollFunction() {
    
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        toTheTopButt.style.display = "block";
    } else {
        toTheTopButt.style.display = "none";
    }
}
toTheTopButt.addEventListener("click", function() {
    
    document.body.scrollTop = 0; // Для Safari
    document.documentElement.scrollTop = 0; // Для Chrome, Firefox, IE и Opera
});