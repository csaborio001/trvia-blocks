'use strict'

const puzzle = {
	init: function (start) {
		const nextBtn = document.getElementById('next');
		nextBtn.dataset.current = start;
	},
	shuffle: function () {
		const puzzContainer = document.getElementById('puzzle-container');
		const nextBtn = document.getElementById('next');
		const dataCurrent = document.querySelector('[data-current]');

		// console.log(dataCurrent.dataset.current);

		let numberOfPieces = 25;
		// let startNum = 1;

		const puzzlePieces = [];
		for (let i = 0; i < numberOfPieces; i++) {
			let red = puzzle.getRandomIntInclusive(0, 255);
			let green = puzzle.getRandomIntInclusive(0, 255);
			let blue = puzzle.getRandomIntInclusive(0, 255);
			let puzzlePiece = document.createElement('div');
			puzzlePiece.classList.add('puzzle-square');
			puzzlePiece.style.backgroundColor = `rgba(${red},${green},${blue})`;
			puzzlePieces.push(puzzlePiece);
		}
		puzzlePieces.forEach(piece => {
			puzzContainer.appendChild(piece);
		});

		const beginBtn = document.getElementById('begin');
		beginBtn.addEventListener('click', (e) => {
			puzzle.show(numberOfPieces);
		});


		nextBtn.addEventListener('click', () => {
			const next = parseInt(dataCurrent.dataset.current) + 1;
			nextBtn.dataset.current = next;
			const puzzleImage = document.getElementById('puzzle-image');
			puzzleImage.src = `img/img${next}.jpg`;
		});
	},
	show: function (stopCount) {
		const puzzlePieces = document.getElementsByClassName('puzzle-square');
		var randomArray = [];
		for (let i = 0; i < stopCount; i++) {
			randomArray.push(i);
		}
		randomArray = puzzle.shuffleArray(randomArray)

		for (let i = 0; i < stopCount; i++) {
			window.setTimeout(function () {
				puzzlePieces[randomArray[i]].classList.toggle('fade');

			}, i * 200);
		}
	},
	shuffleArray: function (arrayToShuffle) {
		return arrayToShuffle.sort(() => Math.random() - 0.5);
	},
	getRandomIntInclusive(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
	}

}

puzzle.init(1);
puzzle.shuffle();