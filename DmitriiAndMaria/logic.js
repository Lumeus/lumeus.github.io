function countdown() {
	const today = new Date();
	var weddingDate = new Date('29 jul 2023 13:00');
	const weddingTime = (weddingDate - today) / 1000;
	const weddingDays = Math.floor(weddingTime / (60 * 60 * 24)).toLocaleString(undefined, { minimumIntegerDigits: 2});
	const weddingHours = Math.floor((weddingTime / (60 * 60)) % 24).toLocaleString(undefined, { minimumIntegerDigits: 2});
	const weddingMins = Math.floor((weddingTime / 60) % 60).toLocaleString(undefined, { minimumIntegerDigits: 2});
	const weddingSecs = Math.floor(weddingTime % 60).toLocaleString(undefined, { minimumIntegerDigits: 2});
	document.getElementById("countdown").innerHTML = weddingDays + ':' + weddingHours + ':' + weddingMins + ':' + weddingSecs;
}

function createListeners() {
	if (screen.orientation.type.startsWith('portrait')) {
		document.querySelector('meta[name="viewport"]')
		.setAttribute('content', 'width=device-width, initial-scale=' + (screen.width/600));
	}
	screen.orientation.onchange = () => {
		if (screen.orientation.type.startsWith('portrait')) {
			document.querySelector('meta[name="viewport"]')
			.setAttribute('content', 'width=device-width, initial-scale=' + (screen.width/600));
		}
		else {
			document.querySelector('meta[name="viewport"]')
			.setAttribute('content', 'width=device-width, initial-scale=1');
		}
	}
	countdown();

	// 2gis maps
	var map;
    DG.then(function () {
        map = DG.map('map', {
            center: [55.8037, 43.159],
            zoom: 14
        });

        DG.marker([55.803403, 43.155986], {title: 'Загс'}).addTo(map).bindPopup('<h2>Загс</h2>Улица Надежды Крупской, 83а');
        DG.marker([55.803941, 43.16202], {title: 'Кафе'}).addTo(map).bindPopup('<h2>Кафе</h2>Улица Ленина, 15');
    });

	setInterval(countdown, 1000);
}

document.addEventListener('DOMContentLoaded', createListeners);