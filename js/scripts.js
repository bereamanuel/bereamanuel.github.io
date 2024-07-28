// Start Progress bar
window.onscroll = function() {
    updateProgressBar();
};

function updateProgressBar() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("progressBar").style.width = scrolled + "%";
}

// End Progress bar

// Start Language selector
function changeLanguage(event) {
    var language = event.target.value;
    localStorage.setItem('selectedLanguage', language); 
    updateLanguage(language);
}

function updateLanguage(language) {
    var elements = document.querySelectorAll('[data-lang]');
    elements.forEach(function(element) {
        element.style.display = element.getAttribute('data-lang') === language ? 'block' : 'none';
    });
}

// Inizializator
document.addEventListener('DOMContentLoaded', function() {
    var languageSelect = document.getElementById('language');
    var savedLanguage = localStorage.getItem('selectedLanguage') || 'en'; 
    languageSelect.value = savedLanguage;
    updateLanguage(savedLanguage);
    languageSelect.addEventListener('change', changeLanguage);
});

// End Language selector
// Start back function
function goBack() {
    window.history.back();
}
// End back function

// // Start "Back to Top Button "
// // Show/hide
// function toggleBackToTopButton() {
//     var backToTopButton = document.getElementById('back-to-top');
//     if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
//         backToTopButton.style.display = 'block';
//     } else {
//         backToTopButton.style.display = 'none';
//     }
// }
// 
// // Scroll top
// function scrollToTop() {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
// }
// 
// // End "Back to Top Button "