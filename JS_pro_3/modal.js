import {saveReview} from "./saveReview.js";

/**
 * Создает element DOM c присвоением классов
 * @param {string} tag
 * @param {string} classNames один или несколько
 * @returns {object} dom element
 */
export function createElem(tag, ...classNames) {
    let elem = document.createElement(tag);
    elem.className = classNames.join(' ');
    return elem;
}
const addReviewBtn = document.querySelector('.add_review');

export function createModal() {

    const modalBg = createElem('div', 'modal_bg', 'del');
    document.body.append(modalBg);

    const modal = createElem('div', 'modal', 'del');
    modalBg.append(modal);

    const nameProduct = createElem('input', 'name_product');
    modal.append(nameProduct);
    nameProduct.placeholder = 'Название продукта';
    nameProduct.title = 'Название продукта';

    const textReview = createElem('textarea', 'review_product');
    modal.append(textReview);
    textReview.placeholder = 'Ваш отзыв';
    textReview.title = 'Ваш отзыв';

    const modalBtn = createElem('button', 'modal-btn');
    modal.append(modalBtn);
    modalBtn.append('Отправить?')

    modalBtn.addEventListener('click', saveReview);
    modalBtn.addEventListener('click', () => {
        setTimeout(() => {
            modalBg.remove();
            modal.remove();
        },100)
    });

    setTimeout(() => {
        modalBg.classList.add('open');
        modal.classList.add('open');
    }, 1);
}