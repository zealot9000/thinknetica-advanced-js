'use strict';

const CHARCODE_A = 'A'.charCodeAt(0);

/**
 * Добавление рейса
 *
 * * назначение номера рейса
 * * подготовка рейса
 *   * вычисление времени регистрации
 *   * подготовка структуры Flight
 *
 * @param {World.flights} flights Все рейсы
 * @param {Airliner} airliner Информация о самолете
 * @param {number} time Время вылета
 * @param {string?} name Имя рейса
 * @returns {Flight} Рейс
 */
function addFlight(flights, airliner, time, name) {
    /// @type {Flight}

    while (name in flights) {
        name = [
            String.fromCharCode(CHARCODE_A + random(0, 26)),
            String.fromCharCode(CHARCODE_A + random(0, 26)),
            random(100, 999)
        ].join('');
    }

    /**
     * @type Flight
     */
    const flight = {
        name,
        seats: airliner.seats,
        businessSeats: airliner.businessSeats,
        registrationStarts: time - 5 * 3600 * 1000,
        registrationEnds: time - 1 * 3600 * 1000,
        tickets: [],
    };

    flights[name] = flight;

    return flight;
}
