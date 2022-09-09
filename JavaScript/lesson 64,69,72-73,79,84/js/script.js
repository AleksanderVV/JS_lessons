"use script";

window.addEventListener('DOMContentLoaded', () => {

    const modalTrigger = document.querySelectorAll('[data-modal]'),
        modal = document.querySelector('.modal'),
        modalTimerId = setTimeout(openModal, 50000);

    function tabsStyleFood() {
        const tabsParent = document.querySelector('.tabheader__items'),
            tabs = document.querySelectorAll('.tabheader__item'),
            tabsContent = document.querySelectorAll('.tabcontent');

        function hideTabContent() {
            tabsContent.forEach(item => {
                item.classList.add('hide');
                item.classList.remove('show', 'fade');
            });

            tabs.forEach(item => {
                item.classList.remove('tabheader__item_active');
            });

        }

        function showTabs(i = 0) {
            tabs[i].classList.add('tabheader__item_active');
            tabsContent[i].classList.add('show', 'fade');
        }

        tabsParent.addEventListener('click', (event) => {
            const target = event.target;

            if (target && target.classList.contains('tabheader__item')) {
                tabs.forEach((item, i) => {
                    if (target == item) {
                        hideTabContent();
                        showTabs(i);
                    }
                });
            }
        });

        hideTabContent();
        showTabs();
    }

    function showTimeRemainPromo() {
        const deadLine = '2023-08-24T10:27';

        function getTimeRemaining(endTime) {
            const t = Date.parse(endTime) - Date.parse(new Date()),
                days = Math.floor(t / (1000 * 60 * 60 * 24)),
                hours = Math.floor(t / (1000 * 60 * 60) % 24),
                minutes = Math.floor(t / (1000 * 60) % 60),
                seconds = Math.floor((t / 1000) % 60);

            if (t <= 0) {
                return {
                    'total': 0,
                    'days': 0,
                    'hours': 0,
                    'minutes': 0,
                    'seconds': 0
                };
            }

            return {
                'total': t,
                'days': days,
                'hours': hours,
                'minutes': minutes,
                'seconds': seconds
            };
        }

        function getZero(num) {
            if (num >= 0 && num < 10) {
                return `0${num}`;
            } else {
                return num;
            }
        }

        function setClock(selector, endtime) {
            const timer = document.querySelector(selector),
                days = timer.querySelector('#days'),
                hours = timer.querySelector('#hours'),
                minutes = timer.querySelector('#minutes'),
                seconds = timer.querySelector('#seconds'),
                timeInterval = setInterval(updateClock, 1000);

            updateClock();

            function updateClock() {
                const t = getTimeRemaining(endtime);

                days.innerHTML = getZero(t.days);
                hours.innerHTML = getZero(t.hours);
                minutes.innerHTML = getZero(t.minutes);
                seconds.innerHTML = getZero(t.seconds);

                if (t.total <= 0) {
                    clearInterval(timeInterval);
                }
            }
        }

        setClock('.timer', deadLine);
    }

    function openModal() {
        modal.classList.add('show');
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden';
        clearInterval(modalTimerId);
    }

    function closeModal() {
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }

    function modalWindow() {

        modalTrigger.forEach((btn) => {
            btn.addEventListener('click', openModal);

            modal.addEventListener('click', (e) => {
                if (e.target === modal || e.target.getAttribute('data-close') == '') {
                    closeModal();
                }
            });

            document.addEventListener('keydown', (e) => {
                if (e.code === 'Escape' && modal.classList.contains('show')) {
                    closeModal();
                }
            });
        });

        function showModalByScroll() {
            if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
                openModal();
                window.removeEventListener('scroll', showModalByScroll);
            }
        }

        window.addEventListener('scroll', showModalByScroll);
    }

    function createCardsMenu() {
        const cardsData = [{
                image: 'img/tabs/elite.jpg',
                alt: 'vegy',
                title: 'Меню “Премиум”',
                text: 'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
                price: 460
            },
            {
                image: 'img/tabs/vegy.jpg',
                alt: 'elite',
                title: 'Меню "Фитнес"',
                text: 'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
                price: 230
            },
            {
                image: 'img/tabs/post.jpg',
                alt: 'post',
                title: 'Меню "Постное"',
                text: 'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
                price: 170
            },

        ];

        class MenuCard {
            constructor(image, alt, title, text, price) {
                this.image = image;
                this.alt = alt;
                this.title = title;
                this.text = text;
                this.price = price;
            }

            render() {
                const cardsParrent = document.querySelector('.menu__field .container'),
                    element = document.createElement('div');
                element.classList.add('menu__item');
                element.innerHTML = `
                  <img src="${this.image}" alt="${this.alt}">
                  <h3 class="menu__item-subtitle">${this.title}</h3>
                  <div class="menu__item-descr">${this.text}</div>
                  <div class="menu__item-divider"></div>
                  <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                  </div>
                `;
                cardsParrent.append(element);
            }
        }

        for (let i of cardsData) {
            new MenuCard(i.image, i.alt, i.title, i.text, i.price).render();
        }
    }

    function sendForms() {
        const forms = document.querySelectorAll('form');

        const message = {
            loading: 'img/spinner.svg',
            success: 'Спасибо! Мы скоро с вами свяжемся',
            failure: 'Ошибка!! Что-то пошло не так'
        };

        forms.forEach(item => {
            postData(item);
        });

        function postData(form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();

                const statusMessage = document.createElement('img');
                statusMessage.src = message.loading;
                statusMessage.style.cssText = `
                  display: block;
                  margin: 0 auto;
                `;
                // form.append(statusMessage);
                form.insertAdjacentElement('afterend', statusMessage);

                //  ============================== меняю XMLHttpRequest() на Fetch =====================

                // const request = new XMLHttpRequest();
                // request.open('POST', 'server.php');

                // request.setRequestHeader('Content-type', 'application/json');
                const formData = new FormData(form);

                const object = {};
                formData.forEach(function(value, key) {
                    object[key] = value;
                });
                const json = JSON.stringify(object);

                fetch('server.php', {
                        method: 'POST',
                        headers: {
                            'Content-type': 'application/json'
                        },
                        body: JSON.stringify(object)
                    }).then(data => data.text())
                    .then(data => {
                        console.log(data);
                        showThanksModal(message.success);
                        form.reset();
                        statusMessage.remove();
                    }).catch(() => {
                        showThanksModal(message.failure);
                    }).finally(() => {
                        form.reset();
                    });

                // request.send(json);

                // request.addEventListener('load', () => {
                //     if (request.status === 200) {
                //         console.log(request.response);
                //         showThanksModal(message.success);
                //         form.reset();
                //         setTimeout(() => {
                //             statusMessage.remove();
                //         }, 2000);
                //     } else {
                //         showThanksModal(message.failure);
                //     }
                // });
            });
        }

        function showThanksModal(message) {
            const prevModalDialog = document.querySelector('.modal__dialog');

            prevModalDialog.classList.add('hide');
            openModal();

            const thanksModal = document.createElement('div');
            thanksModal.classList.add('modal__dialog');
            thanksModal.innerHTML = `
            <div class="modal__content">
                <div class="modal__close" data-close="">×</div>
                <div class="modal__title">${message}</div>
            </div>
          `;

            document.querySelector('.modal').append(thanksModal);
            setTimeout(() => {
                thanksModal.remove();
                prevModalDialog.classList.add('show');
                prevModalDialog.classList.remove('hide');
                closeModal();
            }, 4000);
        }




    }



    tabsStyleFood();
    showTimeRemainPromo();
    modalWindow();
    createCardsMenu();
    sendForms();
});