'use strict';

/**
 *
 * @param {HTMLElement} element
 * @param {HTMLElement} ticketsContainer
 * @param {HTMLElement} ticketTemplate
 */
function flightDetailsInit(element, ticketsContainer, ticketTemplate) {
    /**
     * @param {World.flights} flights
     * @param {string} flightNumber
     */
    function flightDetails(flights, flightNumber) {
        const flight = flights[flightNumber];

        if (!flight)
            return console.warn('Cannot display invalid flight');

        const report = flightReport(flights, flightNumber);
        console.log('flightDetails', report);
        replaceDataField(
            element,
            report
        );

        displayArray(ticketTemplate, ticketsContainer, flight.tickets);
    }

    return flightDetails;
}

