import {createListOfProducts} from "./createListOfProducts.js";

export function saveReview() {
    const currentReview = readDateFromForm();
    saveReviewInLocalStorage(currentReview);
    console.log(currentReview);
}

function readDateFromForm() {
    const name = document.querySelector('.name_product').value;
    const textReview = document.querySelector('.review_product').value;
    return {
        key: name,
        text: textReview
    }
}
function saveReviewInLocalStorage(objData) {
    const key = `product_${objData.key}`;
    const dateFromLocalStorage = JSON.parse(localStorage.getItem(key));
    if (dateFromLocalStorage) {
        dateFromLocalStorage.push(objData.text);
        localStorage.setItem(key, JSON.stringify(dateFromLocalStorage));
    } else {
        localStorage.setItem(key, JSON.stringify([objData.text]));
    }
    createListOfProducts();
}
