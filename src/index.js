
/* ДЗ 3 - работа с массивами и объеектами */

/*
 Задача 1:
 Напишите аналог встроенного метода forEach для работы с массивами
 */
function forEach(array, fn) {
	for(var i = 0; i < array.length; i++) {
		fn(array[i], i, array);
	}
}

/*
 Задача 2:
 Напишите аналог встроенного метода map для работы с массивами
 */
function map(array, fn) {
	var changed = [];
	for(var i = 0; i < array.length; i++) {
		changed.push(fn(array[i], i, array));
	}

	return changed;
}

/*
 Задача 3:
 Напишите аналог встроенного метода reduce для работы с массивами
 */
function reduce(array, fn, initial) {
	var i = 1;
	var prev = array[0];
	if(initial !== undefined) {
		prev = initial;
		i = 0;
	}
	for(i; i < array.length; i++) {
		prev = fn(prev, array[i], i, array);
	}

	return prev;
}

/*
 Задача 4:
 Функция принимает объект и имя свойства, которое необходиом удалить из объекта
 Функция должна удалить указанное свойство из указанного объекта
 */
function deleteProperty(obj, prop) {
	delete obj[prop];
}

/*
 Задача 5:
 Функция принимает объект и имя свойства и возвращает true или false
 Функция должна проверить существует ли укзаанное свойство в указанном объекте
 */
function hasProperty(obj, prop) {
	if(prop in obj) {
		return true;
	} else {
		return false;
	}
}

/*
 Задача 6:
 Функция должна получить все перечисляемые свойства объекта и вернуть их в виде массива
 */
function getEnumProps(obj) {
	var props = [];
	for(var key in obj) {
		props.push(key);
	}

	return props;
}

/*
 Задача 7:
 Функция должна перебрать все свойства объекта, преобразовать их имена в верхний регистра и вернуть в виде массива
 */
function upperProps(obj) {
	var props = [];
	for(var key in obj) {
		props.push(key.toUpperCase());
	}

	return props;
}

/*
 Задача 8 *:
 Напишите аналог встроенного метода slice для работы с массивами
 */
function slice(array, from = 0, to = array.length) {
	var sliced = [];
	if(Math.abs(to) > array.length) {
		to = array.length;
	} else if(Math.abs(from) > array.length) {
		from = array.length;
	}
	if(to < from) {
	    if(to < 0){
	    	to = array.length + to;
	    } else {
	    	to = array.length;
	    }
	}
	for(var i = from; i < to; i++) {
		sliced.push(array[i]);
	}

	return sliced;
}

/*
 Задача 9 *:
 Функция принимает объект и должна вернуть Proxy для этого объекта
 Proxy должен перехватывать все попытки записи значений свойств и возводить это значение в квадрат
 */
function createProxy(obj) {
}

export {
    forEach,
    map,
    reduce,
    deleteProperty,
    hasProperty,
    getEnumProps,
    upperProps,
    slice,
    createProxy

};
