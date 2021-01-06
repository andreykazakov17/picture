import modals from './modules/modals';
import slider from './modules/slider';
import forms from './modules/forms';
import showMoreStyles from './modules/showMoreStyles';
import mask from './modules/mask';
import checkTextInputs from './modules/checkTextInputs';

window.addEventListener('DOMContentLoaded', () => {
    modals();
    slider('.feedback-slider-item', 'horizontal', '.main-prev-btn', '.main-next-btn');
    slider('.main-slider-item', 'vertical');
    forms();
    showMoreStyles('.button-styles', '#styles .row');
    mask('[name="phone"]');
    checkTextInputs('[name="name"]');
});