/* �� 1 - ������� */

/*
 ������� 1:

 ������� ������ ��������� ���� �������� � ���������� ���
 */
function returnFirstArgument(arg) {
	return arg;
}

/*
 ������� 2:

 ������� ������ ��������� ��� ��������� � ���������� ����� ���������� ��������
 �������� �� ��������� ������� ��������� ������ ���� 100
 */
function defaultParameterValue(a, b) {
	b = b || 100;

	return a + b;
}

/*
 ������� 3:

 ������� ������ ���������� ��� ���������� � ��� ��������� � ���� �������
 ���������� ���������� ���������� ������� ����������
 */
function returnArgumentsArray() {
	var arr = [];

	for (var i = 0; i < arguments.length; i++) {
		arr.push(arguments[i]);
	}

	return arr;
}

/*
 ������� 4:

 ������� ������ ��������� ������ ������� � ���������� ��������� ������ ���������� �������
 */
function returnFnResult(fn) {
	return fn();
}

/*
 ������� 5:

 ������� ������ ��������� ����� (�������� �� ��������� - 0) � ���������� ������� (F)
 ��� ������ F, ���������� ����� ������ ���� ��������� �� ������� � ���������� �� F
 */
function returnCounter(number) {
	number = number || 0;

	return function fn() {
		number++;
		return number;
	}
}

/*
 ������� 6 *:

 ������� ������ ��������� ������ ������� (F) � ��������� ���������� �������������� ����������
 ������� ������ ��������� ���������� ��������� � ������� F � ������� ������������ �������
 */
function bindFunction(fn) {
	var args = arguments;
	function fn(args) {
    	return args;
  	}
	var result = fn.bind(result);
	return result;
}

export {
    returnFirstArgument,
    defaultParameterValue,
    returnArgumentsArray,
    returnFnResult,
    returnCounter,
    bindFunction
}
