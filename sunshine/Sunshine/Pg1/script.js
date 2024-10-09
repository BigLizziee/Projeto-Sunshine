const toggleButton = document.getElementById('dark-mode-toggle');
const body = document.body;
const header = document.querySelector('header');
const footer = document.querySelector('footer');

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    header.classList.toggle('dark-mode');
    footer.classList.toggle('dark-mode');

    const links = document.querySelectorAll('nav ul li a');
    links.forEach(link => link.classList.toggle('dark-mode'));
    document.getElementById('Entrar').classList.toggle('dark-mode');
});