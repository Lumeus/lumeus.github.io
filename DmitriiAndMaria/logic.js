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
	arr = document.getElementsByClassName("block");
	for (i = 0; i < arr.length; i++) {
		arr[i].innerHTML = '<img class="up" src="images/flowers.png"><div class="content">' + arr[i].innerHTML + '</div>'
	}
	countdown();
	setTimeout(() => {
		arr2 = document.getElementsByClassName("content");
		for (i = 0; i < arr.length; i++) {
			arr[i].innerHTML += '<div class="back" style="margin: -' + (arr2[i].clientHeight) + 
			'px 55px -333px; height: ' + (arr2[i].clientHeight - 200) + 
			'px"></div><img class="down" src="images/flowers.png" style="rotate: 180deg;">'
		}
	}, 15)

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