import {createModal} from "./modal.js";
import {createListOfProducts} from "./createListOfProducts.js";

const addReviewBtn = document.querySelector('.add_review');
addReviewBtn.addEventListener('click', createModal);
createListOfProducts();