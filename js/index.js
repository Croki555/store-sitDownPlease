// Dropdawn в поиске
const headerTablet = document.querySelector('.header__tablet');
const headerMobile = document.querySelector('.header__mobile');
const header = document.querySelector('.header');
header.addEventListener('click', (ev) => {
    const targetClass = ev.target.className;
    const targetElement = ev.target;
    const container = targetElement.parentElement.parentElement;

    switch (targetClass) {
        case 'form-search__btn':
            container.querySelector('.dropdown').classList.remove('d-none');
            container.querySelector('.dropdown').classList.add('active');
            break;
        case 'dropdown__top':
            container.querySelector('.dropdown').classList.add('d-none');
            container.querySelector('.dropdown').classList.remove('active');
            break;
        case 'form-search__input':
            container.querySelector('.dropdown').classList.add('d-none');
            container.querySelector('.dropdown').classList.remove('active');
            break;
    }
})

headerTablet.addEventListener('click', function (ev) {
    const targetClass = ev.target.className;
    const targetElement = ev.target;
    if (targetClass === 'burger' || targetClass === 'burger active') {
        console.log()

        let logo = this.querySelector('.logo');
        let user_basket = this.querySelector('.user-basket');
        let container = targetElement.parentElement;

        if (targetElement.classList.contains('active')) {

            container.classList.remove('container_burger-open')

            this.querySelector('.tablet__forth').style.display = 'block'

            targetElement.classList.remove('active')

            logo.style.display = 'inline-flex'

            user_basket.style.display = 'inline-flex'
        } else {
            console.log('daad')
            container.classList.add('container_burger-open')

            this.querySelector('.tablet__forth').style.display = 'none'

            targetElement.classList.add('active')

            logo.style.display = 'none'

            user_basket.style.display = 'none'
        }
        this.querySelector('.burger-dropdawn').classList.toggle('burger-dropdawn_close')
    }
});

headerMobile.addEventListener('click', function (ev) {
    const targetClass = ev.target.className;
    const targetElement = ev.target;

    if (targetClass === 'burger' || targetClass === 'burger active') {
        let container = targetElement.parentElement;

        if (targetElement.classList.contains('active')) {

            container.classList.remove('container_burger-open')
            container.querySelector('.logo').style.display = 'inline-flex'

            this.querySelector('.mobile__second').style.display = 'block'

            targetElement.classList.remove('active')

            ev.currentTarget.querySelector('.mobile__third').style.display = 'block'

        } else {
            container.classList.add('container_burger-open')

            container.querySelector('.logo').style.display = 'none'

            this.querySelector('.mobile__second').style.display = 'none'

            targetElement.classList.add('active')

            ev.currentTarget.querySelector('.mobile__third').style.display = 'none'
        }
        this.querySelector('.burger-dropdawn').classList.toggle('burger-dropdawn_close')
    }
});

// Предотварить отправку всех форм
const forms = document.querySelectorAll('form');
forms.forEach(function (el, idx) {
    el.addEventListener('submit', (ev) => {
        ev.preventDefault()
    })
})
