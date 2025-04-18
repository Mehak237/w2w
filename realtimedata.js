import { db, doc, getDoc } from './firebase.js';

async function loadUserProfile() {
    const userId = "current-user-id"; // Replace with actual user ID
    const userRef = doc(db, "users", userId);
    const userSnap = await getDoc(userRef);
    
    if (userSnap.exists()) {
        const userData = userSnap.data();
        document.getElementById('username').textContent = userData.name;
        document.getElementById('points').textContent = userData.ecoPoints;
        document.getElementById('products-sold').textContent = userData.productsSold || 0;
        document.getElementById('products-bought').textContent = userData.productsBought || 0;
    }
}

loadUserProfile();
