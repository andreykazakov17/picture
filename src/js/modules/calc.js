import {getResource} from '../services/requests';

const calc = (size, material, options, promocode, result) => {
    const sizeBlock = document.querySelector(size),
          materialBlock = document.querySelector(material),
          optionsBlock = document.querySelector(options),
          promocodeBlock = document.querySelector(promocode),
          resultBlock = document.querySelector(result);

    let sum = 0, sizeValue = '', materialValue = '', optionsValue = '';

    function changeParam(event, elem) {
        elem.addEventListener(event, (e) => {
            const target = e.target,
                select = target.id;

            function calcFunc(state) {
                console.log(state[select]);
                for (let key in state[select]) {
                    if (elem.value === key) {
                        switch(select) {
                            case "size":
                                sizeValue = state[select][key];
                                break;
                            case "material":
                                materialValue = state[select][key];
                                break;
                            case "options":
                                optionsValue = state[select][key];
                                break;
                        }
                    }
                    console.log(state[select][key]);
                }

                sum = Math.round((+sizeValue) * (+materialValue) + (+optionsValue));

                if (sizeBlock.value == '' || materialBlock.value == '') {
                    resultBlock.textContent = "Пожалуйста, выберите размер и материал картины";
                } else if (promocodeBlock.value === "IWANTPOPART") {
                    resultBlock.textContent = Math.round(sum * 0.7);
                } else {
                    resultBlock.textContent = sum;
                }
            }

            getResource('assets/calcPrice.json')
                .then(res => calcFunc(res))
                .catch(err => console.log(err));
        });
    };

    changeParam('change', sizeBlock);
    changeParam('change', materialBlock);
    changeParam('change', optionsBlock);
    changeParam('input', promocodeBlock);

};

export default calc;