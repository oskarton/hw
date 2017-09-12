
/* �� 4 - ������ � DOM */

/**
 * ������� ������ ������� ������� � ����� DIV, ��������� � ���� ��������� ���� � ������� ������������ �������
 *
 * @param {string} text - �����, ������� ���������� ��������� � div
 * @return {Element}
 */
function createDivWithText(text) {
    var div = document.createElement('div');
    div.innerHTML = text;

    return div;
}
/**
 * ������� ������ ������� ������� � ����� A, ���������� �������� ��� �������� href � ������� ������������ �������
 *
 * @param {string} hrefValue - �������� ��� �������� href
 * @return {Element}
 */
function createAWithHref(hrefValue) {
    var link = document.createElement('a');
    link.setAttribute('href', hrefValue);

    return link;
}

/**
 * ������� ������ ��������� ������� what � ������ �������� where
 *
 * @param {Element} what - ��� ���������
 * @param {Element} where - ���� ���������
 */
function prepend(what, where) {
	where.prepend(what);
}

/**
 * ������� ������ ��������� ��� �������� �������� �������� where
 * � ������� ������, ��������� �� ��� �������� ���������
 * ��������� ������� ������� �������� ������� � ����� P
 * �������� - �� �������
 *
 * @param {Element} where - ��� ������
 * @return {Array<Element>}
 *
 * @example
 * ��� html '<div></div><p></p><a></a><span></span><p></p>'
 * ������� ������ �������: [div, span]
 * �.�. ��������� ������� ���� ��������� �������� ������� � ����� P
 */
function findAllPSiblings(where) {
	var res = [];
	var childs = where.children;
    for (var i = 0; i < childs.length; i++) {
        if (i < (childs.length - 1) && childs[i].nextElementSibling.tagName == 'P') {
            res.push(childs[i]);
        }
    }

	return res;
}

/**
 * ������� ������ ��������� ��� �������� ���� ���� "�������" ������ where
 * � ������� ������, ��������� �� ���������� ����������� ������������ ���������
 * �� ������, ��� � ��� ��������� ������, ������� ����� ����� � ���������
 *
 * @param {Element} where - ��� ������
 * @return {Array<string>}
 */
function findError(where) {
    var result = [];

    for (var i = 0; i < where.children.length; i++) {
        result.push(where.children[i].innerText);
    }

    return result;
}

/**
 * ������� ������ ��������� ��� �������� ���� �������� where
 * � ������� �� ���� ��� ��������� ����
 * ��� ��������!
 * ������ ����������� ��� �������� �����,
 * ����� �������� ����������� ��������� ��� �������� �����
 *
 * @param {Element} where - ��� ������
 *
 * @example
 * ����� ���������� �������, ������ <div></div>������<p></p>loftchool!!!
 * ������ ���� ������������� � <div></div><p></p>
 */
function deleteTextNodes(where) {
    for (var i = 0; i < where.childNodes.length; i++) {
        if (where.childNodes[i].nodeType == Node.TEXT_NODE) {
            where.childNodes[i].remove();
        }
    }
}

/**
 * ��������� ���������� ������� � ������������� ��������
 * �� ���� ���������� �������� ������ ������� ��������� ��������
 *
 * @param {Element} where - ��� ������
 *
 * @example
 * ����� ���������� �������, ������ <span> <div> <b>������</b> </div> <p>loftchool</p> !!!</span>
 * ������ ���� ������������� � <span><div><b></b></div><p></p></span>
 */
function deleteTextNodesRecursive(where) {
    for (var i = where.childNodes.length - 1; i >= 0; i--) {
        if (where.childNodes[i].nodeType == 3) {
            where.childNodes[i].remove();
        } else {
            deleteTextNodesRecursive(where.childNodes[i]);
        }
    }
}

/**
 * *** �� ���������� ***
 * ���������� ������� ���������� �� ���� ����� ������ �������� root � ������� �� � ���� �������
 * ���������� ������ ���������:
 * - ���������� ��������� �����
 * - ���������� ��������� ������� ������
 * - ���������� ��������� ������� ����
 * ��� ������ � �������� ������������� ������������ �������� classList
 * ������������ �� ��������� ���������� ����������
 *
 * @param {Element} root - ��� �������� ����������
 * @return {{tags: Object<string, number>, classes: Object<string, number>, texts: number}}
 *
 * @example
 * ��� html <div class="some-class-1"><b>������!</b> <b class="some-class-1 some-class-2">loftschool</b></div>
 * ������ ���� ��������� ����� ������:
 * {
 *   tags: { DIV: 1, B: 2},
 *   classes: { "some-class-1": 2, "some-class-2": 1 },
 *   texts: 3
 * }
 */
function collectDOMStat(root, stat = { tags: {}, classes: {}, texts: 0 }) {
    var childs = root.childNodes;
    for (var i = 0; i < childs.length; i++) {
        if (childs[i].nodeType == 3) {
            stat.texts++;
        } else {
            collectDOMStat(childs[i], stat);
            var tagName = childs[i].tagName;
            if (stat.tags.hasOwnProperty(tagName)) {
                stat.tags[tagName]++;
            } else {
                stat.tags[tagName] = 1;
            }
            var tagClasses = childs[i].classList;
            for (var k = 0; k < tagClasses.length; k++) {
                if (stat.classes.hasOwnProperty(tagClasses[k])) {
                    stat.classes[tagClasses[k]]++;
                } else {
                    stat.classes[tagClasses[k]] = 1;
                }
            }
        }
    }

    return stat;
}

/**
 * *** �� ���������� ***
 * ������� ������ ����������� ���������� � �������� ��������� ������ �������� where
 * ��� ������ � where ����������� ��� ��������� ��������,
 * ���������� �������� �� ���� ��� ������ ������ ������� fn �� ����������� ����������
 * � �������� ��������� ������ ���� ������� ����� � ����� ����������:
 * - type: ���� ������� (insert ��� remove)
 * - nodes: ������ �� ��������� ��� ����������� ��������� (� ����������� �� �������)
 * ������������ ������ �������� ��� ����������� �� ������� �����������/��������� ���������
 * ������������� ������������ MutationObserver
 *
 * @param {Element} where - ��� �����������
 * @param {function(info: {type: string, nodes: Array<Element>})} fn - �������, ������� ���������� �������
 *
 * @example
 * ���� � where ��� � ������ �� ��� ����� ����������� ������� div
 * �� fn ������ ���� ������� � ����������:
 * {
 *   type: 'insert',
 *   nodes: [div]
 * }
 *
 * ------
 *
 * ���� �� where ��� �� ������ �� ��� ����� ��������� ������� div
 * �� fn ������ ���� ������� � ����������:
 * {
 *   type: 'remove',
 *   nodes: [div]
 * }
 */
function observeChildNodes(where, fn) {

}

export {
    createDivWithText,
    createAWithHref,
    prepend,
    findAllPSiblings,
    findError,
    deleteTextNodes,
    deleteTextNodesRecursive,
    collectDOMStat,
    observeChildNodes
};
