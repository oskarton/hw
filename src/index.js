/* �� 2 - ������ � ������������ � ���������� */

/*
 ������ 1:
 ������� ��������� ������ � ����������� ������� � ������ ������� true ��� false
 ������� ������ ������� true ������ ���� fn ������� true ��� ���� ��������� �������
 ���������� ����������� ���������� � �������:
 - array �� ������ ��� ������ ������ (� ������� "empty array")
 - fn �� �������� �������� (� ������� "fn is not a function")
 ��������� ������������ ���������� ������ ��� ������ � ���������
 */
function isAllTrue(array, fn) {
	if(!Array.isArray(array) || array.length == 0) {
		throw new Error('empty array');
    }
    if(typeof(fn) !== 'function') {
		throw new Error('fn is not a function');
    } else {
		var check = true;
		for(var i = 0; i < array.length; i++) {
			if(!fn(array[i])) {
				check = false;
			}
		}
		return check;
    }
}

/*
 ������ 2:
 ������� ��������� ������ � ����������� ������� � ������ ������� true ��� false
 ������� ������ ������� true ���� fn ������� true ���� �� ��� ������ �� ��������� �������
 ���������� ����������� ���������� � �������:
 - array �� ������ ��� ������ ������ (� ������� "empty array")
 - fn �� �������� �������� (� ������� "fn is not a function")
 ��������� ������������ ���������� ������ ��� ������ � ���������
 */
function isSomeTrue(array, fn) {
	if(!Array.isArray(array) || array.length == 0) {
		throw new Error('empty array');
    }
    if(typeof(fn) !== 'function') {
		throw new Error('fn is not a function');
    } else {
		var check = false;
		for(var i = 0; i < array.length; i++) {
			if(fn(array[i])) {
				check = true;
			}
		}
		return check;
    }
}

/*
 ������ 3:
 ������� ��������� ������� ����������� ���������� ����������, ������ �� ������� �������� ������� fn
 ������� ������ ���������� ������� fn ��� ������� ����������� ��������� (����� ����� fn)
 ������� ������ ������� ������ ����������, ��� ������� fn ��������� ����������
 ���������� ����������� ���������� � �������:
 - fn �� �������� �������� (� ������� "fn is not a function")
 */
function returnBadArguments(fn, ...rest) {
	if(typeof(fn) !== 'function') {
		throw new Error('fn is not a function');
    } else {
		var exceptions = [];
		for(var i = 0; i < rest.length; i++) {
			try{
				fn(rest[i]);
			} catch(e) {
				exceptions.push(rest[i]);
			}
		}
		return exceptions;
    }
}

/*
 ������ 4:
 ������� ����� �������� number (�� ��������� - 0)
 ������� ������ ������� ������, � �������� ������ ���� ��������� �������:
 - sum - ���������� number � ����������� �����������
 - dif - �������� �� number ���������� ���������
 - div - ����� number �� ������ ��������. ��������� ������� �� ��������� �������� (���� �������) � ��� �����
 - mul - �������� number �� ������ ��������. ��������� ���������� �� ��������� �������� (���� �������) � ��� �����

 ���������� ������������ � ������ ���������� ������� ����������
 ���������� ����������� ���������� � �������:
 - number �� �������� ������ (� ������� "number is not a number")
 - �����-���� �� ���������� div �������� ����� (� ������� "division by 0")
 */
function calculator(number = 0) {
	if(typeof(number) !== 'number') {
		throw new Error('number is not a number');
	}
	var obj = {
		sum: function() {
			var result = number;
			for(var i = 0; i < arguments.length; i++) {
				result += arguments[i];
			}
			return result;
		},
		dif: function() {
			var result = number;
			for(var i = 0; i < arguments.length; i++) {
				result -= arguments[i];
			}
			return result;
		},
		div: function() {
			var result = number;
			for(var i = 0; i < arguments.length; i++) {
				if(arguments[i] == 0) {
					throw new Error('division by 0');
				}
				result = result / arguments[i];
			}
			return result;
		},
		mul: function() {
			var result = number;
			for(var i = 0; i < arguments.length; i++) {
				result = result * arguments[i];
			}
			return result;
		}
	}

	return obj;
}

export {
    isAllTrue,
    isSomeTrue,
    returnBadArguments,
    calculator
};
