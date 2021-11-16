function callbackAgora() {

		// With a function defined separately
		function sayHi() {
		  alert('Hello Mr. Universe!');
		}
		
		let myGreeting = setTimeout(sayHi, 2000);
}
		let clearMyGreeting;
		let myGreeting;
function cancelParam(){	
		clearMyGreeting = setTimeout(clearTimeout(myGreeting), 2000);
		return clearMyGreeting;
};
function setParam(clearMyGreeting){

		function sayHi(Oi) {
		  alert(`Hello ${Oi}`);
		}
		
		myGreeting = setTimeout(sayHi, 5000, 'Sinval');
};

function stopInterval() {
		return clearInterval(createClock);
}

function displayTime() {
		let date = new Date();
		let time = date.toLocaleTimeString();
		document.getElementById('demo').textContent = time;
}

const createClock = setInterval(displayTime, 1000);