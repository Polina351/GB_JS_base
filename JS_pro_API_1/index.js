'use strict';

const myClasses = [];
const date = [
    {
        title: 'yoga',
        date: '07.11 18:00',
        maxPeople: 20,
        currentPeople: 15,
    },
    {
        title: 'pilates',
        date: '07.11 20:00',
        maxPeople: 20,
        currentPeople: 14,
    },
    {
        title: 'aerobics',
        date: '08.11 13:00',
        maxPeople: 20,
        currentPeople: 20,
    }
]

if (!getDate('classes')) {
    setDate('classes', date)
}
if (!getDate('myClasses')) {
    setDate('myClasses', myClasses)
}

const schedule = document.querySelector('.classes');
const userSchedule = document.querySelector('.userSchedule');

function getDate(key) {
    return JSON.parse(localStorage.getItem(key));
}
function setDate(key, date) {
    localStorage.setItem(key, JSON.stringify(date));
}

function printUserClasses() {
    const indexes = getDate('myClasses');
    const date = getDate('classes');
    indexes.forEach(element => {
        userSchedule.insertAdjacentHTML(
            'beforeend',
            `
                    <div class="class">
                        <h2 class="subtitle">${date[element].title}</h2>
                        <p class="date">${date[element].date}</p>
                    </div>
                
                 `
        )
    });
}
function printClasses(data) {
    data.forEach(element => {
        schedule.insertAdjacentHTML(
            'beforeend',
            `
                    <div class="class">
                        <h2 class="subtitle">${element.title}</h2>
                        <p class="date">${element.date}</p>
                        <p>Максимальное количество: ${element.maxPeople}</p>
                        <p>Записались: <span class="counter">${element.currentPeople}</span></p>
                        <button class="sign">Записаться</button>
                        <button class="cancel" disabled>Отменить запись</button>
                    </div>

                 `
        )
    });
}

printClasses(getDate('classes'));
printUserClasses();

const btnSign = document.querySelectorAll('.sign');
const countSign = document.querySelectorAll('.counter');
const btnCancel = document.querySelectorAll('.cancel');
const btnUpdate = document.querySelector('.update');

statusForBtns(btnSign, btnCancel);

btnUpdate.addEventListener('click', event => {
    userSchedule.innerHTML = '';
    printUserClasses();
});

btnSign.forEach((element, index) => {
    element.addEventListener('click', event => {
        sign(index);
    });
});

btnCancel.forEach((element, index) => {
    element.addEventListener('click', event => {
        cancel(index);
    });
});
function statusForBtns(btnSign, btnCancel) {
    const array = getDate('classes');
    const userArray = getDate('myClasses');
    btnSign.forEach((elem, index) => {
        if ((userArray.indexOf(index) >= 0)) {
            btnSign[index].setAttribute('disabled', '');
            btnCancel[index].removeAttribute('disabled', '');
        }
        if (array[index].currentPeople === 20) {
            btnSign[index].setAttribute('disabled', '');
        }
    });
}

function sign(index) {
    const array = getDate('classes');
    const userArray = getDate('myClasses');
    if (array[index].currentPeople < array[index].maxPeople) {
        countSign[index].innerHTML = ++array[index].currentPeople;
        btnSign[index].setAttribute('disabled', '');
        btnCancel[index].removeAttribute('disabled', '');
        userArray.push(index);
        setDate('classes', array);
        setDate('myClasses', userArray);

    }
}
function cancel(index) {
    const array = getDate('classes');
    const userArray = getDate('myClasses');
    if (array[index].currentPeople > 0) {
        countSign[index].innerHTML = --array[index].currentPeople;
        btnCancel[index].setAttribute('disabled', ''); // нужен класс, чтоб видно было, что она неактивна
        btnSign[index].removeAttribute('disabled', '');
        let indx = userArray.indexOf(index);
        userArray.splice(indx, 1);

        setDate('classes', array);
        setDate('myClasses', userArray);
    } else {
        console.log('не работает условие');
    }
}