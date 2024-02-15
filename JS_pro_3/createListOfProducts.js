import {createElem} from "./modal.js";
import {showReview} from "./showReview.js";

export function createListOfProducts() {
    const listBox = document.querySelector('.list_product');
    listBox.innerHTML = '';
    const keys = getKeysFromLocalStorage();
    for (let i = 0; i < keys.length; i++) {
        const listItem = createElem('li', 'li');
        const productName = createElem('h3', '');
        productName.innerHTML = keys[i].replace('product_', '');
        const seeBtn = createElem('button', 'btn');
        seeBtn.id = keys[i];
        seeBtn.innerHTML = 'Отзывы';
        seeBtn.addEventListener('click', showReview);
        listItem.append(productName);
        listItem.append(seeBtn);
        listBox.append(listItem);
    }
}

function getKeysFromLocalStorage() {
    const keys = [];
    for(let i=0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key.startsWith('product')) {
            keys.push(key);
        }
    }
    return keys;
}