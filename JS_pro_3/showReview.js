import {createElem} from "./modal.js";
import {createListOfProducts} from "./createListOfProducts.js";

export function showReview() {
    document.querySelector('.product_name')
        .innerHTML = this.id.replace('product_', '');
    const listUl = document.querySelector('.list_review');
    listUl.innerHTML = '';
    const reviews = JSON.parse(localStorage.getItem(this.id));
    for (let i = 0; i < reviews.length; i++) {
        listUl.append(createListReviewElem(reviews, i));
    }
}

function createListReviewElem(arrayList, index) {
    const liElem = createElem('li', 'li_elem', 'li');
    const pText = createElem('p', 'text');
    pText.innerHTML = arrayList[index];
    const btnDeleteReview = createElem('button', 'delete', 'btn');
    btnDeleteReview.innerHTML = 'Удалить';
    liElem.addEventListener('click', deleteReviewOnPage);
    liElem.append(pText);
    liElem.append(btnDeleteReview);
    liElem.id = index;
    return liElem;
}

function deleteReviewOnPage(event) {
    if (event.target.tagName === 'BUTTON') {
        this.remove();
    }
    updateReviewsInLocalStorage(this);
}

function updateReviewsInLocalStorage(elem) {
    const key = `product_${document.querySelector('.product_name').innerHTML}`;
    const currentReviews = JSON.parse(localStorage.getItem(key));
    const index = Number(elem.id);
    if (currentReviews.length <= 1) {
        localStorage.removeItem(key);
        document.querySelector('.product_name').innerHTML = '';
        createListOfProducts();
    } else {
        currentReviews.splice(index, 1);
        localStorage.setItem(key, JSON.stringify(currentReviews));
    }
}
