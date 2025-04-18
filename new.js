// Avatar Upload Functionality
document.querySelector('.edit-avatar-btn').addEventListener('click', () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    
    input.onchange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        
        reader.onload = (event) => {
            document.getElementById('user-avatar').src = event.target.result;
            // Save to Firebase Storage here if needed
        };
        
        reader.readAsDataURL(file);
    };
    
    input.click();
});
