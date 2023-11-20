// Dropdawn в поиске
const header = document.querySelector('.header');
header.addEventListener('click', (ev) => {
    const targetClass = ev.target.className;
    const targetElement = ev.target;

    if (targetClass === 'form-search__btn') {
        targetElement.nextElementSibling.style.display = 'block';
    } else if (targetClass === 'dropdown__top') {
        targetElement.parentElement.style.display = 'none';
    } else if (targetClass === 'form-search__input') {
        const dropdown = targetElement.parentElement.children[2];
        dropdown.style.display = 'none';
    }
});