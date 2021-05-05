const regBtn = document.querySelector('#registration'),
    loginBtn = document.querySelector('#login'),
    userName = document.querySelector('#username'),
    lest = document.querySelector('#list')

let usersData = [];

if (localStorage.getItem('usersData')) {
    usersData = JSON.parse(localStorage.getItem('usersData'));
}

function render() {
    list.textContent = '';
    usersData.forEach((elem) => {
        const listItem = document.createElement('li');
        list.appendChild(listItem);
        let name = elem.firstName;
        let lastName = elem.lastName;
        let date = elem.regDate;

        listItem.innerHTML = `<div> Имя: ${name}, Фамилия: ${lastName}, зарегестрирован: ${date} 
                                <button id="remove">удалить</button>
                             </div>`;

        list.append(listItem);

        const removeBtn = listItem.querySelector('#remove');
        removeBtn.addEventListener('click', function() {
            const index = usersData.indexOf(elem)
            
            if (index > -1) {
                usersData.splice(index, 1);
                localStorage.setItem('usersData', JSON.stringify(usersData))
            }
            render();
        })
    })
}

function start() {
    let newUser = {
        firstName: '',
        lastName: '',
        login: '',
        userPassword: '',
        regDate: ''
    }

    let userData,
        date = new Date(),
        dayOfMonth = date.getDate(),
        month = date.getMonth(),
        year = date.getFullYear(),
        hour = date.getHours(),
        minutes = date.getMinutes(),
        seconds = date.getSeconds();

    function getMonthName() {
        let monthName;
        let monthRus = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
        monthRus.forEach((el) => {
            monthName = monthRus[month];
            if (monthName === 'Март' || monthName === 'Август') {
                monthName = `${monthName}a`;
            } else {
                monthName = `${monthName.substring(0, (el.length - 2))}я`;
            }
        })
        return monthName;
    }

    function convertNumber(num) {
        let prefix = '0';
        num = num.toString();
        if (num.length === 1) {
            num = `${prefix}${num}`;
        }
        return num;
    }

    newUser.regDate = `${dayOfMonth} ${getMonthName()} ${year}г., ${hour}:${convertNumber(minutes)}:${seconds};`

    while (userData === '' || (userData || '').trim() === '' || userData.split(' ').length > 2 || userData.trim().split(' ').length == 1) {
        userData = prompt('Введите Имя и Фамилию через пробел:');
        newUser.firstName = userData.split(' ')[0];
        newUser.lastName = userData.split(' ')[1];
    }

    while (newUser.login === '' || newUser.login.trim() === '') {
        newUser.login = prompt('Ведите логин:');
    }

    while (newUser.userPassword === '' || newUser.userPassword.trim() === '') {
        newUser.userPassword = prompt('Ведите пароль:');
    }

    usersData.push(newUser);

    render();
    localStorage.setItem('usersData', JSON.stringify(usersData))
}

function autorizate() {
    let showName, fistLetter, currentUser,
    login = '',
    password = '';

    while (login === '' || login.trim() === '') {
        login = prompt('Ведите логин:');
    }

    while (password === '' || password.trim() === '') {
        password = prompt('Ведите пароль:');
    }
    
     usersData.forEach(elem => {
        if (login === elem.login && password === elem.userPassword) {
            currentUser = elem;
            console.log(currentUser);
            fistLetter = currentUser.firstName.split('')[0];
            showName = fistLetter.toUpperCase().concat(currentUser.firstName.slice(1, 20));
        } 
    });

    
    currentUser = (currentUser) ? document.querySelector('#username').textContent = showName : alert(`Пользователь c именем ${login} не найден`)
}

regBtn.addEventListener('click', start);
loginBtn.addEventListener('click', autorizate)

render();
