import {getResource} from '../services/requests';

const showMoreStyles = (trigger, wrapper) => {
    const btn = document.querySelector(trigger);

    btn.addEventListener('click', function(){
        getResource('assets/db.json')
            .then(res => createCards(res.styles))
            .catch(error => {
                let errorMessage = document.createElement('div');
                errorMessage.classList.add('animated', 'fadeInUp', 'p-heading');
                errorMessage.textContent = "Что-то пошло не так...";

                document.querySelector(wrapper).appendChild(errorMessage);
            });

        this.remove();
    });

    function showError() {
        let message = document.createElement('div');

        message.textContent = "Что-то пошло не так...";
    }

    function createCards(response) {
        response.forEach(({src, title, link}) => {
            let card = document.createElement('div');

            card.classList.add('animated', 'fadeInUp', 'col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');

            card.innerHTML = `
                <div class="styles-block">
                    <img src=${src} alt="style">
                    <h4>${title}</h4>
                    <a href=${link}>Подробнее</a>
                </div>
            `;

            document.querySelector(wrapper).appendChild(card);
        });
    }
};

export default showMoreStyles;