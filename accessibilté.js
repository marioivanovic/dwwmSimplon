const email = document.getElementById('email');
const help = document.getElementById('emailHelp');
email.addEventListener('input', () => {
    help.textContent = email.validity.valid ? '' : 'Adresse e-mail invalide.';
});

const btnTheme = document.querySelector('.theme-toggle');
btnTheme.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const darkMode = document.body.classList.contains('dark');
    document.documentElement.style.setProperty('--clr-bg', darkMode ? '#111' : '#fff');
    document.documentElement.style.setProperty('--clr-text', darkMode ? '#eee' : '#111');
    document.documentElement.style.setProperty('--clr-primary', darkMode ? '#66aaff' : '#0066ff');
    btnTheme.setAttribute('aria-label', darkMode ? 'Passer au thème clair' : 'Passer au thème sombre');
});