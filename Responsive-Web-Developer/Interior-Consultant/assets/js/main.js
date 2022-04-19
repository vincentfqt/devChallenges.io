
document.addEventListener('DOMContentLoaded', () => {
    const burgerElement = document.querySelector('.material-icons.menu');
    const closeElement = document.querySelector('.material-icons.close');
    const navElement = document.querySelector('header nav');
    
    burgerElement.addEventListener('click', () => {
        console.log('click open burger');
        navElement.classList.add('active');
        closeElement.classList.add('active');
    });
    closeElement.addEventListener('click', () => {
        console.log('click close burger');
        navElement.classList.remove('active');
        closeElement.classList.remove('active');
    });
});
