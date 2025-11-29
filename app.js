'use strict'
const switcher = document.querySelector('.btn')
document.addEventListener('DOMContentLoaded', function() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        switcher.textContent = 'Light';
    }
});

switcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
    
    
    if (document.body.classList.contains('dark-theme')) {
        this.textContent = 'Light';  
    } else {
        this.textContent = 'Dark';   
    }
    
    
    const isDark = document.body.classList.contains('dark-theme');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    
    console.log('Tema atual:', isDark ? 'Dark' : 'Light');
});