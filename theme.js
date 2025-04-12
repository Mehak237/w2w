// Theme Switcher
document.getElementById('dark-mode-btn').addEventListener('click', () => {
    document.body.classList.add('dark-theme');
});

document.getElementById('light-mode-btn').addEventListener('click', () => {
    document.body.classList.remove('dark-theme');
});
