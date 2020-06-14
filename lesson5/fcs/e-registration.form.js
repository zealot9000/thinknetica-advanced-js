const form = document.getElementById('e-registration-form');

form.addEventListener('submit', submitHandler);

/**
 * Обработчик отправки формы
 * @param {KeyboardEvent} event
 */
function submitHandler(event) {
    // прерываем всплытие что бы форма не отправлялась
    event.preventDefault();

    const formData = {
        ticket: form.elements.ticket.value,
        fullName: form.elements.fullname.value,
    };

    try {
        eRegistration(world.flights, formData.ticket, formData.fullName);
        alert('You successfully registered');
    } catch (error) {
        console.error(error);
        alert(error.message);
    }

    updateView();
}

const input = document.getElementsByTagName('input')[0];

input.addEventListener('keydown', handler);
// input.addEventListener('keypress', handler);
// input.addEventListener('keyup', handler);

window.addEventListener('keydown', handler);

/**
 * @param {KeyboardEvent} event
 */
function handler(event) {
    // console.log(event.type, event.key, event.code);

    if (event.code == 'KeyS' && event.ctrlKey) {
        event.preventDefault();

    }
}

