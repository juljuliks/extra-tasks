
// Функция-фильтр,принимает тип и значения, возвращающая только те значение которые соответствуют типу - typeof(value)
const filterByType = (type, ...values) => values.filter(value =>  typeof value === type),
// Функция разбивает все DOM-элементы с указанным селектором на массив и каждому элементу этого массива добавляется display: none
	hideAllResponseBlocks = () => {
		// разбивает все DOM-элементы с указанным селектором на массив
		const responseBlocksArray = Array.from(document.querySelectorAll('div.dialog__response-block'));
		// каждому элементу этого массива добавляется display: none
		responseBlocksArray.forEach(block => block.style.display = 'none');
	},
// Ф-ция принимающая селектор, текст и спан
	showResponseBlock = (blockSelector, msgText, spanSelector) => {
		// Скрываем все response-block
		hideAllResponseBlocks();
		// Добавляем селектору(из аргументов этой ф-ции) display: none
		document.querySelector(blockSelector).style.display = 'block';
		// Если есть спан(из аргументов этой ф-ции)
		if (spanSelector) {
			// тогда его textContent = тексту(из аргументов этой ф-ции)
			document.querySelector(spanSelector).textContent = msgText;
		}
	},
// Ф-ция (с аргументом текст) выводящая ошибки = вызывает ф-цию showResponseBlock, передает туда селектор, текст(из аргументов текущей ф-ции и эл-т с id спана для ошибок)
	showError = msgText => showResponseBlock('.dialog__response-block_error', msgText, '#error'),
// Ф-ция (с аргументом текст) выводящая положительный результат = вызывает ф-цию showResponseBlock, передает туда селектор, текст(из аргументов текущей ф-ции и эл-т с id спана для положительного результата)
	showResults = msgText => showResponseBlock('.dialog__response-block_ok', msgText, '#ok'),
// Ф-ция показывающая рез-т, когда не найдено совпадений, вызывает ф-цию showResponseBlock, передает туда селектор)
	showNoResults = () => showResponseBlock('.dialog__response-block_no-results'),
// Ф-ция отлавляивающая ошибки, принимает тип и значение
	tryFilterByType = (type, values) => {
		// Выполнится следущий код если введенные данные корректны
		try {
			// Вызываем filterByType, передаем аргументы текущей ф-ции, соединяем их запятой и присваеваем полученный массив переменной valuesArray
			const valuesArray = eval(`filterByType('${type}', ${values})`).join(", ");
			// Сообщение пользователю будет: если valuesArray не пустой массив
			const alertMsg = (valuesArray.length) ?
			// то данные с типом (из аргументов текущей ф-ции) : массив значений(valuesArray)
				`Данные с типом ${type}: ${valuesArray}` :
			// если valuesArray пустой массив то сообщение пользователю будет что отсутствуют данные с типом (из аргументов текущей ф-ции)
				`Отсутствуют данные типа ${type}`;
			// передаем полученное сообщение пользователю в функцию отображающую результат
			showResults(alertMsg);
		// Выполнится следущий код если будут некорректные данные
		} catch (e) {
			// Выведем сообщние с ошибкой
			showError(`Ошибка: ${e}`);
		}
	};
// Получаем эл-т с указанным селектором
const filterButton = document.querySelector('#filter-btn');
// Вешаем на полученный эл-т обработчик событий по клику, в коллбэк-ф-цию передадим глобальный объект event(e)
filterButton.addEventListener('click', e => {
// Получаем эл-т с указанным селектором
	const typeInput = document.querySelector('#type');
// Получаем эл-т с указанным селектором(2)
	const dataInput = document.querySelector('#data');

	// Если значение эл-та dataInput пустое
	if (dataInput.value === '') {
		// Установим специальное сообщение для dataInput
		dataInput.setCustomValidity('Поле не должно быть пустым!');
		// Отображаем пользователю что совпадений не найдено
		showNoResults();
		// Если значение эл-та dataInput не пустое
	} else {
		// Уберем специальное сообщение
		dataInput.setCustomValidity('');
		// Предотвратим стандартное поведение браузера
		e.preventDefault();
		// В ф-цию tryFilterByType передадим в качестве аргументом значения typeInput и dataInput предварительно очистив их от пробелов в начале и конце
		tryFilterByType(typeInput.value.trim(), dataInput.value.trim());
	}
});

