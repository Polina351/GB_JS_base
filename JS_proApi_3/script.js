'use strict';

const query = 'https://api.unsplash.com/photos/random?client_id=XrjxOd-PE6q6pqVhtErNhEG3soVMkHy061VdGov_BuY&count=1';
const image = document.querySelector('img');
const likeCounter = document.querySelector('.counter');
const author = document.querySelector('.author');
const like = document.querySelector('path');

const getData = (query) =>
    new Promise((resolve, reject) => {
        fetch(query)
            .then((response) => response.json())
            .then((data) => resolve(data))
            .catch((error) => reject(error));

    });

getData(query)
    .then((res) => {
       console.log(res);
       let[photo] = res;
       image.src = photo.urls.small;
       likeCounter.innerHTML = photo.likes;
       author.innerHTML = photo.user.first_name ?? photo.user.last_name;
    })
like.addEventListener('click', toggleLike);
function toggleLike() {
    if (like.classList.contains('like')) {
        likeCounter.innerHTML = String(+likeCounter.innerHTML - 1);
        like.classList.toggle('like');
    } else {
        likeCounter.innerHTML = String(+likeCounter.innerHTML + 1);
        like.classList.toggle('like');
    }
}
