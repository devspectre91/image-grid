let xhr = new XMLHttpRequest();
let xhr2 = new XMLHttpRequest();
let photoGrid = document.querySelectorAll('.box');
// let imageBox = document.querySelector('.box');

xhr.open(
	'GET',
	'https://api.unsplash.com/photos/?client_id=BYkmaUkAY833OX0Q5kJ_izVDGQFTv93aBneVpTnjUHY'
);
xhr.onload = () => {
	let imageData = JSON.parse(xhr.response);
	console.log(JSON.parse(xhr.response));
	photoGrid.forEach((e, i, arr) => {
		e.firstElementChild.src = imageData[i].urls.small;
	});
};
xhr.send();

let input = document.querySelector('input');
input.addEventListener('keyup', (e) => {
	if (e.keyCode == 13) {
		xhr2.open(
			'GET',
			`https://api.unsplash.com/search/photos/?query=${e.target.value}&client_id=BYkmaUkAY833OX0Q5kJ_izVDGQFTv93aBneVpTnjUHY`
		);
		xhr2.onload = () => {
			let imageData2 = JSON.parse(xhr2.response);
			console.log(JSON.parse(xhr2.response));
			photoGrid.forEach((e, i, arr) => {
				e.firstElementChild.src = imageData2.results[i].urls.small;
			});
		};
		xhr2.send();
	}
});
