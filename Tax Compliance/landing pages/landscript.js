// Get the card elements
const businessCard = document.getElementById('business-card');
const individualCard = document.getElementById('individual-card');
const freelancerCard = document.getElementById('freelancer-card');

// Redirect to the respective page when a category is clicked
businessCard.addEventListener('click', () => {
    window.location.href = 'business.html'; // Redirect to Business page
});

individualCard.addEventListener('click', () => {
    window.location.href = 'individual.html'; // Redirect to Individual page
});

freelancerCard.addEventListener('click', () => {
    window.location.href = 'freelancer.html'; // Redirect to Freelancer page
});
