'use strict';

/**
 * Функция генерации отчета по рейсу
 *
 * Отчет строится на основании данных, содержащихся в параметре flight
 *
 *  * проверка рейса
 *  * подсчет
 *
 * @param {World.flights} flights Все рейсы
 * @param {string} flightNumber номер рейса
 * @param {number} nowTime текущее время
 * @returns {Report} отчет
 */
function flightReport(flights, flightNumber, nowTime) {
    const flight = flights[flightNumber];

    if (!flight)
        throw new Error('Flight not found');

    const registration = flight.registrationStarts <= nowTime && nowTime <= flight.registrationEnds;
    const complete = nowTime > flight.registrationEnds;
    const countOfSeats = flight.seats;
    const reservedSeats = flight.tickets.length;
    const registeredSeats = flight.tickets.filter(t => t.registrationTime !== null).length;

    return {
        flight: flightNumber,
        registration,
        complete,
        countOfSeats,
        reservedSeats,
        registeredSeats
    };
}
