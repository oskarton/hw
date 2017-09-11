/* �� 5 - DOM Events */

/**
 * ������� ������ ��������� ���������� fn ������� eventName � �������� target
 *
 * @param {string} eventName - ��� �������, �� ������� ����� �������� ����������
 * @param {Element} target - �������, �� ������� ����� �������� ����������
 * @param {function} fn - ����������
 */
function addListener(eventName, target, fn) {
}

/**
 * ������� ������ ������� ���������� fn ������� eventName � �������� target
 *
 * @param {string} eventName - ��� �������, ��� �������� ����� ������� ����������
 * @param {Element} target - �������, � �������� ����� ������� ����������
 * @param {function} fn - ����������
 */
function removeListener(eventName, target, fn) {
}

/**
 * ������� ������ ��������� � target ���������� ������� eventName, ������� ������ �������� �������� �� ���������
 *
 * @param {string} eventName - ��� �������, ��� �������� ����� ������� ����������
 * @param {Element} target - �������, �� ������� ����� �������� ����������
 */
function skipDefault(eventName, target) {
}

/**
 * ������� ������ ����������� ������� click ��� �������� target
 *
 * @param {Element} target - �������, �� ������� ����� �������� ����������
 */
function emulateClick(target) {
}

/**
 * ������� ������ �������� ����� ���������� ������ � �������� target
 * ������� ��������� (�������� fn) ������ �� ����� �� ��������� BUTTON ������ target
 *
 * @param {Element} target - �������, �� ������� ����� �������� ����������
 * @param {function} fn - �������, ������� ����� ������� ��� ����� �� ������� BUTTON ������ target
 */
function delegate(target, fn) {
}

/**
 * *** �� ���������� ***
 * ������� ������ �������� ����� ���������� ������ � �������� target
 * ������� ��������� ������ ���� ��� � ��������
 * ������������ �� ��������� ���������� ����������
 *
 * @param {Element} target - �������, �� ������� ����� �������� ����������
 * @param {function} fn - ����������
 */
function once(target, fn) {
}

export {
    addListener,
    removeListener,
    skipDefault,
    emulateClick,
    delegate,
    once
};