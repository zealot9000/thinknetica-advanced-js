let socket = new WebSocket("ws://localhost:8080");
const chatWindow = document.querySelector('#chatWindow');
const form = document.querySelector('form');

function setMessage(text) {
	let p = document.createElement('p');
	p.innerHTML = text;
	chatWindow.append(p)
}

function getFormData() {
  	return Object.fromEntries(new FormData(form));
}

function sendData(data) {
  	socket.send(JSON.stringify(data));
}

document.getElementById('buttons').addEventListener('click', function (e) {
	e.preventDefault();
	let data = getFormData();
	data.command = e.target.dataset.action;
	sendData(data);
});

socket.onopen = event => {
 	 setMessage('Connection established')
};

socket.onmessage = event => {
  	setMessage(event.data)
};

socket.onclose = event => {
	if (event.wasClean) {
		setMessage('Connection established')
	}
};
