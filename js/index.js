// Dropdawn в поиске
const headerTablet = document.querySelector('.header__tablet');
const headerMobile = document.querySelector('.header__mobile');
headerTablet.addEventListener('click', (ev) => {
    const targetClass = ev.target.className;
    const targetElement = ev.target;

    if (targetClass === 'form-search__btn') {
        targetElement.nextElementSibling.style.display = 'block';
    } else if (targetClass === 'dropdown__top') {
        targetElement.parentElement.style.display = 'none';
    } else if (targetClass === 'form-search__input') {
        const dropdown = targetElement.parentElement.children[2];
        dropdown.style.display = 'none';
    } else if (targetClass === 'burger' || targetClass === 'burger burger_open') {
        let logo = targetElement.nextElementSibling.nextElementSibling;
        let user_basket = targetElement.nextElementSibling.nextElementSibling.nextElementSibling;
        let container = targetElement.parentElement;
        if(targetElement.classList.contains('burger_open')) {
            container.classList.remove('container_burger-open')
            container.parentElement.nextElementSibling.style.display = 'block'
            targetElement.classList.remove('burger_open')
            logo.style.display = 'inline-flex'
            user_basket.style.display = 'inline-flex'
        } else {
            container.classList.add('container_burger-open')
            container.parentElement.nextElementSibling.style.display = 'none'
            targetElement.classList.add('burger_open')
            logo.style.display = 'none'
            user_basket.style.display = 'none'
        }
        targetElement.nextElementSibling.classList.toggle('burger-dropdawn_close');
    }
});
headerMobile.addEventListener('click', (ev) => {
    const targetClass = ev.target.className;
    const targetElement = ev.target;

    if (targetClass === 'burger' || targetClass === 'burger burger_open') {
        let logo = targetElement.nextElementSibling.nextElementSibling;
        let user_basket = targetElement.nextElementSibling.nextElementSibling.nextElementSibling;
        let container = targetElement.parentElement;

        if(targetElement.classList.contains('burger_open')) {
            container.classList.remove('container_burger-open')
            container.parentElement.nextElementSibling.style.display = 'block'
            container.querySelector('.logo').style.display = 'inline-flex'

            targetElement.classList.remove('burger_open')
            ev.currentTarget.querySelector('.mobile__third').style.display = 'block'

        } else {
            container.classList.add('container_burger-open')
            container.parentElement.nextElementSibling.style.display = 'none'
            container.querySelector('.logo').style.display = 'none'

            targetElement.classList.add('burger_open')
            ev.currentTarget.querySelector('.mobile__third').style.display = 'none'
        }
        targetElement.nextElementSibling.classList.toggle('burger-dropdawn_close');
    }
});

// Предотварить отправку всех форм
const forms = document.querySelectorAll('form');
forms.forEach(function (el, idx) {
    el.addEventListener('submit', (ev) => {
        ev.preventDefault()
    })
})
