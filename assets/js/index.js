window.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.burger').addEventListener('click', (e) => {
        e.target.classList.toggle('active');
        document.querySelector('.navigation').classList.toggle('open')
    })
});
