const cities = document.querySelector('#city'),
      country = document.querySelector('#country'),
      result = document.querySelector('.result');


cities.style.display = 'none';

const cityArr = {
    rus: ['Москва', 'Санк-Петербург', 'Новосибирск', 'Екатеринбург', 'Нижний Новгород', 'Казань', 'Челябинск'],
    uk: ['Киев', 'Харьков', 'Одесса', 'Днепр', 'Донецк', 'Запорожье', 'Львов'],
    bel: ['Минск', 'Гомель', 'Могилёв', 'Витебск', 'Гродно', 'Брест'],
    jap: ['Токио', 'Киото', 'Осака', 'Иокогама'], 

    createList: function(arr, name) {
        arr.forEach((item, index) => {
            item = document.createElement('option');
            item.text = arr[index];
            item.value = arr[index];
            item.setAttribute('class', name)
            cities.appendChild(item);
        })

        let allCities = cities.querySelectorAll('option');
        allCities.forEach(el => {
            if (!el.classList.contains(name)) {
                el.remove();
            };
        })
    },

    showCities:function() {
        country.addEventListener('change', function(e){
            cities.style.display = 'inline-block';
            let currentCity = '',
            currentCountry;

            if (country.value === 'rus') {
                cityArr.createList(cityArr.rus, 'ru');
                currentCountry = 'Россия';
            } else if (country.value === 'uk') {
                cityArr.createList(cityArr.uk, 'uk');
                currentCountry = 'Украина';
            } else if (country.value === 'bel') {
                cityArr.createList(cityArr.bel, 'bel');
                currentCountry = 'Беларусь';
            } else if (country.value === 'jap') {
                cityArr.createList(cityArr.jap, 'jap');
                currentCountry = 'Япония';
            } else {
                cities.style.display = 'none';
            }

            cities.addEventListener('click', (e) => {
                currentCity = cities.value;
                result.textContent = currentCountry + ', ' + currentCity;
            })

        })
    },

}

cityArr.showCities()

