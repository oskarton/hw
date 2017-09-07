
/* Р”Р— 3 - СЂР°Р±РѕС‚Р° СЃ РјР°СЃСЃРёРІР°РјРё Рё РѕР±СЉРµРµРєС‚Р°РјРё */

/*
 Р—Р°РґР°С‡Р° 1:
 РќР°РїРёС€РёС‚Рµ Р°РЅР°Р»РѕРі РІСЃС‚СЂРѕРµРЅРЅРѕРіРѕ РјРµС‚РѕРґР° forEach РґР»СЏ СЂР°Р±РѕС‚С‹ СЃ РјР°СЃСЃРёРІР°РјРё
 */
function forEach(array, fn) {
	for(var i = 0; i < array.length; i++) {
		fn(array[i], i, array);
	}
}

/*
 Р—Р°РґР°С‡Р° 2:
 РќР°РїРёС€РёС‚Рµ Р°РЅР°Р»РѕРі РІСЃС‚СЂРѕРµРЅРЅРѕРіРѕ РјРµС‚РѕРґР° map РґР»СЏ СЂР°Р±РѕС‚С‹ СЃ РјР°СЃСЃРёРІР°РјРё
 */
function map(array, fn) {
	var changed = [];
	for(var i = 0; i < array.length; i++) {
		changed.push(fn(array[i], i, array));
	}

	return changed;
}

/*
 Р—Р°РґР°С‡Р° 3:
 РќР°РїРёС€РёС‚Рµ Р°РЅР°Р»РѕРі РІСЃС‚СЂРѕРµРЅРЅРѕРіРѕ РјРµС‚РѕРґР° reduce РґР»СЏ СЂР°Р±РѕС‚С‹ СЃ РјР°СЃСЃРёРІР°РјРё
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
 Р—Р°РґР°С‡Р° 4:
 Р¤СѓРЅРєС†РёСЏ РїСЂРёРЅРёРјР°РµС‚ РѕР±СЉРµРєС‚ Рё РёРјСЏ СЃРІРѕР№СЃС‚РІР°, РєРѕС‚РѕСЂРѕРµ РЅРµРѕР±С…РѕРґРёРѕРј СѓРґР°Р»РёС‚СЊ РёР· РѕР±СЉРµРєС‚Р°
 Р¤СѓРЅРєС†РёСЏ РґРѕР»Р¶РЅР° СѓРґР°Р»РёС‚СЊ СѓРєР°Р·Р°РЅРЅРѕРµ СЃРІРѕР№СЃС‚РІРѕ РёР· СѓРєР°Р·Р°РЅРЅРѕРіРѕ РѕР±СЉРµРєС‚Р°
 */
function deleteProperty(obj, prop) {
	delete obj[prop];
}

/*
 Р—Р°РґР°С‡Р° 5:
 Р¤СѓРЅРєС†РёСЏ РїСЂРёРЅРёРјР°РµС‚ РѕР±СЉРµРєС‚ Рё РёРјСЏ СЃРІРѕР№СЃС‚РІР° Рё РІРѕР·РІСЂР°С‰Р°РµС‚ true РёР»Рё false
 Р¤СѓРЅРєС†РёСЏ РґРѕР»Р¶РЅР° РїСЂРѕРІРµСЂРёС‚СЊ СЃСѓС‰РµСЃС‚РІСѓРµС‚ Р»Рё СѓРєР·Р°Р°РЅРЅРѕРµ СЃРІРѕР№СЃС‚РІРѕ РІ СѓРєР°Р·Р°РЅРЅРѕРј РѕР±СЉРµРєС‚Рµ
 */
function hasProperty(obj, prop) {
	if(prop in obj) {
		return true;
	} else {
		return false;
	}
}

/*
 Р—Р°РґР°С‡Р° 6:
 Р¤СѓРЅРєС†РёСЏ РґРѕР»Р¶РЅР° РїРѕР»СѓС‡РёС‚СЊ РІСЃРµ РїРµСЂРµС‡РёСЃР»СЏРµРјС‹Рµ СЃРІРѕР№СЃС‚РІР° РѕР±СЉРµРєС‚Р° Рё РІРµСЂРЅСѓС‚СЊ РёС… РІ РІРёРґРµ РјР°СЃСЃРёРІР°
 */
function getEnumProps(obj) {
	var props = [];
	for(var key in obj) {
		props.push(key);
	}

	return props;
}

/*
 Р—Р°РґР°С‡Р° 7:
 Р¤СѓРЅРєС†РёСЏ РґРѕР»Р¶РЅР° РїРµСЂРµР±СЂР°С‚СЊ РІСЃРµ СЃРІРѕР№СЃС‚РІР° РѕР±СЉРµРєС‚Р°, РїСЂРµРѕР±СЂР°Р·РѕРІР°С‚СЊ РёС… РёРјРµРЅР° РІ РІРµСЂС…РЅРёР№ СЂРµРіРёСЃС‚СЂР° Рё РІРµСЂРЅСѓС‚СЊ РІ РІРёРґРµ РјР°СЃСЃРёРІР°
 */
function upperProps(obj) {
	var props = [];
	for(var key in obj) {
		props.push(key.toUpperCase());
	}

	return props;
}

/*
 Р—Р°РґР°С‡Р° 8 *:
 РќР°РїРёС€РёС‚Рµ Р°РЅР°Р»РѕРі РІСЃС‚СЂРѕРµРЅРЅРѕРіРѕ РјРµС‚РѕРґР° slice РґР»СЏ СЂР°Р±РѕС‚С‹ СЃ РјР°СЃСЃРёРІР°РјРё
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
 Р—Р°РґР°С‡Р° 9 *:
 Р¤СѓРЅРєС†РёСЏ РїСЂРёРЅРёРјР°РµС‚ РѕР±СЉРµРєС‚ Рё РґРѕР»Р¶РЅР° РІРµСЂРЅСѓС‚СЊ Proxy РґР»СЏ СЌС‚РѕРіРѕ РѕР±СЉРµРєС‚Р°
 Proxy РґРѕР»Р¶РµРЅ РїРµСЂРµС…РІР°С‚С‹РІР°С‚СЊ РІСЃРµ РїРѕРїС‹С‚РєРё Р·Р°РїРёСЃРё Р·РЅР°С‡РµРЅРёР№ СЃРІРѕР№СЃС‚РІ Рё РІРѕР·РІРѕРґРёС‚СЊ СЌС‚Рѕ Р·РЅР°С‡РµРЅРёРµ РІ РєРІР°РґСЂР°С‚
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
