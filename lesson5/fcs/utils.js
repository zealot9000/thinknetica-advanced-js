/**
 * Отобразить данные из data в элементы с data-field
 * @param {HTMLElement} element HTML Элемент
 * @param {Object} data Данные
 */
function replaceDataField(element, data) {
    if (!element)
        throw new Error('element must be HTMLElement');

    if (element.dataset) {
        const field = element.dataset.field;
        console.log(field, element);
        if (field) {
            if (field in data)
                element.textContent = data[field];
            else
                throw new Error(`Field "${field}" required`);
        }
    }

    Array.from(element.children).forEach(el => replaceDataField(el, data));
}

/**
 * Отобразить массив данных по шаблону
 * @param {HTMLElement} template
 * @param {HTMLElement} target
 * @param {Object[]} data
 */
function displayArray(template, target, data) {
    if (!template)
        throw new Error('Template must be exists');

    if (!target)
        throw new Error('Target must be HTMLElement');

    console.log(template);

    Array.from(target.childNodes).forEach(item => item.remove());

    const items = data.map(value => {
        const clone = template.content.cloneNode(true);
        console.log(clone);
        replaceDataField(clone, value);
        return clone;
    });

    target.append(...items);
}
