function getPilihanKomputer() {
	const com = Math.floor(Math.random() * 9 + 1);

	if (com <= 3) return 'gajah';
	if (com >= 4 && com <= 6) return 'orang';
	return 'semut';
}

function getHasil(com, player) {
	if (player == com)
		return 'SERI';
	if (player == 'gajah')
		return (com == 'orang' ? 'MENANG' : 'KALAH');
	if (player == 'orang')
		return (com == 'gajah' ? 'KALAH' : 'MENANG');
	if (player == 'semut')
		return (com == 'gajah' ? 'MENANG' : 'KALAH');
}



function putar() {
	const imgKom = document.querySelector('.img-komputer');
	const gambar = ['gajah', 'orang', 'semut'];
	let i = 0;
	const waktuMulai = new Date().getTime();

	setInterval(function() {
		if (new Date().getTime() - waktuMulai >= 1000) {
			clearInterval;
			return;
		}
		imgKom.setAttribute('src', `img/${gambar[i++]}.png`);
		if ( i == gambar.length) i = 0;
	}, 100);
}



const pilihanPlayer = document.querySelectorAll('li img');
pilihanPlayer.forEach(function(imgPilihan) {
	imgPilihan.addEventListener('click', function() {
		const pilihanKomputer = getPilihanKomputer();
		const pilihanPlayer = imgPilihan.className;

		const hasil = getHasil(pilihanKomputer, pilihanPlayer);

		putar();

		setTimeout(function() {
			const imgKom = document.querySelector('.img-komputer');
			imgKom.setAttribute('src', `img/${pilihanKomputer}.png`)
			
			const info = document.querySelector('.info');
			info.innerHTML = hasil;
		}, 1000);


		// console.log(imgPilihan);
	});

});



// const pGajah = document.querySelector('.gajah');
// pGajah.addEventListener('click', function() {
// 	const pilihanKomputer = getPilihanKomputer();
// 	const pilihanPlayer = pGajah.className;

// 	const hasil = getHasil(pilihanKomputer, pilihanPlayer);

// 	const imgKom = document.querySelector('.img-komputer');
// 	imgKom.setAttribute('src', `img/${pilihanKomputer}.png`)
	
// 	const info = document.querySelector('.info');
// 	info.innerHTML = hasil;
// });

// const pOrang = document.querySelector('.orang');
// pOrang.addEventListener('click', function() {
// 	const pilihanKomputer = getPilihanKomputer();
// 	const pilihanPlayer = pOrang.className;

// 	const hasil = getHasil(pilihanKomputer, pilihanPlayer);

// 	const imgKom = document.querySelector('.img-komputer');
// 	imgKom.setAttribute('src', `img/${pilihanKomputer}.png`)
	
// 	const info = document.querySelector('.info');
// 	info.innerHTML = hasil;
// });

// const pSemut = document.querySelector('.semut');
// pSemut.addEventListener('click', function() {
// 	const pilihanKomputer = getPilihanKomputer();
// 	const pilihanPlayer = pSemut.className;

// 	const hasil = getHasil(pilihanKomputer, pilihanPlayer);

// 	const imgKom = document.querySelector('.img-komputer');
// 	imgKom.setAttribute('src', `img/${pilihanKomputer}.png`)
	
// 	const info = document.querySelector('.info');
// 	info.innerHTML = hasil;
// });