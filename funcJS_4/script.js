/*
    Необходимо получить список всех пользователей с помощью бесплатного
    API (https://jsonplaceholder.typicode.com/users) и отобразить их на
    странице. Пользователь должен иметь возможность удалить любого
    пользователя из списка. Данные при получении необходимо сохранить
    в локальное хранилище браузера localStorage. При удалении пользователь
    должен удаляться не только со страницы, но и из локального хранилища localStorage
*/

const url = 'https://jsonplaceholder.typicode.com/users';

const getData = (url) =>
	new Promise((resolve, reject) => {
		fetch(url)
			.then((response) => response.json())
			.then((data) => resolve(data))
			.catch((error) => reject(error));
	});

getData(url)
	.then((data) => localStorage.setItem('users',JSON.stringify(data)))
	.catch((error) => console.log('Error'));

const userCards = document.querySelector('.users');
let users = JSON.parse(localStorage.getItem('users'));

createCards(users);
function createCards(users) {
    users.forEach(element => {
        userCards.insertAdjacentHTML(
            'beforeend',
            `
            <div class="user">
                <p class="name">Name: <span class=" value nameValue">${element.name}</span></p>
                <p class="phone">Phone: <span class="value valuenameValue">${element.phone}</span>
                <p class="username">Username: <span class="value nameValue">${element.username}</span></p>
                <p class="website">Website: <span class=" value nameValue">${element.website}</span></p>
                <button class="btn">Delete</button>
            </div>
            `
        )
    });
}
const cards = document.querySelectorAll('.user');
const btns = document.querySelectorAll('.user>.btn');

for (let i = 0; i < cards.length; i++) {
    btns[i].addEventListener('click', () => {
        cards[i].remove();
        deleteUserFromLocalStorage(i);
    });
}

function deleteUserFromLocalStorage(idValue) {
    const result = users.filter((elem) => elem.id != (idValue + 1));
    users = result;
    localStorage.setItem('users', JSON.stringify(users));
}