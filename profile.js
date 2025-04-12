// profile.js
// Eco-Points Counter Animation
function animateEcoPoints() {
    const pointsElement = document.getElementById('points');
    const targetPoints = 500; // Replace with actual user points
    let currentPoints = 0;
    
    const interval = setInterval(() => {
        currentPoints += 5;
        pointsElement.textContent = currentPoints;
        
        if (currentPoints >= targetPoints) {
            clearInterval(interval);
            pointsElement.textContent = targetPoints;
        }
    }, 20);
}

animateEcoPoints();
