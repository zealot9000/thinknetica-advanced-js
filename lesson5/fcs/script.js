'use strict';

/**
 * Объявление var variable в корне файла
 * равносильно присвоениею в window[variable]
 * что есть создание глобальной переменной между файлами
 */

let currentFlight = '';

var displayFlights = displayFlightsInit(
    document.getElementById('flight-list'),
    document.getElementById('flight-list-item-template'),
);

var flightDetails = flightDetailsInit(
    document.getElementById('flight-details'),
    document.getElementById('tickets-list'),
    document.getElementById('flight-details-ticket-template'),
);

function updateView() {
    displayFlights(world.flights);
    flightDetails(world.flights, 'BH118');
}

const result = addFlight(
    world.flights,
    {
        name: 'Airbus 747',
        seats: 36,
        businessSeats: 4,
    },
    makeTime(16, 0),
    'BH118',
);

let res = buyTicket(world.flights, 'BH118', makeTime(5, 10), 'Petrov I. I.');
let res2 = buyTicket(world.flights, 'BH118', makeTime(5, 10), 'Ivanov I. I.');

let flightNameList = Object.entries(world.flights).map(flight => flight[0]);
let dropdownFlightName = document.getElementById("select-flight");
const buyTicketForm = document.getElementById('buy-ticket-form');


let collectFormDataBeforeBuying = function(event) {
    event.preventDefault();

    const formData = {
        flightName: dropdownFlightName.options[dropdownFlightName.selectedIndex].value,
        fullName: buyTicketForm.elements.fullName.value,
        seatType: buyTicketForm.elements.seatType.value
    };

    try {
        const ticket = buyTicket(world.flights, formData.flightName, makeTime(5, 10), formData.fullName);
        alert(`Вы купили билет на место ${ticket.seat}`);
    } catch (error) {
        console.error(error);
        alert(error.message);
    }
    buyTicketForm.reset();
};

buyTicketForm.addEventListener('submit', collectFormDataBeforeBuying, true);


// Выводим список рейсов в форме покупки билетов
for(var i = 0; i < flightNameList.length; i++) {
    var opt = flightNameList[i];

    var el = document.createElement("option");
    el.text = opt;
    el.value = opt;

    dropdownFlightName.add(el);
}


updateView();
