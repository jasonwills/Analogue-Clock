const hourHand = document.querySelector('.hourHand');
const minuteHand = document.querySelector('.minuteHand');
let hour = document.getElementById('hour');
let minutes = document.getElementById('minutes');

let hourValue = 12;
let minuteValue = 0;

let hourDeg = ((hourValue / 12 ) * 360 ); 
hourHand.style.transform = `rotate(${hourDeg}deg)`;
let minuteDeg = ((minuteValue / 60) * 360); 
minuteHand.style.transform = `rotate(${minuteDeg}deg)`;

hour.addEventListener('change', () => {
	hourValue = hour.value;
	if (minuteValue == 30) {
		hourDeg = ((hourValue / 12 ) * 360 ) + 15; 
		hourHand.style.transform = `rotate(${hourDeg}deg)`;
	} else {
		hourDeg = ((hourValue / 12 ) * 360 ); 
		hourHand.style.transform = `rotate(${hourDeg}deg)`;
	}
})

minutes.addEventListener('change', () => {
	minuteValue = minutes.value;
	if (minuteValue == 30) {
		hourDeg = ((hourValue / 12 ) * 360 ) + 15; 
		hourHand.style.transform = `rotate(${hourDeg}deg)`;
	} else {
		hourDeg = ((hourValue / 12 ) * 360 ); 
		hourHand.style.transform = `rotate(${hourDeg}deg)`;
	}
	minuteDeg = ((minuteValue / 60) * 360); 
	minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
})
