'use strict';

/**
 *
 * @param {HTMLElement} element
 * @param {HTMLElement} template
 */
function displayFlightsInit(element, template) {
    /**
     * @param {World.flights} flights
     */
    function displayFlights(flights) {
        console.log('*** List of all flights ***');
        console.table(flights);
        displayArray(
            template,
            element,
            Object.entries(flights).map(
                ([_, flight]) => ({
                    ...flight,
                    count: flight.tickets.length,
                })
            )
        );
    }

    return displayFlights;
}

