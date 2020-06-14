'use strict';

/**
 * Функция пробует произвести электронную регистрацию пассажира
 *
 *  * проверка билета
 *  * проверка данных пассажира
 *  * в информации о рейсе указано время начала
 *  * и конца электронной регистрации
 *
 * @param {World.flights} flights Все рейсы
 * @param {string} ticketNumber номер билета
 * @param {string} fullName имя пассажира
 * @param {number} nowTime текущее время
 * @returns {boolean} если успешно или ошибка
 */
function eRegistration(flights, ticketNumber, fullName, nowTime) {
    const flight = flights[ticketNumber.split('-')[0]];

    if (!flight)
        throw new Error('Flight not found');

    if (nowTime < flight.registrationStarts)
        throw new Error('Check-in has not started yet');

    if (nowTime >= flight.registartionEnds)
        throw new Error('Check-in is over');

    const ticket = flight.tickets.find(ticket => ticket.id === ticketNumber);

    if (!ticket)
        throw new Error('Invalid ticket number');

    if (ticket.fullName !== fullName)
        throw new Error('Invalid passenger\'s name');

    ticket.registrationTime = nowTime;

    return true;
}
