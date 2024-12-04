// Επιλογή του dropdown και των προορισμών
const categorySelect = document.getElementById('category');
const destinations = document.querySelectorAll('.destination');

// Όταν αλλάζει η κατηγορία, εμφανίζουμε μόνο τους αντίστοιχους προορισμούς
categorySelect.addEventListener('change', function() {
    const selectedCategory = categorySelect.value;

    // Αφαίρεση του "show" από όλα τα στοιχεία
    destinations.forEach(function(destination) {
        destination.classList.remove('show');
    });

    // Προβολή των προορισμών της επιλεγμένης κατηγορίας
    const selectedDestinations = document.querySelectorAll(`.${selectedCategory}`);
    selectedDestinations.forEach(function(destination) {
        destination.classList.add('show');
    });
});

// Αρχική εμφάνιση για την προεπιλεγμένη κατηγορία
categorySelect.dispatchEvent(new Event('change'));
