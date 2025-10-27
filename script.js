function enterWebsite() {
    const welcomeScreen = document.getElementById('welcomeScreen');
    const mainContent = document.getElementById('mainContent');
    
    welcomeScreen.classList.add('hidden');
    
    setTimeout(() => {
        mainContent.classList.add('visible');
    }, 300);
}

document.addEventListener('keypress', function(event) {
    if (event.key === 'Enter' && !document.getElementById('welcomeScreen').classList.contains('hidden')) {
        enterWebsite();
    }
});
